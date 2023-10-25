import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ start }) {
  return (
    <Carousel fade pause={false} interval={2000}> {/* 1000 milliseconds = 1 second */}
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
