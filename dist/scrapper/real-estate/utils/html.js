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
exports.getHtmlDocument = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
const url_1 = require("url");
const getHtmlDocument = (url, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = new url_1.URL(url);
    for (const key of Object.keys(params))
        baseUrl.searchParams.set(key, params[key]);
    try {
        const driver = yield new selenium_webdriver_1.Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome_1.default.Options().addArguments('--headless=new'))
            .build();
        yield driver.get(baseUrl.toString());
        return driver;
    }
    catch (err) {
        console.error("Couldn't get " + url, err);
    }
});
exports.getHtmlDocument = getHtmlDocument;
