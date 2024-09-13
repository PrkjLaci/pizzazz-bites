import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const GuestModal = ({
  guestModalOpen,
  setGuestModalOpen,
  toggleGuestModal,
  toggleSignInModal
}) => {
  return (
    <>
      <MDBModal
        open={guestModalOpen}
        onClose={() => setGuestModalOpen(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>You are not logged in!</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleGuestModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Are you sure you want to countinue as a guest?
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleGuestModal}>
                Yes
              </MDBBtn>
              <MDBBtn color="secondary" onClick={() => {
                toggleSignInModal();
                toggleGuestModal();
                }}>
                Log in
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default GuestModal;
