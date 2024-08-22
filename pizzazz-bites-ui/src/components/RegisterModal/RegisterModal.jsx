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
import "./RegisterModal.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const LoginModal = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen} className="nav-link">
        Sign up
      </MDBBtn>
      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog size="lg">
          <MDBModalContent className="sign-up-modal-content">
            <MDBContainer fluid>
              <div
                className="p-5 bg-image"
                style={{
                  backgroundImage:
                    "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
                  height: "300px",
                }}
              ></div>

              <MDBCard
                className="mx-5 mb-5 p-5 shadow-5"
                style={{
                  marginTop: "-100px",
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <MDBCardBody className="p-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>

                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form1"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form1"
                    type="password"
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>

                  <div className="text-center">
                    <p>or sign up with:</p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default LoginModal;
