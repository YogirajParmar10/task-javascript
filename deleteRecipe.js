import { recipeObj, newRecipe, isRecipeNameUnique } from "./appModules.js";
// import { index_no } from "./app.js";

export const deleteRecipe = () => {
  const name = prompt(
    "Enter The name of Recipe you want to delete:"
  ).toUpperCase();
  for (let i = 0; i < newRecipe.length; i++) {
    if (newRecipe[i].name === name) {
      newRecipe.splice(i, 1);
    }
  }
  let index_no = 0;
  for (let i = 0; i < newRecipe.length; i++) {
    newRecipe[i].id = index_no;
    index_no++;
  }
};
