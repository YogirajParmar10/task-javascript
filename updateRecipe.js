import { recipeObj, newRecipe, isRecipeNameUnique } from "./appModules.js";

export const updateRecipe = () => {
  const name = prompt(
    "Enter The name of Recipe you want to update:"
  ).toUpperCase();
  for (let i = 0; i < newRecipe.length; i++) {
    if (newRecipe[i].name === name) {
      const newName = prompt("please enter recipe name:").toUpperCase().trim();

      if (!newName == "") {
        if (isRecipeNameUnique(newName)) {
          newRecipe[i].name = newName;
          newRecipe[i].type = prompt(
            "Please enter the type of recipe:"
          ).toUpperCase();
          newRecipe[i].description = prompt(
            "Please enter the description for the recipe:"
          );
        } else {
          alert("Recipe name must be unique.");
        }
      } else {
        alert("Please enter this feild");
      }
    }
  }
};
