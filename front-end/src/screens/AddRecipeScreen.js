import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";

const AddRecipeScreen = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [recipe, setRecipe] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("details", details);
    formData.append("recipe", recipe);
    formData.append("type", type);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post("/api/submit", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "55vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1000px" }}>
        <Card>
          <Card.Body>
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
              Add Recipe
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the title of the recipe"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-3" controlId="formDetails">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={details}
                  placeholder="Enter the details about the recipe"
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-3" controlId="formRecipe">
                <Form.Label>Recipe</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={recipe}
                  placeholder="Enter the whole recipe"
                  onChange={(e) => setRecipe(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-3" controlId="formType">
                <Form.Label>Recipe Type</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select a recipe type</option>
                  <option value="type1">Drinks</option>
                  <option value="type2">Snacks</option>
                  <option value="type3">Healthy Diets</option>
                  <option value="type3">Breakfast</option>
                  <option value="type3">Appetizers</option>
                  <option value="type3">Dinner</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mt-3" controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>

              <Button className="mt-5" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default AddRecipeScreen;
