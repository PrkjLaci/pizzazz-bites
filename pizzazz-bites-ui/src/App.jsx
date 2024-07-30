import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <header>
        <TopNavbar />
        <div className="sticky-top">
        <SiteHeader/>
        </div>
      </header>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
