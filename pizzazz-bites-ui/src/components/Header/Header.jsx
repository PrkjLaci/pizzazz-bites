import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <div className="contact">
          <p>+36 1234-56-78</p>
        </div>
        <div className="working-hours">
          <p>Working hours 12:00 - 22:00</p>
        </div>
        <div className="logo">
          <NavLink to="/">
            <img
              src="/images/pizzazz-bites-logo-white-transparent.png"
              alt="logo"
              href="/"
            />
          </NavLink>
        </div>
        <div className="search">
          <FaSearch className="search-icon" />
        </div>
        <div className="cart">
          <RiShoppingCartLine className="shopping-cart-icon" />
        </div>
        <hr />
      </div>
      <hr />
      <div className="header-menu-items">
        <div className="menu-item">
          <Nav.Item>
            <NavLink
              to="/italian-and-international-pizza"
              className="nav-menu-item-link"
            >
              Italian & International Pizza
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/artisanal-pizza" className="nav-menu-item-link">
              Artisanal pizza
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/pizza-al-carbone" className="nav-menu-item-link">
              Pizza Al Carbone (Black Dough)
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/desserts" className="nav-menu-item-link">
              Desserts
            </NavLink>
          </Nav.Item>
        </div>
        <Nav.Item>
          <NavLink to="/soft-drink" className="nav-menu-item-link">
            Soft drink
          </NavLink>
        </Nav.Item>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/beer" className="nav-menu-item-link">
              Beer
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/salad" className="nav-menu-item-link">
              Salad
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/dressing-cheese" className="nav-menu-item-link">
              Dressing / Cheese
            </NavLink>
          </Nav.Item>
        </div>
        <div className="menu-item">
          <Nav.Item>
            <NavLink to="/ice-cream" className="nav-menu-item-link">
              Ice Cream
            </NavLink>
          </Nav.Item>
        </div>
      </div>
    </div>
  );
};

export default Header;
