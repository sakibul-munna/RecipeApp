import axios from "axios";

async function getAllRecipes() {
  try {
    const response = await axios.get("http://localhost:3030/api/recipes");
    const data = response.data;

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getRecipeById(id) {
  try {
    const response = await axios.get("http://localhost:3030/api/recipes/" + id);
    const data = response.data;

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function submitRating(recipeId, rating) {
  try {
    const response = await axios.post(
      `http://localhost:3030/api/recipes/${recipeId}/rating`,
      { rating }
    );
    console.log(response.data); // Handle the response data
    return true;
  } catch (error) {
    console.error(error); // Handle the error
    return false;
  }
}

export { getAllRecipes, getRecipeById, submitRating };
