import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

const Header = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Simple Recipe</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Regular Items" id="collasible-nav-dropdown">
              <LinkContainer to="/breakfast">
                <NavDropdown.Item>Breakfast</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/lunch">
                <NavDropdown.Item>Lunch</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/dinner">
                <NavDropdown.Item>Dinner</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/drinks">
              <Nav.Link>Drinks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/healthy_diets">
              <Nav.Link>Healthy Diets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/appetizers">
              <Nav.Link>Appetizers</Nav.Link>
            </LinkContainer>
            {user ? (
              <NavDropdown
                title={
                  <>
                    <FaUserAlt style={{ marginRight: "5px" }} />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/add-recipe">
                  <NavDropdown.Item>Add Recipe</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <div style={{ textAlign: "center" }}>
                  <Button
                    className="ml-3"
                    variant="outline-secondary"
                    onClick={logout}
                  >
                    Log Out
                  </Button>
                </div>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link href="login">
                  <FaUserAlt style={{ marginRight: "5px" }} />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
