"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractZameenAds = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const real_estate_inspect_elements_1 = require("../utils/real-estate-inspect-elements");
const getZameenAdsList = (driver) => __awaiter(void 0, void 0, void 0, function* () {
    const adsList = yield driver.findElements(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.articleKey));
    return adsList;
});
const getZameenAdContent = (zameenAd, adsNo) => __awaiter(void 0, void 0, void 0, function* () {
    let price;
    try {
        const priceElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.price));
        price = yield priceElement.getText();
    }
    catch (error) {
        console.log("Error in gettig price");
    }
    let beds;
    try {
        const bedsElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.beds));
        beds = yield bedsElement.getText();
    }
    catch (error) {
        console.log("Error in getting beds element");
    }
    let baths;
    try {
        const bathsElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.baths));
        baths = yield bathsElement.getText();
    }
    catch (error) {
        console.log("Error in getting baths element");
    }
    let area;
    try {
        const areaElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.area));
        area = yield areaElement.getText();
    }
    catch (error) {
        console.log("Error in getting property area element");
    }
    let location = "";
    try {
        const locationElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.location));
        location = yield locationElement.getText();
    }
    catch (error) {
        console.log("Error in getting location element");
    }
    let title = "";
    try {
        const titleElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.title));
        title = yield titleElement.getText();
    }
    catch (error) {
        console.log("Error in getting title element");
    }
    let imageUrl = "";
    if (adsNo >= 6) {
        try {
            const pictureElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.pictureClass));
            const sourceElement = yield pictureElement.findElement(selenium_webdriver_1.By.css("source"));
            imageUrl = yield sourceElement.getAttribute("data-srcset");
        }
        catch (error) {
            console.log("Error in getting image url element");
        }
    }
    else {
        try {
            const imageUrlElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.imgClass));
            imageUrl = yield imageUrlElement.getAttribute("src");
        }
        catch (error) {
            console.log("Error in getting image url element");
        }
    }
    let url = "";
    try {
        const urlElement = yield zameenAd.findElement(selenium_webdriver_1.By.css(real_estate_inspect_elements_1.Config.zameen.url));
        url = yield urlElement.getAttribute("href");
    }
    catch (error) {
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
    };
});
const extractZameenAds = (driver) => __awaiter(void 0, void 0, void 0, function* () {
    if (!driver)
        return;
    let zameenAds = yield getZameenAdsList(driver);
    let zameenAdsDataList = [];
    let adsNo = 1;
    for (let zameenAd of zameenAds) {
        adsNo++;
        let zameenAdContent = yield getZameenAdContent(zameenAd, adsNo);
        zameenAdsDataList.push(zameenAdContent);
    }
    return zameenAdsDataList;
});
exports.extractZameenAds = extractZameenAds;
