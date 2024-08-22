import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopNavbar.css";
import { Button } from "react-bootstrap";
import LoginModal from "../loginModal/LoginModal";

const TopNavbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <>
    <Navbar bg="black" variant="dark">
      <Container>
        <Nav className="mx-auto d-flex justify-content-center w-100 gap-5" activeKey="/home">
          <Nav.Item className="text-centered">
            <NavLink to="/about-us" className="nav-link">About Us</NavLink>
          </Nav.Item >
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
          <LoginModal show={showSignInModal} onHide={() => setShowSignInModal(false)} />
          </Nav.Item>
          <div className="vertical-divider"></div>
          <Nav.Item>
            <Button variant="link" className="nav-link" onClick={() => setShowCreateAccountModal(true)}>Create an account</Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
     
    </>
  );
};

export default TopNavbar;
