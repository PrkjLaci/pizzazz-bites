import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import calculateBackgroundColor from "../../../utils/calculateBackgroundColor";
import "./SiteHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SiteHeader = ({ siteHeaderItems, setClickedItemType, setPage }) => {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setWindowScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    calculateBackgroundColor(windowScroll);
  }, []);

  return (
    <div
      className="header-container"
      style={{
        backgroundColor: calculateBackgroundColor(windowScroll),
      }}
    >
      <Navbar className="header-info-items">
        <Container>
          <Nav className="mx-auto d-flex justify-content-center">
            <Nav.Item className="d-flex align-items-center">
              <p className="mb-0">+36 1234-56-78</p>
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center">
              <p className="mb-0">Working hours 12:00 - 22:00</p>
            </Nav.Item>

            <Nav.Item className="logo d-flex align-items-center">
              <NavLink to="/">
                <img
                  src="/images/pizzazz-bites-logo-white-transparent.png"
                  alt="logo"
                />
              </NavLink>
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center">
              <FaSearch className="search-icon" />
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center">
              <RiShoppingCartLine className="shopping-cart-icon" />
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="header-menu-items">
        <Container>
          <Nav className="mx-auto d-flex justify-content-between w-100 gap-4">
            {siteHeaderItems.map((item, i) => {
              return (
                <Nav.Item key={i} className="menu-item">
                  <NavLink
                    to={item.route}
                    className="nav-menu-item-link"
                    onClick={() => {
                      setPage(1), setClickedItemType("");
                    }}
                  >
                    {item.menuType}
                  </NavLink>
                </Nav.Item>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default SiteHeader;
