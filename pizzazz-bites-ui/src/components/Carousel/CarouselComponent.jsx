import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/thursday-20-off.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/friday-movie-night.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Friday - Pizza & Movie Night</h3>
            <p>
              Enjoy a classic movie night at Pizzazz & Bites every Friday. Watch
              popular films on our big screen while indulging in your favorite
              pizzas and drinks.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/saturday-pizza-making.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Saturday - Pizza Making Workshop</h3>
            <p>
              Join us this Saturday for a fun and interactive pizza-making
              workshop! Learn from our expert chefs and create your own
              delicious pizza to take home.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/sunday-happy-hour.jpeg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <p>
              Join us every Sunday from 16:00 to 18:00 for Happy Hour Pizza
              Specials! Enjoy discounted pizzas and drinks to kickstart your
              evening.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
