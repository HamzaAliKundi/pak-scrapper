import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from '../utils/real-estate-inspect-elements';
import chalk from 'chalk';

const getZameenAdsList = async (driver: WebDriver) => {
    const adsList = await driver.findElements(By.css(Config.graana.articleKey));
    console.log("adsLength : ", adsList.length);
    return adsList;
};

const getgraanaAdContent = async (graanaAd: WebElement) => {
    let price;
    try {
        const priceElement = await graanaAd.findElement(By.css(Config.graana.price));
        price = await priceElement.getText();
        // console.log("Price : ", price);
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
            // console.log("Bedrooms: ", beds);
            // console.log("Bathrooms: ", bath);
            // console.log("Area: ", area);
        }
    } catch (error) {
        // console.log("Error in getting beds element");
    }

    let location = "";
    try {
        const locationElement = await graanaAd.findElement(By.css(Config.graana.location));
        location = await locationElement.getText();
        // console.log("location : ", location);
    } catch (error) {
        // console.log("Error in getting location element");
    }

    let propertyType = "";
    try {
        const propertyTypeElement = await graanaAd.findElement(By.css(Config.graana.propertyType));
        propertyType = await propertyTypeElement.getText();
        console.log("Property type : ", propertyType);
    } catch (error) {
        console.log("Error in getting propertyType element");
    }

    //     let imageUrl = "";
    //     if (adsNo >= 6) {
    //         try {
    //             const pictureElement = await graanaAd.findElement(By.css(Config.graana.pictureClass));
    //             const sourceElement = await pictureElement.findElement(By.css("source"));
    //             imageUrl = await sourceElement.getAttribute("data-srcset");
    //         } catch (error) {
    //             console.log("Error in getting image url element");
    //         }
    //     } else {
    //         try {
    //             const imageUrlElement = await graanaAd.findElement(By.css(Config.graana.imgClass));
    //             imageUrl = await imageUrlElement.getAttribute("src");
    //         } catch (error) {
    //             console.log("Error in getting image url element");
    //         }
    //     }

    //     let url = "";
    //     try {
    //         const urlElement = await graanaAd.findElement(By.css(Config.graana.url));
    //         url = await urlElement.getAttribute("href");
    //     } catch (error) {
    //         console.log("Error ins getting url");
    //     }

    //     return {
    //         price: price,
    //         bathRooms: baths ? parseInt(baths) : 0,
    //         bedRooms: beds ? parseInt(beds) : 0,
    //         area: area,
    //         location: location,
    //         title: title,
    //         imageUrl: imageUrl,
    //         url: url,
    //     }
};

export const extractGraanaAds = async (driver: WebDriver) => {
    if (!driver) return;
    let zameenAds = await getZameenAdsList(driver);
    let graanaAdsDataList = [];


    for (let graanaAd of zameenAds) {
        let graanaAdContent = await getgraanaAdContent(graanaAd);
        graanaAdsDataList.push(graanaAdContent);
    }

    return graanaAdsDataList;
};