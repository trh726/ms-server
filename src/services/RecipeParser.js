"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeParser = void 0;
const time_1 = require("../helpers/time");
class RecipeParser {
    constructor(data) {
        this.data = data;
        this.sortData(data);
        this.recipe = this.buildRecipe();
        return this;
    }
    sortData(data) {
        [...Object.values(data)].forEach((item) => {
            if (item["@graph"]) {
                return this.sortData(item["@graph"]);
            }
            if (!item["@type"])
                return;
            switch (item["@type"]) {
                case "Recipe":
                    this.recipeSchema = item;
                    break;
                case "WebPage":
                    this.pageSchema = item;
                    break;
                case "Article":
                    this.articleSchema = item;
                    break;
                case "ImageObject":
                    this.imageObjectSchema = item;
                    break;
            }
        });
    }
    buildRecipe() {
        this.logSchema();
        return {
            title: this.buildTitle(),
            ingredients: this.buildIngredients(),
            yield: this.buildYield(),
            steps: this.buildSteps(),
            author: this.buildAuthor(),
            images: this.buildImages(),
            time: this.buildTime(),
        };
    }
    buildTitle() {
        return (this.recipeSchema.name ??
            this.articleSchema.headline ??
            this.pageSchema.name ??
            "");
    }
    buildAuthor() {
        if (this.recipeSchema.author) {
            const author = this.recipeSchema.author;
            if (author["@type"] && author["@type"] === "Person") {
                return author.givenName && author.familyName
                    ? `${author.givenName} ${author.familyName}`
                    : author.name
                        ? author.name
                        : "";
            }
        }
        return "";
    }
    buildYield() {
        return this.recipeSchema.recipeYield ?? "";
    }
    buildIngredients() {
        return this.recipeSchema.recipeIngredient ?? [];
    }
    buildSteps() {
        if (!this.recipeSchema.recipeInstructions)
            return [];
        const steps = [];
        this.recipeSchema.recipeInstructions.forEach((step) => {
            if (step["@type"] && step["@type"] === "HowToStep") {
                steps.push(step.text);
            }
        });
        return steps;
    }
    buildImages() {
        let images = [];
        if (this.imageObjectSchema?.url) {
            images.push(this.imageObjectSchema.url);
        }
        if (this.recipeSchema.image) {
            if (typeof this.recipeSchema.image === "object" &&
                Array.isArray(this.recipeSchema.image)) {
                [...this.recipeSchema.image].forEach((image) => images.push(image));
            }
            if (typeof this.recipeSchema.image === "string") {
                images.push(this.recipeSchema.image);
            }
        }
        return images;
    }
    buildTime() {
        let cookTime = {};
        if (this.recipeSchema.prepTime) {
            cookTime = {
                ...cookTime,
                prep: time_1.transformTime(this.recipeSchema.prepTime),
            };
        }
        if (this.recipeSchema.cookTime) {
            cookTime = {
                ...cookTime,
                cook: time_1.transformTime(this.recipeSchema.cookTime),
            };
        }
        if (this.recipeSchema.performTime) {
            cookTime = {
                ...cookTime,
                active: time_1.transformTime(this.recipeSchema.performTime),
            };
        }
        if (this.recipeSchema.totalTime) {
            cookTime = {
                ...cookTime,
                total: time_1.transformTime(this.recipeSchema.totalTime),
            };
        }
        return cookTime;
    }
    buildCategories() {
        const cats = [];
        if (this.recipeSchema.recipeCategory) {
            cats.push(this.recipeSchema.recipeCategory);
        }
        return cats;
    }
    maybeBuildDescription() {
        return (this.recipeSchema.description ??
            this.recipeSchema.disambiguatingDescription ??
            null);
    }
    logSchema() {
        /* console.log(this.recipeSchema);
        console.log(this.articleSchema); */
        /* console.log(this.pageSchema);
        console.log(this.imageObjectSchema); */
    }
}
exports.RecipeParser = RecipeParser;
