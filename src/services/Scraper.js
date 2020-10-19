"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const RecipeParser_1 = require("./RecipeParser");
class Scraper {
    constructor(url) {
        this.url = url;
        this.tag = 'script[type="application/ld+json"]';
    }
    async scrape() {
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        await page.goto(this.url, { waitUntil: "domcontentloaded" });
        const jsonArray = await this.getJSONSchema(page);
        browser.close();
        if (jsonArray) {
            new RecipeParser_1.RecipeParser(jsonArray);
        }
        return;
    }
    async getJSONSchema(page) {
        try {
            const json = await page.$$eval(this.tag, (elements) => {
                return elements.map((element) => JSON.parse(`${element.textContent}`));
            });
            return json;
        }
        catch (e) {
            console.log(e);
            return;
        }
    }
}
exports.Scraper = Scraper;
