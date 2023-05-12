import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../data/recipeAPI";

const LunchScreen = () => {
  const filter_word = "lunch";
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipes = await getAllRecipes();
        setRecipeList(
          recipes.filter((recipe) => {
            return recipe.type === filter_word;
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <h2
        className="font-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        Lunch Recipes
      </h2>
      <Row>
        {recipeList.map((recipe) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default LunchScreen;
