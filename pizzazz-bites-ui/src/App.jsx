import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import Home from "./pages/Home/Home.jsx";
import Pizza from "./pages/Pizza/Pizza.jsx";
import Dessert from "./pages/Dessert/Dessert.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <header>
        <TopNavbar />
        <div className="sticky-top">
          <SiteHeader />
        </div>
      </header>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizza />} />
          <Route path="/desserts" element={<Dessert />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
