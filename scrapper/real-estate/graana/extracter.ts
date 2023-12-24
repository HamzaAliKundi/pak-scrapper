import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from '../utils/real-estate-inspect-elements';
import chalk from 'chalk';

const getGraanaAdsList = async (driver: WebDriver) => {
    const adsList = await driver.findElements(By.css(Config.graana.articleKey));
    console.log("adsLength : ", adsList.length);
    return adsList;
};

const getgraanaAdContent = async (graanaAd: WebElement) => {
    let price;
    try {
        const priceElement = await graanaAd.findElement(By.css(Config.graana.price));
        price = await priceElement.getText();
    } catch (error) {
        // console.log("Error in gettig price");
    }

    let beds;
    let bath;
    let area;
    try {
        const elements = await graanaAd.findElements(By.css(Config.graana.beds));

        if (elements.length > 0) {
            beds = await elements[0].getText();
            bath = await elements[1].getText();
            area = await elements[2].getText();
        }
    } catch (error) {
        // console.log("Error in getting beds element");
    }

    let location = "";
    try {
        const locationElement = await graanaAd.findElement(By.css(Config.graana.location));
        location = await locationElement.getText();
    } catch (error) {
        // console.log("Error in getting location element");
    }

    let propertyType = "";
    try {
        const propertyTypeElement = await graanaAd.findElement(By.css(Config.graana.propertyType));
        propertyType = await propertyTypeElement.getText();
    } catch (error) {
        // console.log("Error in getting propertyType element");
    }

    let url = "";
    try {
        const urlElement = await graanaAd.findElement(By.css(Config.graana.url));
        url = await urlElement.getAttribute("href");
    } catch (error) {
        // console.log("Error in getting image url element");
    }


    let imageUrl = "";
    try {
        const imageUrlElement = await graanaAd.findElement(By.css("img.swiper-lazy.swiper-lazy-loaded"));
        imageUrl = await imageUrlElement.getAttribute("src");
    } catch (error) {
        // console.log("Error ins getting imageUrl");
    }

    return {
        price: price ? price : "0",
        bathRooms: bath ? parseInt(bath) : 0,
        bedRooms: beds ? parseInt(beds) : 0,
        area: area ? parseInt(area) : 0,
        location: location,
        title: "",
        propertyType,
        imageUrl: imageUrl,
        url: url,
    }
};

export const extractGraanaAds = async (driver: WebDriver) => {
    if (!driver) return;
    let GraanaAds = await getGraanaAdsList(driver);
    let graanaAdsDataList = [];
    for (let graanaAd of GraanaAds) {
        let graanaAdContent = await getgraanaAdContent(graanaAd);
        graanaAdsDataList.push(graanaAdContent);
    }
    return graanaAdsDataList;
};