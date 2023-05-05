import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slide = () => {
  return (
    <div className="container" style={{maxWidth: "80%"}}>
    <Carousel fade>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="/images/slider/Strawberry-Italian-Soda.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Strawberry Italian Soda</h3>
            <p>
              When the warm weather strikes, enjoy this strawberry Italian soda.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="/images/slider/Baked Oatmeal with Mixed Berries.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Baked Oatmeal with Mixed Berries</h3>
            <p>
              Whether It’s A Lazy Weekend Brunch Or Quick Weeknight Brinner,
              We’ve Got You Covered With This Healthy Mixed Berry Baked Oatmeal.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="/images/slider/Chinese Orange Chicken.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Chinese Orange Chicken</h3>
            <p>Get the best of Chinese orange chicken takeout at home!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Slide;
