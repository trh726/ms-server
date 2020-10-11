import express from "express";
import cors from "cors";
import { json } from "body-parser";

import { recipeRouter } from "./routes/recipe";
import { testRouter } from "./routes/test";
import { RecipeParser } from "./services/RecipeParser";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Root");
});

app.use(recipeRouter);
app.use(testRouter);

app.listen(3456, () => {
  console.log("Listening on port 3456!");
});
