import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import MenuItem from "./pages/MenuItem/MenuItem.jsx";
import siteHeaderItems from "../utils/siteHeaderItems.js";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [clickedSubType, setClickedSubType] = useState("");
  const [showSignInModal, setShowSignInModal] = useState(false);
  const toggleSignInModal = () => setShowSignInModal(!showSignInModal);

  return (
    <Router>
      <header>
        <TopNavbar
          showSignInModal={showSignInModal}
          setShowSignInModal={setShowSignInModal}
          toggleSignInModal={toggleSignInModal}
        />
        <div className="sticky-top">
          <SiteHeader
            siteHeaderItems={siteHeaderItems}
            setClickedItemType={setClickedSubType}
            setPage={setPage}
            toggleSignInModal={toggleSignInModal}
          />
        </div>
      </header>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {siteHeaderItems.map((item, i) => {
            return (
              <Route
                key={i}
                path={item.route}
                element={
                  <MenuItem
                    productType={item.productType}
                    subTypes={item.subTypes}
                    clickedSubType={clickedSubType}
                    setClickedItemType={setClickedSubType}
                    page={page}
                    setPage={setPage}
                  />
                }
              />
            );
          })}
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
