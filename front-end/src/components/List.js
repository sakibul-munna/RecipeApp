import React, { useEffect, useState } from "react";
import data from "../data/Recipes";
import { Col, Row } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../data/recipeAPI";

function List(props) {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipes = await getAllRecipes();
        setRecipeList(recipes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, []);

  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  return (
    <div>
      <Row>
        {recipeList.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <RecipeCard recipe={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default List;
