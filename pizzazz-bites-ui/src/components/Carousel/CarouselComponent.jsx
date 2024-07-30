import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselComponent.css";

const CarouselComponent = ({carouselItems}) => {
  return (
    <div className="carousel-container">
      <Carousel>
        {carouselItems.map((item, index) => {
          return item.title === "" && item.description === "" ? (
            <Carousel.Item>
              <img
                className="carousel-img"
                src={item.src}
                alt={item.alt}
                key={index}
              />
              <p>asd</p>
            </Carousel.Item>
          ) : (
            <Carousel.Item>
              <img
                className="carousel-img"
                src={item.src}
                alt={item.alt}
                key={index}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
