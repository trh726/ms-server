import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { Scraper } from "../services/Scraper";

const router = express.Router();
const route = "/recipe";
router.get(route, (req, res) => {
  return res.send("Here's your Recipe.");
});

router.post(
  route,
  [body("url").isURL().withMessage("Must be a valid url.")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(errors.array());
    }

    const { url } = req.body;
    console.log(url);
    const scraper = new Scraper(url);
    const data = await scraper.scrape();
    console.log(data);
    res.send(data);
  }
);

export { router as recipeRouter };
