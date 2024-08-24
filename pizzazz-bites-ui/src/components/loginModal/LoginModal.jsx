import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./LoginModal.css";

const LoginModal = ({showSignInModal, setShowSignInModal, toggleSignInModal}) => {

  return (
    <>
      <MDBBtn onClick={toggleSignInModal} className="nav-link">
        Sign in
      </MDBBtn>
      <MDBModal
        open={showSignInModal}
        onClose={() => setShowSignInModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBContainer fluid>
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCardBody className="p-4 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  <p className="text-black-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="login-form-email"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="login-form-password"
                    type="password"
                    size="lg"
                  />

                  <MDBCheckbox
                    name="flexCheck"
                    id="login-form-remember"
                    className="mb-4"
                    label="Remember password"
                  />

                  <MDBBtn size="lg">Login</MDBBtn>

                  <hr className="my-4" />

                  <MDBBtn
                    className="mb-2 w-100"
                    size="lg"
                    style={{ backgroundColor: "#dd4b39" }}
                  >
                    <MDBIcon fab icon="google" className="mx-2" />
                    Sign in with google
                  </MDBBtn>

                  <MDBBtn
                    className="mb-4 w-100"
                    size="lg"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                    Sign in with facebook
                  </MDBBtn>
                </MDBCardBody>
              </MDBRow>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default LoginModal;
