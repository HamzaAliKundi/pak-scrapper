import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from '../utils/jobs-inspect-elements';

const getRoozeAdList = async (driver: WebDriver) => {
    const adsList = await driver.findElements(By.css(Config.rooze.articleKey));
    return adsList;
};

const getRoozeAdContent = async (roozeAd: WebElement) => {

}

export const extractRozeeAds = async (driver: WebDriver) => {
    if(!driver) return;
    let roozeeAds = await getRoozeAdList(driver);
    let roozeAdsDataList = [];

    for (let roozeeAd of roozeeAds) {
        let roozeAdContent = await getRoozeAdContent(roozeeAd);
        roozeAdsDataList.push(roozeAdContent);
    }

    return roozeAdsDataList;
}