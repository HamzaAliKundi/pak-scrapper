import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from '../utils/jobs-inspect-elements';
import chalk from "chalk";

const getRoozeAdList = async (driver: WebDriver) => {
    const adsList = await driver.findElements(By.css(Config.rooze.articleKey));
    return adsList;
};

const getRoozeAdContent = async (roozeAd: WebElement) => {
    let title = "";
    try {
        let titleElement = await roozeAd.findElement(By.css("h3.s-18 a bdi"));
        title = await titleElement.getText();
        // console.log("Title : ", title);
    } catch (error) {
        // console.log("Error in getting title element");
    }

    let url = "";
    try {
        let urlElement = await roozeAd.findElement(By.css("h3.s-18 a"));
        url = await urlElement.getAttribute("href");
        // console.log("Url : ", url);
    } catch (error) {
        // console.log("Error in getting url element");
    }

    let location = "";
    let city = "";
    try {
        let locationElements = await roozeAd.findElements(By.css("div.cname bdi.float-left a"));

        let locationTextArray = [];
        for (let locationElement of locationElements) {
            let locationText = await locationElement.getText();
            locationTextArray.push(locationText);
            location = locationTextArray.join(', ');
        }

        if (locationTextArray.length === 3) city = locationTextArray[1];
        // console.log("Combined location text: ", location);
        // console.log("city: ", city);
    } catch (error) {
        // console.log("Error in getting location element");
    }

    let description = "";
    try {
        let descriptionElement = await roozeAd.findElement(By.css("div.jbody bdi"));
        description = await descriptionElement.getText();
        // console.log("Description : ", description);
    } catch (error) {
        // console.log("Error in getting description element");
    }

    let postedOn = "";
    try {
        let postedOnElement = await roozeAd.findElement(By.css('div.col-md-12.float-left span'))
        postedOn = await postedOnElement.getText();
        // console.log("Posted On : ", postedOn);
    } catch (error) {
        // console.log("Error in getting postedOn element");
    }

    let experience = "";
    try {
        let experienceElement = await roozeAd.findElement(By.css('span.func-area-drn'))
        experience = await experienceElement.getText();
        // console.log("Experience On : ", experience);
    } catch (error) {
        // console.log("Error in getting experience element");
    }

    let salary = "";
    try {
        let salaryElement = await roozeAd.findElement(By.css('span i.sal.rz-salary + span'));
        salary = await salaryElement.getText();
        // console.log("Salary: ", salary.trim());
    } catch (error) {
        // console.log("Error in getting salary element");
    }

    return {
        title,
        url,
        location,
        city,
        description,
        postedOn,
        experience,
        salary
    }
}

export const extractRozeeAds = async (driver: WebDriver) => {
    if (!driver) return;
    let roozeeAds = await getRoozeAdList(driver);
    let roozeAdsDataList = [];

    for (let roozeeAd of roozeeAds) {
        let roozeAdContent = await getRoozeAdContent(roozeeAd);
        roozeAdsDataList.push(roozeAdContent);
    }

    return roozeAdsDataList;
}