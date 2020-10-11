import { CookTime, transformTime } from "../helpers/time";

interface Recipe {
  title: string;
  author: string;
  yield: string;
  ingredients: string[];
  steps: string[];
  images: string[];
  time: CookTime;
  description?: string;
  category?: string[];
  keywords?: string[];
}

export class RecipeParser {
  private recipeSchema?: any;
  private articleSchema?: any;
  private pageSchema?: any;
  private imageObjectSchema?: any;
  recipe: Recipe;
  constructor(private data: {}) {
    this.sortData(data);
    this.recipe = this.buildRecipe();
    return this;
  }
  private sortData(data: Object): void {
    [...Object.values(data)].forEach((item: any) => {
      if (item["@graph"]) {
        return this.sortData(item["@graph"]);
      }
      if (!item["@type"]) return;
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

  private buildRecipe(): Recipe {
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

  buildTitle(): string {
    return (
      this.recipeSchema.name ??
      this.articleSchema.headline ??
      this.pageSchema.name ??
      ""
    );
  }

  buildAuthor(): string {
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

  buildYield(): string {
    return this.recipeSchema.recipeYield ?? "";
  }

  buildIngredients(): string[] {
    return this.recipeSchema.recipeIngredient ?? [];
  }

  buildSteps(): string[] {
    if (!this.recipeSchema.recipeInstructions) return [];
    const steps: string[] = [];
    this.recipeSchema.recipeInstructions.forEach((step: any) => {
      if (step["@type"] && step["@type"] === "HowToStep") {
        steps.push(step.text);
      }
    });
    return steps;
  }

  buildImages(): string[] {
    let images: string[] = [];
    if (this.imageObjectSchema?.url) {
      images.push(this.imageObjectSchema.url);
    }
    if (this.recipeSchema.image) {
      if (
        typeof this.recipeSchema.image === "object" &&
        Array.isArray(this.recipeSchema.image)
      ) {
        [...this.recipeSchema.image].forEach((image) => images.push(image));
      }
      if (typeof this.recipeSchema.image === "string") {
        images.push(this.recipeSchema.image);
      }
    }
    return images;
  }

  buildTime(): CookTime {
    let cookTime = {};
    if (this.recipeSchema.prepTime) {
      cookTime = {
        ...cookTime,
        prep: transformTime(this.recipeSchema.prepTime),
      };
    }
    if (this.recipeSchema.cookTime) {
      cookTime = {
        ...cookTime,
        cook: transformTime(this.recipeSchema.cookTime),
      };
    }
    if (this.recipeSchema.performTime) {
      cookTime = {
        ...cookTime,
        active: transformTime(this.recipeSchema.performTime),
      };
    }
    if (this.recipeSchema.totalTime) {
      cookTime = {
        ...cookTime,
        total: transformTime(this.recipeSchema.totalTime),
      };
    }
    return cookTime;
  }

  buildCategories(): string[] {
    const cats = [];
    if (this.recipeSchema.recipeCategory) {
      cats.push(this.recipeSchema.recipeCategory);
    }
    return cats;
  }

  maybeBuildDescription(): string | void {
    return (
      this.recipeSchema.description ??
      this.recipeSchema.disambiguatingDescription ??
      null
    );
  }

  logSchema(): void {
    /* console.log(this.recipeSchema);
    console.log(this.articleSchema); */
    /* console.log(this.pageSchema);
    console.log(this.imageObjectSchema); */
  }
}
