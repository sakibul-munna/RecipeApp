import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const { image, title, type, description } = location.state;
  console.log(location.state);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={`http://localhost:3030/${image}`} alt={title} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h6>Type: </h6>
              </strong>
              {type}
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: "pre-wrap" }}>
              <strong>
                <h6>Recipe: </h6>
              </strong>
              {description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default RecipeDetails;
