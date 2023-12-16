import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { URL } from 'url';

const getHtmlDocument = async (
  url: string,
  params: Record<string, any> = {}
): Promise<WebDriver | undefined> => {
  const baseUrl = new URL(url);
  for (const key of Object.keys(params))
    baseUrl.searchParams.set(key, params[key]);
  try {
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().addArguments('--headless=new'))
      .build();
    await driver.get(baseUrl.toString());
    return driver;
  } catch (err) {
    console.error("Couldn't get " + url, err);
  }
};

export { getHtmlDocument };