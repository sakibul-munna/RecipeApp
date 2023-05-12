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

export { getAllRecipes };
