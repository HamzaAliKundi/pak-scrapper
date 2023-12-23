import dayjs from 'dayjs';
import chalk from 'chalk';
import { getHtmlDocument } from '../../utils/html';
import { scriptAnalytics } from '../../../backend/controllers/real-estate/scriptAnalytics';
import { cities, graanaType, makeGraanaUrl, propertyTypesBuy, propertyTypesRent, types } from './_helper';
import { extractGraanaAds } from './extracter';

export const graanaScript = async () => {
    const startTime = new Date();
    let count = 0;
    let scriptErrors: any[] = [];
    const scriptStartMillis = dayjs().valueOf();

    types
    propertyTypesRent
    propertyTypesBuy
    cities

    for (let type of types) {
        if (type === graanaType.rent) {
            for (let propertyType of propertyTypesRent) {
                for (let city of cities) {
                    let page = 1;
                    while (true) {
                        let url = makeGraanaUrl(type, propertyType, city, page);
                        console.log(chalk.gray("Url : ", url));

                        const driver = await getHtmlDocument(url);
                        if (!driver) break;
                        let zameenAds = await extractGraanaAds(driver);
                        await driver.quit();
                    }
                }
            }
        } else {
            for (let propertyType of propertyTypesBuy) {
                for (let city of cities) {
                    let page = 1;
                    while (true) {
                        let url = makeGraanaUrl(type, propertyType, city, page);
                        console.log(url);
                        break;
                    }
                }
            }
        }
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