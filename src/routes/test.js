"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = __importDefault(require("express"));
const RecipeParser_1 = require("../services/RecipeParser");
const router = express_1.default.Router();
exports.testRouter = router;
const route = "/test";
router.get(route, (req, res) => {
    return res.send("Connected");
});
const testData = [
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://kalynskitchen.com/#organization",
                name: "Kalyn's Kitchen",
                url: "https://kalynskitchen.com/",
                sameAs: [
                    "http://www.facebook.com/kalynskitchen",
                    "http://instagram.com/kalynskitchen/",
                    "https://www.youtube.com/channel/UC_Zpz9l_3geHKKCJtAnvTIg",
                    "http://pinterest.com/kalynskitchen/",
                    "https://twitter.com/kalynskitchen",
                ],
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://kalynskitchen.com/#logo",
                    inLanguage: "en-US",
                    url: "https://kalynskitchen.com/wp-content/uploads/2017/09/logo.png",
                    width: 610,
                    height: 100,
                    caption: "Kalyn's Kitchen",
                },
                image: {
                    "@id": "https://kalynskitchen.com/#logo",
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://kalynskitchen.com/#website",
                url: "https://kalynskitchen.com/",
                name: "Kalyn&#039;s Kitchen",
                description: "Creative Carb-Conscious Recipes",
                publisher: {
                    "@id": "https://kalynskitchen.com/#organization",
                },
                potentialAction: [
                    {
                        "@type": "SearchAction",
                        target: "https://kalynskitchen.com/?s={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                ],
                inLanguage: "en-US",
            },
            {
                "@type": "ImageObject",
                "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#primaryimage",
                inLanguage: "en-US",
                url: "https://kalynskitchen.com/wp-content/uploads/2017/09/2-550-twice-baked-cauliflower-1.jpg",
                width: 550,
                height: 825,
            },
            {
                "@type": "WebPage",
                "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#webpage",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/",
                name: "Low-Carb Twice-Baked Cauliflower (Video) &ndash; Kalyn&#039;s Kitchen",
                isPartOf: {
                    "@id": "https://kalynskitchen.com/#website",
                },
                primaryImageOfPage: {
                    "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#primaryimage",
                },
                datePublished: "2017-09-19T20:07:00+00:00",
                dateModified: "2020-09-19T20:30:30+00:00",
                description: "Low-Carb Twice-Baked Cauliflower is a side dish that the entire family will love, and this tasty cauliflower dish is also Keto and gluten-free.",
                inLanguage: "en-US",
                potentialAction: [
                    {
                        "@type": "ReadAction",
                        target: [
                            "https://kalynskitchen.com/twice-baked-cauliflower-recipe/",
                        ],
                    },
                ],
            },
            {
                "@type": "Article",
                "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#article",
                isPartOf: {
                    "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#webpage",
                },
                author: {
                    "@id": "https://kalynskitchen.com/#/schema/person/9e3983ea9544844fae388c70431126e7",
                },
                headline: "Low-Carb Twice-Baked Cauliflower (Video)",
                datePublished: "2017-09-19T20:07:00+00:00",
                dateModified: "2020-09-19T20:30:30+00:00",
                mainEntityOfPage: {
                    "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#webpage",
                },
                commentCount: "327",
                publisher: {
                    "@id": "https://kalynskitchen.com/#organization",
                },
                image: {
                    "@id": "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#primaryimage",
                },
                keywords: "Cauliflower,Pork",
                articleSection: "Can Freeze,Casseroles,Easy to Cook,Favorites,Holiday Recipes,Kid Friendly,Recipes,Side Dishes,Thanksgiving,Video,Weekend Food Prep",
                inLanguage: "en-US",
                potentialAction: [
                    {
                        "@type": "CommentAction",
                        name: "Comment",
                        target: [
                            "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#respond",
                        ],
                    },
                ],
            },
            {
                "@type": "Person",
                "@id": "https://kalynskitchen.com/#/schema/person/9e3983ea9544844fae388c70431126e7",
                name: "Kalyn Denny",
            },
        ],
    },
    {
        "@context": "http://schema.org",
        "@type": "Recipe",
        name: "Low-Carb Twice Baked Cauliflower",
        author: {
            "@type": "Person",
            name: "Kalyn Denny",
        },
        datePublished: "2019-11-12",
        recipeYield: 8,
        image: [
            "https://kalynskitchen.com/wp-content/uploads/2017/09/1-text-550-twice-baked-cauliflower-480x480.jpg",
            "https://kalynskitchen.com/wp-content/uploads/2017/09/1-text-550-twice-baked-cauliflower-480x360.jpg",
            "https://kalynskitchen.com/wp-content/uploads/2017/09/1-text-550-twice-baked-cauliflower-480x270.jpg",
            "https://kalynskitchen.com/wp-content/uploads/2017/09/1-text-550-twice-baked-cauliflower.jpg",
        ],
        recipeCategory: "Side Dishes",
        prepTime: "PT20M",
        cookTime: "PT35M",
        performTime: "PT35M",
        totalTime: "PT55M",
        recipeIngredient: [
            "1 large head cauliflower",
            "4 oz. cream cheese, cut into cubes",
            "1/2 cup sour cream",
            "1/4 cup green onions, minced",
            "1/4 cup freshly grated Parmesan cheese (or more)",
            "6 slices bacon, cooked until very crisp, fat blotted with paper towel and then crumbled",
            "1 cup grated sharp cheddar cheese",
        ],
        recipeInstructions: [
            {
                "@type": "HowToStep",
                text: "Preheat oven to 350F/180C.",
                position: 1,
                name: "Preheat oven to 350F/180C.",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_1",
            },
            {
                "@type": "HowToStep",
                text: "Spray a glass casserole dish with olive oil or non-stick spray.",
                position: 2,
                name: "Spray a glass casserole dish with olive oil...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_2",
            },
            {
                "@type": "HowToStep",
                text: "Cut out stem and core from cauliflower, and cut into small pieces.",
                position: 3,
                name: "Cut out stem and core from cauliflower, and...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_3",
            },
            {
                "@type": "HowToStep",
                text: "Cook in large pot of boiling salted water until cauliflower is tender, but not overly soft.",
                position: 4,
                name: "Cook in large pot of boiling salted water...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_4",
            },
            {
                "@type": "HowToStep",
                text: "Drain well and mash with potato masher (affiliate link), leaving some chunks.",
                position: 5,
                name: "Drain well and mash with potato masher (affiliate...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_5",
            },
            {
                "@type": "HowToStep",
                text: "While cauliflower is cooking, cook the bacon and crumble, slice green onions, cube the cream cheese, measure sour cream, and measure Parmesan.",
                position: 6,
                name: "While cauliflower is cooking, cook the bacon and...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_6",
            },
            {
                "@type": "HowToStep",
                text: "Mix cream cheese, sour cream, green onion, Parmesan, and 3/4 of the crumbled bacon into the drained cauliflower.",
                position: 7,
                name: "Mix cream cheese, sour cream, green onion, Parmesan,...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_7",
            },
            {
                "@type": "HowToStep",
                text: "Spread evenly in a 1.5 Quart Glass Casserole Dish (affiliate link).",
                position: 8,
                name: "Spread evenly in a 1.5 Quart Glass Casserole...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_8",
            },
            {
                "@type": "HowToStep",
                text: "Sprinkle with cheddar cheese and reserved bacon.",
                position: 9,
                name: "Sprinkle with cheddar cheese and reserved bacon.",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_9",
            },
            {
                "@type": "HowToStep",
                text: "Bake 20-25 minutes covered, or until hot and bubbly.",
                position: 10,
                name: "Bake 20-25 minutes covered, or until hot and...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_10",
            },
            {
                "@type": "HowToStep",
                text: "Remove the lid and bake about 10 minutes more, or until the cheese is slightly browned. Serve hot.",
                position: 11,
                name: "Remove the lid and bake about 10 minutes...",
                url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/#mv_create_12_11",
            },
        ],
        keywords: "Twice-Baked Cauliflower",
        nutrition: {
            "@type": "NutritionInformation",
            calories: "292 calories",
            carbohydrateContent: "6.4 grams carbohydrates",
            cholesterolContent: "62 milligrams cholesterol",
            fatContent: "23 grams fat",
            fiberContent: "3 grams fiber",
            proteinContent: "14 grams protein",
            saturatedFatContent: "12 grams saturated fat",
            servingSize: "1",
            sodiumContent: "468 grams sodium",
            sugarContent: "3 grams sugar",
            unsaturatedFatContent: "8 grams unsaturated fat",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.4",
            reviewCount: 48,
        },
        url: "https://kalynskitchen.com/twice-baked-cauliflower-recipe/",
    },
];
router.post(route, (req, res) => {
    const recipe = new RecipeParser_1.RecipeParser(testData);
    return res.send(recipe.recipe);
});
