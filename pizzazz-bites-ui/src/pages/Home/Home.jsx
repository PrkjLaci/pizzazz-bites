import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import NewArrivals from '../../components/NewArrivals/NewArrivals';

const Home = () => {

    return (
        <div className="home-container">
            <CarouselComponent />
            <section className="new-arrivals">
                <h2>News</h2>
                <NewArrivals />
            </section>
        </div>
    );
};

export default Home;