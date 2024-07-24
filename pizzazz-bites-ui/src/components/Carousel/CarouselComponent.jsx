import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
    <Carousel fade>
      <Carousel.Item>
        <img className="carousel-img" src="/images/carousel-slide-1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-img" src="/images/carousel-slide-2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-img" src="/images/carousel-slide-3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
