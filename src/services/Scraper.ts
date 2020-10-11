import { json } from "express";
import puppeteer from "puppeteer";
import { RecipeParser } from "./RecipeParser";

export class Scraper {
  private tag = 'script[type="application/ld+json"]';
  constructor(private url: string) {}

  async scrape() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(this.url, { waitUntil: "domcontentloaded" });
    const jsonArray: Object | undefined = await this.getJSONSchema(page);
    browser.close();
    if (jsonArray) {
      new RecipeParser(jsonArray);
    }
    return;
  }

  private async getJSONSchema(page: puppeteer.Page) {
    try {
      const json = await page.$$eval(this.tag, (elements) => {
        return elements.map((element) => JSON.parse(`${element.textContent}`));
      });
      return json;
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
