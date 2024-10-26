function initApp() {
  const resultRecipes = document.querySelector("#resultado");
  const selectCategories = document.querySelector("#categorias");

  //   Seleccion de option
  if (selectCategories) {
    selectCategories.addEventListener("change", selectCategory);
    getCategories();
  }

  // const pageFavoriteDiv = document.querySelector(".favoritos");
  const pageFavoritesDiv = document.querySelector(".favoritos");
  if (pageFavoritesDiv) {
    getFavorites();
  }

  const modal = new bootstrap.Modal("#modal", {});

  function getCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(url)
      .then((response) => response.json())
      .then((result) => showCategories(result.categories));
  }

  //   Muestra las categorias en el select
  function showCategories(categories = []) {
    categories.forEach((category) => {
      const { strCategory } = category;
      const tagOption = document.createElement("OPTION");
      tagOption.value = strCategory;
      tagOption.textContent = strCategory;
      selectCategories.appendChild(tagOption);
    });
  }

  function selectCategory(e) {
    const optionValue = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${optionValue}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => showRecipes(result.meals));
  }

  function showRecipes(recipes = []) {
    cleaNHTML(resultRecipes);

    const heading = document.createElement("H2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recipes.length ? "Resultados" : "No hay resultados";
    resultRecipes.appendChild(heading);

    // Iterar los resultados
    recipes.forEach((recipe) => {
      const { idMeal, strMeal, strMealThumb } = recipe;

      const recipesContainer = document.createElement("DIV");
      recipesContainer.classList.add("col-md-4");

      const recipeCard = document.createElement("DIV");
      recipeCard.classList.add("card", "mb-4");

      const recipeImage = document.createElement("IMG");
      recipeImage.classList.add("card-img-top");
      recipeImage.alt = strMeal ?? recipe.title;
      recipeImage.src = strMealThumb ?? recipe.img;

      const cardBody = document.createElement("DIV");
      cardBody.classList.add("card-body");

      const recipeHeading = document.createElement("H3");
      recipeHeading.classList.add("card-title", "mb-3");
      recipeHeading.textContent = strMeal ?? recipe.title;

      const recipeBtn = document.createElement("BUTTON");
      recipeBtn.classList.add("btn", "btn-danger", "w-100");
      recipeBtn.textContent = "Ver Receta";
      //   recipeBtn.dataset.bsTarget = "#modal";
      //   recipeBtn.dataset.bsToggle = "modal";

      recipeBtn.onclick = function () {
        selectRecipe(idMeal ?? recipe.id);
      };

      //   Mostrar en el HTML
      cardBody.appendChild(recipeHeading);
      cardBody.appendChild(recipeBtn);

      recipeCard.appendChild(recipeImage);
      recipeCard.appendChild(cardBody);

      recipesContainer.appendChild(recipeCard);

      resultRecipes.appendChild(recipesContainer);
    });
  }

  function selectRecipe(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => showModalRecipe(result.meals[0]));
  }

  function showModalRecipe(recipe) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = recipe;

    //   Añadir contenido al modal
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
      <img src="${strMealThumb}" alt="${strMeal}" class="img-fluid" />
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredientes</h3>

    `;

    const listGroup = document.createElement("UL");
    listGroup.classList.add("list-group");

    //   Mostrar cantidades e ingrdientes
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        const ingredientLi = document.createElement("LI");
        ingredientLi.classList.add("list-group-item");
        ingredientLi.textContent = `${measure} - ${ingredient}`;

        listGroup.appendChild(ingredientLi);
      }
    }

    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector(".modal-footer");
    cleaNHTML(modalFooter);
    // Favoritos
    const buttonFavorite = document.createElement("BUTTON");
    buttonFavorite.classList.add("btn", "btn-danger", "col");
    buttonFavorite.textContent = existStorage(idMeal)
      ? "Eliminar de favoritos"
      : "Guardar como favoritos";

    modalFooter.appendChild(buttonFavorite);

    // LocalStorage
    buttonFavorite.onclick = function () {
      if (existStorage(idMeal)) {
        deleteFavorite(idMeal);
        buttonFavorite.textContent = "Guardar como favoritos";
        showToast("Se ha eliminado correctamente");
        return;
      }

      addFavorite({
        id: idMeal,
        title: strMeal,
        img: strMealThumb,
      });

      showToast("Se ha agregado correctamente");
      buttonFavorite.textContent = "Eliminar de favoritos";
    };

    //   Muestra el modal
    modal.show();
  }

  function addFavorite(recipe) {
    const favorite = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    localStorage.setItem("favoritos", JSON.stringify([...favorite, recipe]));
  }

  function deleteFavorite(id) {
    const favorite = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    const newFavorites = favorite.filter((fav) => fav.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(newFavorites));
  }

  function existStorage(id) {
    const favorite = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favorite.some((fav) => fav.id === id);
  }

  function showToast(message) {
    const toastDiv = document.querySelector("#toast");
    const toastBody = document.querySelector(".toast-body");
    const toast = new bootstrap.Toast(toastDiv);
    toastBody.textContent = message;

    toast.show();
  }

  function getFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    if (favorites.length) {
      showRecipes(favorites);
      return;
    }

    const notFavorites = document.createElement("P");
    notFavorites.textContent = "No hay favoritos";
    notFavorites.classList.add("fs-4", "text-center", "font-bold", "mt-5");
    pageFavoritesDiv.appendChild(notFavorites);
  }

  function cleaNHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", initApp);
