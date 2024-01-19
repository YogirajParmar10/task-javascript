import addRecipe from "./addRecipe.js";
import { updateRecipe } from "./updateRecipe.js";
import { deleteRecipe } from "./deleteRecipe.js";
import { viewRacipes } from "./viewRecipe.js";

let index_no = 0;
const recipe = () => {
  // let index_no = 0;
  let option = prompt(
    "Enter option for following actions:\n 1. New Recipe \n 2. Update Recipe \n 3. Delete Recipe \n 4. View Recipes \n 5. Exit "
  );

  switch (option) {
    case "1":
      addRecipe();
      index_no++;
      break;

    case "2":
      updateRecipe();
      break;

    case "3":
      deleteRecipe();

    case "4":
      viewRacipes();

    case "5":
      break;

    default:
      console.log("Please enter valid option");
  }
};
export { index_no };
const btn = document.querySelector(".btn");
btn.addEventListener("click", recipe);
