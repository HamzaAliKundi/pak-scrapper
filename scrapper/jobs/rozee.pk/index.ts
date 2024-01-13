import chalk from 'chalk';
import axios from 'axios';
import dayjs from 'dayjs';
import { makeUrl } from './_helper';
import { getHtmlDocument } from '../../utils/html';
import { extractRozeeAds } from './extracter';

export const rozeeScript = async () => {
    const startTime = new Date();
    let count = 0;
    let scriptErrors: any[] = [];
    const scriptStartMillis = dayjs().valueOf();
    
    let page = 0;
    while(true) {
        let url = makeUrl(page);
        console.log(chalk.gray("Url : ", url));
        const driver = await getHtmlDocument(url);
        if (!driver) break;
        let ads = await extractRozeeAds(driver);
        await driver.quit();
    }
};