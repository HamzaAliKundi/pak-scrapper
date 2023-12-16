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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zameenScript = void 0;
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
const dayjs_1 = __importDefault(require("dayjs"));
const extracter_1 = require("./extracter");
const html_1 = require("../../utils/html");
const scrapperBaseUrl_1 = require("../../utils/scrapperBaseUrl");
const _helper_1 = require("./_helper");
const zameenScript = () => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = new Date();
    let count = 0;
    let scriptErrors = [];
    const scriptStartMillis = (0, dayjs_1.default)().valueOf();
    _helper_1.propertTypes;
    _helper_1.cities;
    for (const propertyType of _helper_1.propertTypes) {
        for (let city of _helper_1.cities) {
            let page = 1;
            while (true) {
                const url = (0, _helper_1.makeZameenUrl)(propertyType, city, page);
                console.log(chalk_1.default.gray("Url : ", url));
                const driver = yield (0, html_1.getHtmlDocument)(url);
                if (!driver)
                    break;
                let zameenAds = yield (0, extracter_1.extractZameenAds)(driver);
                yield driver.quit();
                let ads = zameenAds === null || zameenAds === void 0 ? void 0 : zameenAds.map(ad => {
                    return Object.assign(Object.assign({}, ad), { website: "zameen.com", city: (0, _helper_1.getZameenExtractedCityName)(city), type: (0, _helper_1.getZameenExtractedType)(propertyType), propertyType: (0, _helper_1.getZameenExtractedPropertyType)(propertyType) });
                });
                console.log(ads);
                let dupliCount = 0;
                try {
                    yield axios_1.default.post(`${scrapperBaseUrl_1.scrapperBaseUrl}/real-estate/zameen/ads`, ads).then((res) => {
                        dupliCount = res.data.duplicateAds;
                        if (ads)
                            count += (ads === null || ads === void 0 ? void 0 : ads.length) - res.data.duplicateAds;
                    }).catch((err) => {
                        console.log("Error : ", err);
                    });
                }
                catch (error) {
                    scriptErrors.push(error);
                    console.log("Error while adding ads to db", error);
                }
                page++;
                console.log(chalk_1.default.gray("Duplicate Count : ", dupliCount));
                if (dupliCount > 20 || ((ads === null || ads === void 0 ? void 0 : ads.length) !== undefined && ads.length < 25))
                    break;
            }
        }
        ;
    }
    ;
    const timeTakenToExecute = Math.round(((0, dayjs_1.default)().valueOf() - scriptStartMillis) / 1000);
    const scriptAnalyticsObj = {
        startTime,
        totalCount: count,
        timeTakenToExecute,
        scriptErrors,
        website: "zameen.com",
    };
    console.log(chalk_1.default.bgGray('Scrapping done for zameen.com', scriptAnalyticsObj));
    // await scriptAnalytics(scriptAnalyticsObj);
});
exports.zameenScript = zameenScript;
