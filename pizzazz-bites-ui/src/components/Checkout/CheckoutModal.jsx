import React, { useState, useContext } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRadio,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../utils/AuthContext";
import url from "../../../utils/url";
import { toast } from "react-toastify";

const CheckoutModal = ({
  toggleCheckoutModal,
  toggleOrderDetailsModal,
  cartItems,
  setCartItems,
  primaryAddress,
  addresses,
  setOrderDetails,
}) => {
  const [order, setOrder] = useState({
    address: primaryAddress,
    orderProducts: cartItems,
    paymentMethod: "",
  });

  const { userData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/api/Order/add-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        const responseObj = await response.json();
        setOrderDetails(responseObj.data);
        toast.success("Order placed successfully!");
        setCartItems([]);
        toggleOrderDetailsModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MDBModal
          staticBackdrop
          tabIndex="-1"
          open={toggleCheckoutModal}
          onClose={() => toggleCheckoutModal()}
        >
          <MDBModalDialog size="lg">
            <MDBModalContent>
              <MDBModalBody>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <MDBCard>
                        <MDBCardBody>
                          <h2>Checkout</h2>
                          <MDBRow>
                            <MDBCol>
                              <h3>Shipping Address</h3>
                              {addresses.map((address, i) => (
                                <MDBRadio
                                  id={address.id}
                                  name="address"
                                  value={`option${i}`}
                                  label={`${address.street} ${address.houseNumber}. ${address.city}, ${address.state}, ${address.country}`}
                                  onClick={() =>
                                    setOrder({
                                      ...order,
                                      address: `${address.street} ${address.houseNumber}. ${address.city}, ${address.state}, ${address.country}`,
                                    })
                                  }
                                  defaultChecked={
                                    address.id === addresses[0].id
                                  }
                                />
                              ))}
                              <MDBBtn>Add New Address</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                              <h3>Payment Methods</h3>
                              <MDBRadio
                                id="CashOnDelivery"
                                name="paymentMethod"
                                label="Cash on delivery"
                                onClick={(e) =>
                                  setOrder({
                                    ...order,
                                    paymentMethod: e.target.id,
                                  })
                                }
                              />
                              <MDBRadio
                                id="CreditCardOnDelivery"
                                name="paymentMethod"
                                label="Credit card on delivery"
                                onClick={(e) =>
                                  setOrder({
                                    ...order,
                                    paymentMethod: e.target.id,
                                  })
                                }
                              />
                              <MDBRadio
                                id="CreditCard"
                                name="paymentMethod"
                                label="Credit Card"
                                onClick={(e) =>
                                  setOrder({
                                    ...order,
                                    paymentMethod: e.target.id,
                                  })
                                }
                                disabled
                              />
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleCheckoutModal}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit">Order</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </form>
    </>
  );
};

export default CheckoutModal;
