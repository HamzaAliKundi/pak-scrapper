import chalk from 'chalk';
import axios from 'axios';
import dayjs from 'dayjs';
import { extractZameenAds } from './extracter';
import { getHtmlDocument } from '../../utils/html';
import { scrapperBaseUrl } from '../../utils/scrapperBaseUrl';
import { scriptAnalytics } from '../../../backend/controllers/real-estate/scriptAnalytics';
import { cities, getZameenExtractedCityName, getZameenExtractedPropertyType, getZameenExtractedType, makeZameenUrl, propertTypes } from './_helper';

export const zameenScript = async () => {
    const startTime = new Date();
    let count = 0;
    let scriptErrors: any[] = [];
    const scriptStartMillis = dayjs().valueOf();

    propertTypes
    cities

    for (const propertyType of propertTypes) {
        for (let city of cities) {
            let page = 1;
            while (true) {
                const url = makeZameenUrl(propertyType, city, page);
                console.log(chalk.gray("Url : ", url));

                const driver = await getHtmlDocument(url);
                if (!driver) break;
                let zameenAds = await extractZameenAds(driver);
                await driver.quit();

                let ads = zameenAds?.map(ad => {
                    return {
                        ...ad,
                        website: "zameen.com",
                        city: getZameenExtractedCityName(city),
                        type: getZameenExtractedType(propertyType),
                        propertyType: getZameenExtractedPropertyType(propertyType)
                    }
                });
                console.log(ads)
                let dupliCount = 0;
                try {
                    await axios.post(`${scrapperBaseUrl}/real-estate/zameen/ads`, ads).then((res) => {
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
                if (dupliCount > 20 || (ads?.length !== undefined && ads.length < 25)) break;
            }
        };
    };

    const timeTakenToExecute = Math.round((dayjs().valueOf() - scriptStartMillis) / 1000);

    const scriptAnalyticsObj = {
        startTime,
        totalCount: count,
        timeTakenToExecute,
        scriptErrors,
        website: "zameen.com",
    };
    console.log(chalk.bgGray('Scrapping done for zameen.com', scriptAnalyticsObj));
    // await scriptAnalytics(scriptAnalyticsObj);
};
