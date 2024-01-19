import { index_no } from "./app.js";

const recipeObj = {
  id: 0,
  name: String,
  type: String,
  description: String,
};

const newRecipe = [];

const isRecipeNameUnique = (name) => {
  return !newRecipe.some((recipe) => recipe.name === name);
};

export { index_no, recipeObj, newRecipe, isRecipeNameUnique };
