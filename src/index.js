"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const recipe_1 = require("./routes/recipe");
const test_1 = require("./routes/test");
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.json());
app.get("/", (req, res) => {
    res.send("Root");
});
app.use(recipe_1.recipeRouter);
app.use(test_1.testRouter);
app.listen(3456, () => {
    console.log("Listening on port 3456!");
});
