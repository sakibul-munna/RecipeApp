import axios from "axios";

async function getAllRecipes() {
  try {
    const response = await axios.get("http://localhost:3030/api/recipes");
    const data = response.data;
    // handle the data returned from the API
    console.log(data);
  } catch (error) {
    // handle any errors that occur
    console.error(error);
  }
}

export { getAllRecipes };
