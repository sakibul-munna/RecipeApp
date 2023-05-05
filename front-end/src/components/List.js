import React, { useEffect } from "react";
import data from "../data/Recipes";
import { Col, Row } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../data/recipeAPI";

function List(props) {
  useEffect(() => {
    async function fetchProducts() {
      await getAllRecipes();
    }
    console.log("Fetching Recipes");
    fetchProducts();
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
        {filteredData.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RecipeCard recipe={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default List;
