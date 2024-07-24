import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
        <Header />
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
