import {
  index_no,
  recipeObj,
  newRecipe,
  isRecipeNameUnique,
} from "./appModules.js";

const addRecipe = () => {
  //   let index_no = 0;
  recipeObj.id = index_no;
  recipeObj.name = prompt("Enter recipe name:").toUpperCase().trim();

  if (!recipeObj.name == "") {
    if (isRecipeNameUnique(recipeObj.name)) {
      recipeObj.type = prompt("Please enter the type of recipe:").toUpperCase();
      recipeObj.description = prompt(
        "Please enter the description for the recipe:"
      );
      newRecipe.push({ ...recipeObj });
      console.log(newRecipe);
    } else {
      alert("Recipe name must be unique.");
    }
  } else {
    alert("Please enter this feild");
  }
};

export default addRecipe;
