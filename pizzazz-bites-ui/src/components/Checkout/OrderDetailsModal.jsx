import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import "./OrderDetailsModal.css";

const OrderDetailsModal = ({
  toggleOrderDetailsModal,
  toggleCartModal,
  orderDetailsModalOpen,
  setOrderDetailsModalOpen,
  orderDetails,
  cartItemTotal,
  loyaltyPoints,
  useLoyaltyPoints,
}) => {
  const [loyaltyPointsCounter, setLoyaltyPointsCounter] = useState({
    counter: 0,
  });

  const Counter = (min, max) => {
    for (let count = min; count <= max; count++) {
      setTimeout(() => {
        setLoyaltyPointsCounter({ counter: count });
      }, 1000);
    }
    return loyaltyPointsCounter.counter;
  };

  useEffect(() => {
    Counter(0, loyaltyPoints.totalLoyaltyPoints);
  }, []);

  return (
    <>
      <MDBModal
        staticBackdrop
        tabIndex="-1"
        open={orderDetailsModalOpen}
        onClose={() => toggleOrderDetailsModal()}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="border-bottom-0">
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => {
                  toggleOrderDetailsModal();
                  toggleCartModal();
                }}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-start text-black p-4">
              <MDBTypography
                tag="h4"
                className="mb-5"
                style={{ color: "#35558a" }}
              >
                Thanks for your order
              </MDBTypography>
              {!useLoyaltyPoints ? (
                <>
                  <MDBTypography tag="h5" style={{ color: "#35558a" }}>
                    Loyalty Points Earned: {loyaltyPoints.loyaltyPointsEarned}
                  </MDBTypography>

                  <MDBTypography
                    tag="h5"
                    className="mb-5"
                    style={{ color: "#35558a" }}
                  >
                    Total Loyalty Points: {loyaltyPointsCounter.counter}
                  </MDBTypography>
                </>
              ) : (
                <>
                  <MDBTypography
                    tag="h5"
                    className="mb-5"
                    style={{ color: "#35558a" }}
                  >
                    Loyalty Points Used: {loyaltyPoints.loyaltyPointsToSpend}
                  </MDBTypography>
                  <MDBTypography
                    tag="h5"
                    className="mb-5"
                    style={{ color: "#35558a" }}
                  >
                    Remaining Points: {loyaltyPoints.totalLoyaltyPoints - loyaltyPoints.loyaltyPointsToSpend}
                  </MDBTypography>
                </>
              )}
              <p className="mb-0" style={{ color: "#35558a" }}>
                Payment summary
              </p>
              <hr
                className="mt-2 mb-4"
                style={{
                  height: "0",
                  backgroundColor: "transparent",
                  opacity: ".75",
                  borderTop: "2px dashed #9e9e9e",
                }}
              />
              {orderDetails.orderProducts.map((orderProduct) => (
                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">
                    {orderProduct.product.name}({orderProduct.quantity})
                  </p>
                  <p className="text-muted mb-0">
                    {orderProduct.product.price * orderProduct.quantity}.-
                  </p>
                </div>
              ))}
              {cartItemTotal(orderDetails.orderProducts) < 4000 && (
                <div className="d-flex justify-content-between">
                  <p className="small mb-0">Shipping</p>
                  <p className="small mb-0">500.-</p>
                </div>
              )}
              <br />
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total</p>
                <p className="fw-bold" style={{ color: "#35558a" }}>
                  {cartItemTotal(orderDetails.orderProducts)}.-
                </p>
              </div>
            </MDBModalBody>

            <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
              <MDBBtn
                color="secondary"
                onClick={() => {
                  setOrderDetailsModalOpen(false);
                  toggleCartModal();
                }}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default OrderDetailsModal;
