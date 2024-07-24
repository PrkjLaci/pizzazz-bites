import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [showRequestCallModal, setShowRequestCallModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <>
      <Nav className="justify-content-center custom-navbar" activeKey="/home">
        <Nav.Item>
          <NavLink to="/about-us" className="nav-link">About Us</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="payment-and-delivery" className="nav-link">Payment & Delivery</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="discounts" className="nav-link">Discounts</NavLink>
        </Nav.Item>
        <Nav.Item className="nav-contacts">
          <NavLink to="contacts" className="nav-link">Contacts</NavLink>
        </Nav.Item>
        <Nav.Item>
          <Button variant="link" className="nav-link" onClick={() => setShowRequestCallModal(true)}>Request a call</Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="link" className="nav-link" onClick={() => setShowSignInModal(true)}>Sign In</Button>
        </Nav.Item>
        <div className="vertical-divider"></div>
        <Nav.Item>
          <Button variant="link" className="nav-link" onClick={() =>setShowCreateAccountModal(true) }>Create an account</Button>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbar;
