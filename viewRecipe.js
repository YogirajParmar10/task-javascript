import { recipeObj, newRecipe, isRecipeNameUnique } from "./appModules.js";

export const viewRacipes = () => {
  for (let i = 0; i < newRecipe.length; i++) {
    console.log(newRecipe[i]);
  }
};
