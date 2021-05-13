import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ChartsCarousel = (props) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      autoPlay
      interval={4000}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={80}
    >
      <div style={{ backgroundColor: "red" }}>
        <p>Chart 1</p>
      </div>
      <div style={{ backgroundColor: "green" }}>
        <p>Chart 2</p>
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <p>Chart 3</p>
      </div>
    </Carousel>
  );
};

export default ChartsCarousel;
