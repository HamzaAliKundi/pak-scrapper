import dayjs from 'dayjs';
import chalk from 'chalk';
import axios from 'axios';
import { getHtmlDocument } from '../../utils/html';
import { scriptAnalytics } from '../../../backend/controllers/real-estate/scriptAnalytics';
import { cities, graanaType, makeGraanaUrl, propertyTypesBuy, propertyTypesRent, types } from './_helper';
import { extractGraanaAds } from './extracter';
import { scrapperBaseUrl } from '../../utils/scrapperBaseUrl';

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
                        let graanaAds = await extractGraanaAds(driver);
                        await driver.quit();

                        let ads = graanaAds?.map(ad => {
                            return {
                                ...ad,
                                website: "graana.com",
                                city: city.toLowerCase(),
                                type: "rent",
                            }
                        });

                        console.log(ads)
                        let dupliCount = 0;
                        try {
                            await axios.post(`${scrapperBaseUrl}/real-estate/ads`, ads).then((res) => {
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
                }
            }
        } else {
            for (let propertyType of propertyTypesBuy) {
                for (let city of cities) {
                    let page = 1;
                    while (true) {
                        let url = makeGraanaUrl(type, propertyType, city, page);
                        console.log(chalk.gray("Url : ", url));

                        const driver = await getHtmlDocument(url);
                        if (!driver) break;
                        let graanaAds = await extractGraanaAds(driver);
                        await driver.quit();

                        let ads = graanaAds?.map(ad => {
                            return {
                                ...ad,
                                website: "graana.com",
                                city: city.toLowerCase(),
                                type: "buy",
                            }
                        });

                        console.log(ads)
                        let dupliCount = 0;
                        try {
                            await axios.post(`${scrapperBaseUrl}/real-estate/ads`, ads).then((res) => {
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