import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import MapComponent from "../../components/MapComponent/MapComponent";
import eventImages from "../../../utils/eventImages";
import restaurantImages from "../../../utils/restaurantImages";


const Home = () => {
  return (
    <div className="home-container">
      <section className="restaurant-events-carousel">
        <CarouselComponent carouselItems={eventImages} />
      </section>

      <section className="new-arrivals">
        <NewArrivals />
      </section>

      <section className="restaurant-carousel">
        <CarouselComponent carouselItems={restaurantImages} />
      </section>

      <section className="contact-us">
        <MapComponent />
      </section>
    </div>
  );
};

export default Home;
