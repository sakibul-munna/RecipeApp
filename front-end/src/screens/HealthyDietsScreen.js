import React from 'react'
import { Col, Row } from "react-bootstrap";
import recipes from "../data/Recipes";
import RecipeCard from "../components/RecipeCard";

const HealthyDietsScreen = () => {
  const filter_word = "healthy_diets";
  const  selectedRecipes = recipes.filter((recipe) => {
    return recipe.type === filter_word ;
});
  return (
    <>
      <h2 className="font-link" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          padding: '10px'
        }}>Healthy Diet Recipes</h2>
      <Row>
        {selectedRecipes.map((recipe) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default HealthyDietsScreen;
