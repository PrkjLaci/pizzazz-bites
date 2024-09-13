import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../utils/AuthContext";
import { CartContext } from "../../../utils/CartContext";
import GuestModal from "./GuestModal";
import { ImBin2 } from "react-icons/im";
import "./Cart.css";

const Cart = ({ toggleSignInModal, toggleCartModal }) => {
  const { cartItems, fetchCartItems, removeItemFromCart } = useContext(CartContext);
  const [guest, setGuest] = useState(false);
  const [guestModalOpen, setGuestModalOpen] = useState(false);

  const { userData } = useContext(AuthContext);

  const toggleGuestModal = () => {
    setGuestModalOpen(!guestModalOpen);
  };

  useEffect(() => {
    if (userData && userData.token) {
      fetchCartItems();
    }
  }, [userData]);

  useEffect(() => {
    if (!userData.token) {
      setGuest(true);
      setGuestModalOpen(true);
    }
  }, [userData]);

  console.log(cartItems);

  return (
    <>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol size="12">
          <MDBCard
            className="card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <MDBCardBody className="p-0">
              <MDBRow className="g-0">
                <MDBCol lg="8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <MDBTypography
                        tag="h1"
                        className="fw-bold mb-0 text-black"
                      >
                        Shopping Cart
                      </MDBTypography>
                      <MDBTypography className="mb-0 text-muted">
                        {cartItems.length} items
                      </MDBTypography>
                    </div>

                    <hr className="my-4" />
                    {cartItems.map((item) => (
                      <>
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={item.product.imageUrl}
                              fluid
                              className="rounded-3"
                              alt={item.product.name}
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              {item.product.name}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              value={item.quantity}
                              size="sm"
                              className="cart-quantity-input"
                            />

                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              {item.product.price}.-
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <ImBin2 className="delete-cart-item" onClick={() => removeItemFromCart(item.productId)}/>
                          </MDBCol>
                        </MDBRow>

                        <hr className="my-4" />
                      </>
                    ))}

                    <div className="pt-5">
                      <MDBTypography tag="h6" className="mb-0">
                        <MDBCardText
                          tag="a"
                          href="#!"
                          className="text-body"
                          onClick={toggleCartModal}
                        >
                          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                          to shop
                        </MDBCardText>
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="4" className="bg-grey">
                  <div className="p-5">
                    <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                      Summary
                    </MDBTypography>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <MDBTypography tag="h5" className="text-uppercase">
                        items {cartItems.length}
                      </MDBTypography>
                      <MDBTypography tag="h5">
                      {cartItems.reduce((acc, item) => {
                          return acc + item.product.price * item.quantity;
                        }, 0)}
                        .-
                      </MDBTypography>
                    </div>

                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Shipping
                    </MDBTypography>

                    <div className="mb-4 pb-2">
                      <select
                        className="select p-2 rounded bg-grey"
                        style={{ width: "100%" }}
                      >
                        <option value="1">Standard-Delivery- €5.00</option>
                      </select>
                    </div>

                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Give code
                    </MDBTypography>

                    <div className="mb-2">
                      <MDBInput size="lg" label="Enter your code" />
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                      </MDBTypography>
                      <MDBTypography tag="h5">
                        {cartItems.reduce((acc, item) => {
                          return acc + item.product.price * item.quantity;
                        }, 0)}
                        .-
                      </MDBTypography>
                    </div>

                    <MDBBtn color="dark" block size="lg">
                      Check out
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {guest && (
        <GuestModal
          guestModalOpen={guestModalOpen}
          setGuestModalOpen={setGuestModalOpen}
          toggleGuestModal={toggleGuestModal}
          toggleSignInModal={toggleSignInModal}
        />
      )}
    </>
  );
};

export default Cart;
