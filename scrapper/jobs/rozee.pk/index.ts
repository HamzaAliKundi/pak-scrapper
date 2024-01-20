import chalk from 'chalk';
import axios from 'axios';
import dayjs from 'dayjs';
import { makeUrl } from './_helper';
import { getHtmlDocument } from '../../utils/html';
import { extractRozeeAds } from './extracter';
import { scrapperBaseUrl } from '../../utils/scrapperBaseUrl';
import { scriptAnalytics } from '../../../backend/controllers/jobs/scriptAnalytics';

export const rozeeScript = async () => {
    const startTime = new Date();
    let count = 0;
    let scriptErrors: any[] = [];
    const scriptStartMillis = dayjs().valueOf();
    
    let page = 0;
    while(true) {
        let url = makeUrl(page);
        console.log(chalk.gray("Url : ", url));
        const driver = await getHtmlDocument(url);
        if (!driver) break;
        let roozeAds = await extractRozeeAds(driver);
        await driver.quit();

        let ads = roozeAds?.map(ad => {
            return {
                ...ad,
                website: "rooze.pk",
            }
        });

        console.log("ads", ads);
        let dupliCount = 0;
        try {
            await axios.post(`${scrapperBaseUrl}/jobs/ads`, ads).then((res) => {
                dupliCount = res.data.duplicateAds;
                if (ads)
                    count += ads?.length - res.data.duplicateAds;
            }).catch((err) => {
                console.log("Error : ", err)
            });
        } catch (error) {
            scriptErrors.push(error);
            console.log("Error while adding ads to db", error);
        }
        page++;
        console.log(chalk.gray("Duplicate Count : ", dupliCount));
        if (dupliCount > 20 || (ads?.length !== undefined && ads.length < 30)) break;
    }

    const timeTakenToExecute = Math.round((dayjs().valueOf() - scriptStartMillis) / 1000);

    const scriptAnalyticsObj = {
        startTime,
        totalCount: count,
        timeTakenToExecute,
        scriptErrors,
        website: "zameen.com",
    };
    console.log(chalk.bgGray('Scrapping done for graana.com', scriptAnalyticsObj));
    // await scriptAnalytics(scriptAnalyticsObj);
};