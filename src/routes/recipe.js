"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const Scraper_1 = require("../services/Scraper");
const router = express_1.default.Router();
exports.recipeRouter = router;
const route = "/recipe";
router.get(route, (req, res) => {
    return res.send("Here's your Recipe.");
});
router.post(route, [express_validator_1.body("url").isURL().withMessage("Must be a valid url.")], async (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(errors.array());
    }
    const { url } = req.body;
    console.log(url);
    const scraper = new Scraper_1.Scraper(url);
    const data = await scraper.scrape();
    console.log(data);
    res.send(data);
});
