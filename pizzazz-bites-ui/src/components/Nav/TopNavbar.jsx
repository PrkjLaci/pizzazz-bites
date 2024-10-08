import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopNavbar.css";
import LoginModal from "../loginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ProfileDropdown from "../Profile/ProfileDropdown/ProfileDropdown";
import { AuthContext } from "../../../utils/AuthContext";
import { Bounce, ToastContainer } from "react-toastify";

const TopNavbar = ( {showSignInModal, setShowSignInModal, toggleSignInModal} ) => {

  const { userData } = useContext(AuthContext);

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Nav
            className="mx-auto d-flex justify-content-center w-100 gap-5"
            activeKey="/home"
          >
            <Nav.Item className="text-centered">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="payment-and-delivery" className="nav-link">
                Payment & Delivery
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="discounts" className="nav-link">
                Discounts
              </NavLink>
            </Nav.Item>
            <Nav.Item className="nav-contacts">
              <NavLink to="contacts" className="nav-link">
                Contacts
              </NavLink>
            </Nav.Item>
            {userData.token ? (
              <Nav.Item>
                <ProfileDropdown />
              </Nav.Item>
            ) : (
              <>
                <Nav.Item>
                  <LoginModal
                    showSignInModal={showSignInModal}
                    setShowSignInModal={setShowSignInModal}
                    toggleSignInModal={toggleSignInModal}
                  />
                </Nav.Item>
                <div className="vertical-divider"></div>
                <Nav.Item>
                  <RegisterModal toggleSignInModal={toggleSignInModal} />
                </Nav.Item>
              </>
            )}
          </Nav>
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </Navbar>
    </>
  );
};

export default TopNavbar;
