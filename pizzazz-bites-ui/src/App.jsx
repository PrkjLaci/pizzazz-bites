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

function App() {
  const [page, setPage] = useState(1);
  const [clickedItemType, setClickedItemType] = useState("");

  return (
    <Router>
      <header>
        <TopNavbar />
        <div className="sticky-top">
          <SiteHeader
            siteHeaderItems={siteHeaderItems}
            setClickedItemType={setClickedItemType}
            setPage={setPage}
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
                    menuType={item.menuType}
                    itemTypes={item.itemTypes}
                    clickedItemType={clickedItemType}
                    setClickedItemType={setClickedItemType}
                    page={page}
                    setPage={setPage}
                  />
                }
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
