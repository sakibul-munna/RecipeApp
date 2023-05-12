import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded" bg="cardBackground">
      <Card.Img
        src={`http://localhost:3030/${recipe.imagePath}`}
        variant="top"
        style={{ width: 250, height: 300 }}
      />
      <Card.Body>
        <Card.Title as="div" className="cardText">
          <strong>{recipe.title}</strong>
        </Card.Title>
        <Card.Text className="cardText" style={{ width: 250, height: 180 }}>
          <b>Description: </b> {recipe.details}
        </Card.Text>
        <div className="card-action">
          <Link
            to={`/recipe/${recipe._id}`}
            state={{
              image: `${recipe.image}`,
              title: `${recipe.title}`,
              type: `${recipe.type}`,
              description: `${recipe.recipe}`,
            }}
          >
            See Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
