import { graanaScript } from './graana';
import { zameenScript } from './zameen.com';

export const realEstateScrapper = async () => {
    await zameenScript();
    await graanaScript();
};