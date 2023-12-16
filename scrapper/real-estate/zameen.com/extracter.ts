import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from '../utils/real-estate-inspect-elements';

const getZameenAdsList = async (driver: WebDriver) => {
    const adsList = await driver.findElements(By.css(Config.zameen.articleKey));
    return adsList;
};

const getZameenAdContent = async (zameenAd: WebElement, adsNo: number) => {
    let price;
    try {
        const priceElement = await zameenAd.findElement(By.css(Config.zameen.price));
        price = await priceElement.getText();
    } catch (error) {
        console.log("Error in gettig price");
    }

    let beds;
    try {
        const bedsElement = await zameenAd.findElement(By.css(Config.zameen.beds));
        beds = await bedsElement.getText();
    } catch (error) {
        console.log("Error in getting beds element");
    }

    let baths;
    try {
        const bathsElement = await zameenAd.findElement(By.css(Config.zameen.baths));
        baths = await bathsElement.getText();
    } catch (error) {
        console.log("Error in getting baths element");
    }

    let area;
    try {
        const areaElement = await zameenAd.findElement(By.css(Config.zameen.area));
        area = await areaElement.getText();
    } catch (error) {
        console.log("Error in getting property area element");
    }

    let location = "";
    try {
        const locationElement = await zameenAd.findElement(By.css(Config.zameen.location));
        location = await locationElement.getText();
    } catch (error) {
        console.log("Error in getting location element");
    }

    let title = "";
    try {
        const titleElement = await zameenAd.findElement(By.css(Config.zameen.title));
        title = await titleElement.getText();
    } catch (error) {
        console.log("Error in getting title element");
    }

    let imageUrl = "";
    if (adsNo >= 6) {
        try {
            const pictureElement = await zameenAd.findElement(By.css(Config.zameen.pictureClass));
            const sourceElement = await pictureElement.findElement(By.css("source"));
            imageUrl = await sourceElement.getAttribute("data-srcset");
        } catch (error) {
            console.log("Error in getting image url element");
        }
    } else {
        try {
            const imageUrlElement = await zameenAd.findElement(By.css(Config.zameen.imgClass));
            imageUrl = await imageUrlElement.getAttribute("src");
        } catch (error) {
            console.log("Error in getting image url element");
        }
    }

    let url = "";
    try {
        const urlElement = await zameenAd.findElement(By.css(Config.zameen.url));
        url = await urlElement.getAttribute("href");
    } catch (error) {
        console.log("Error ins getting url");
    }

    return {
        price: price,
        bathRooms: baths ? parseInt(baths) : 0,
        bedRooms: beds ? parseInt(beds) : 0,
        area: area,
        location: location,
        title: title,
        imageUrl: imageUrl,
        url: url,
    }
};

export const extractZameenAds = async (driver: WebDriver) => {
    if (!driver) return;
    let zameenAds = await getZameenAdsList(driver);
    let zameenAdsDataList = [];

    let adsNo = 1;
    for (let zameenAd of zameenAds) {
        adsNo++;
        let zameenAdContent = await getZameenAdContent(zameenAd, adsNo);
        zameenAdsDataList.push(zameenAdContent);
    }

    return zameenAdsDataList;
};