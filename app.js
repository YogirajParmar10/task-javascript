let index_no = 0;

const recipeObj = {
  id: index_no,
  name: String,
  type: String,
  description: String,
};

let newRecipe = [];

const isRecipeNameUnique = (name) => {
  return !newRecipe.some((recipe) => recipe.name === name);
};

// add recipe

const addRecipe = () => {
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

// upadet recipe

const updateRecipe = () => {
  let name = prompt(
    "Enter The name of Recipe you want to update:"
  ).toUpperCase();
  for (let i = 0; i < newRecipe.length; i++) {
    if (newRecipe[i].name === name) {
      //
      newRecipe[i].name = prompt("please enter recipe name:")
        .toUpperCase()
        .trim();

      if (!newRecipe[i].name == "") {
        if (isRecipeNameUnique(newRecipe.name)) {
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

// delete recipe

const deleteRecipe = () => {
  let name = prompt(
    "Enter The name of Recipe you want to delete:"
  ).toUpperCase();
  for (let i = 0; i < newRecipe.length; i++) {
    if (newRecipe[i].name === name) {
      newRecipe.splice(i, 1);
    }
  }
  index_no = 0;
  for (let i = 0; i < newRecipe.length; i++) {
    newRecipe[i].id = index_no;
    index_no++;
  }
};

//view recipe

const viewRacipes = () => {
  for (let i = 0; i < newRecipe.length; i++) {
    console.log(newRecipe[i]);
  }
};

const recipe = () => {
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

const btn = document.querySelector(".btn");
btn.addEventListener("click", recipe);
