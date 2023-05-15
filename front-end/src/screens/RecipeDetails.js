import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Rating from "../components/Rating.js";
import { getRecipeById, submitRating } from "../data/recipeAPI";
import { useAuthContext } from "../hooks/useAuthContext";

const RecipeDetails = () => {
  const location = useLocation();
  const { id } = location.state;
  const [recipe, setRecipeDetails] = useState({});
  const [rating, setRating] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipe = await getRecipeById(id);
        setRecipeDetails(recipe);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
    setRating("0");
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Call submitRating function
    const success = await submitRating(id, rating);

    if (success) {
      // Reload the page if submission is successful
      window.location.reload();
    }
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={`http://localhost:3030/${recipe.imagePath}`}
            alt={recipe.title}
            fluid
          />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{recipe.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h6>Type: </h6>
              </strong>
              {recipe.type}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h6>Rating: </h6>
              </strong>
              <Rating
                value={recipe.rating}
                text={`${recipe.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: "pre-wrap" }}>
              <strong>
                <h6>Recipe: </h6>
              </strong>
              {recipe.recipe}
            </ListGroup.Item>
            {user && (
              <ListGroup.Item>
                <Form className="mt-3" onSubmit={handleFormSubmit}>
                  <Form.Group controlId="rating">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Review the Recipe
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={rating}
                      className="mt-3"
                      onChange={(e) => setRating(e.target.value)}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="mt-3 btn btn-primary btn-pill"
                  >
                    Submit Rating
                  </Button>
                </Form>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default RecipeDetails;
