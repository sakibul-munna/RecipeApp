import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

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
        <Card.Text as="div">
          <Rating value={recipe.rating} text={`${recipe.numReviews} reviews`} />
        </Card.Text>
        <div className="card-action mt-3">
          <Link
            to={`/recipe/${recipe._id}`}
            state={{
              id: `${recipe._id}`,
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
