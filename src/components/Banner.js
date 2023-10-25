import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/cap.css";
const Banner = ({ end }) => {
  return (
    <Carousel fade pause={false}>
      {end.map((item, index) => (
        <Carousel.Item
          key={item.image}
          id="banner"
          interval={2000}
          
        >
          <img
            className="d-block w-100"
            id="bannerImage"
            src={item.image}
            alt={`${index} banner`}
          />
          <Carousel.Caption className="fancy">
            <h2>{item.name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
