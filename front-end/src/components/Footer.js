import React from "react";
import Card from "react-bootstrap/Card";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <h4>Simple Recipe</h4>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          About Us <br />
          Terms of Use <br />
          Privacy Policy <br />
        </Card.Text>
        <BsFacebook color="black" size="50px" style={{ padding: "10px" }} />
        <BsTwitter color="black" size="50px" style={{ padding: "10px" }} />
        <BsYoutube color="black" size="50px" style={{ padding: "10px" }} />
        <BsPinterest color="black" size="50px" style={{ padding: "10px" }} />
      </Card.Body>
      <Card.Footer className="text-muted">
        © 2022 Copyright: Khandaker Tanha Tasnia
      </Card.Footer>
    </Card>
  );
};

export default Footer;
