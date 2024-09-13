import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
} from "mdb-react-ui-kit";
import Cart from "./Cart";
import "./CartModal.css";

const CartModal = ({
  showCartModal,
  setShowCartModal,
  toggleCartModal,
  toggleSignInModal
}) => {
  return (
    <>
      <MDBModal
        staticBackdrop
        open={showCartModal}
        onClose={() => setShowCartModal(false)}
      >
        <MDBModalDialog size="lg" className="modal-shopping-cart-dialog">
          <MDBModalContent className="modal-shopping-cart">
            <MDBModalHeader>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleCartModal}
              ></MDBBtn>
            </MDBModalHeader>
            <Cart
              toggleSignInModal={toggleSignInModal}
              toggleCartModal={toggleCartModal}
            />
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default CartModal;
