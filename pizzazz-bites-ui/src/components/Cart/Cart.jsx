import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCheckbox,
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
import url from "../../../utils/url";
import CheckoutModal from "../Checkout/CheckoutModal";
import OrderDetailsModal from "../Checkout/OrderDetailsModal";

const Cart = ({ toggleSignInModal, toggleCartModal }) => {
  const {
    cartItems,
    setCartItems,
    fetchCartItems,
    removeItemFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  } = useContext(CartContext);
  const [guest, setGuest] = useState(false);
  const [guestModalOpen, setGuestModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [loyaltyPoints, setLoyaltyPoints] = useState({
    loyaltyPointsToSpend: 0,
    loyaltyPointsEarned: 0,
    totalLoyaltyPoints: 0,
  });
  const [useLoyaltyPoints, setUseLoyaltyPoints] = useState(false);
  const baseDeliveryFee = 500;
  const cartItemsTotal = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const { userData } = useContext(AuthContext);

  const fetchAddresses = async () => {
    try {
      const response = await fetch(`${url}/api/User/get-all-addresses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLoyaltyPoints = async () => {
    try {
      const response = await fetch(
        `${url}/api/LoyaltyPoint/get-loyalty-points`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      if (response.ok) {
        const responseObj = await response.json();
        setLoyaltyPoints({
          totalLoyaltyPoints: responseObj.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cartItemTotal = (items) => {
    const baseDeliveryFee = 500;
    const itemSum = items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    return itemSum > 4000 ? itemSum : itemSum + baseDeliveryFee;
  };

  const toggleGuestModal = () => {
    setGuestModalOpen(!guestModalOpen);
  };

  const toggleCheckoutModal = () => {
    setCheckoutModalOpen(!checkoutModalOpen);
  };

  const toggleOrderDetailsModal = () => {
    setOrderDetailsModalOpen(!orderDetailsModalOpen);
  };

  const toggleUseLoyaltyPoints = () => {
    setUseLoyaltyPoints(!useLoyaltyPoints);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  useEffect(() => {
    if (userData && userData.token) {
      fetchCartItems();
      fetchLoyaltyPoints();
    }
  }, [userData]);

  useEffect(() => {
    if (!userData.token) {
      setGuest(true);
      setGuestModalOpen(true);
    }
  }, [userData]);

  console.log(loyaltyPoints);

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
                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() =>
                                decreaseCartItemQuantity(item.productId)
                              }
                            >
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              value={item.quantity}
                              size="sm"
                              className="cart-quantity-input"
                            />

                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() =>
                                increaseCartItemQuantity(item.productId)
                              }
                            >
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              {item.product.price}.-
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <ImBin2
                              className="delete-cart-item"
                              onClick={() => removeItemFromCart(item.productId)}
                            />
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
                      <MDBTypography tag="h5">{cartItemsTotal}.-</MDBTypography>
                    </div>

                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Shipping
                    </MDBTypography>

                    <div className="mb-4 pb-2">
                      <select
                        className="select p-2 rounded bg-grey"
                        style={{ width: "100%" }}
                      >
                        {cartItemsTotal > 4000 && (
                          <option value="2">Free (over 4000.-)</option>
                        )}
                        {cartItemsTotal < 4000 && (
                          <option value="1">
                            Standard Delivery {baseDeliveryFee}.-
                          </option>
                        )}
                      </select>
                    </div>

                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      <MDBCheckbox
                        label="Use loyalty points"
                        onChange={() => toggleUseLoyaltyPoints()}
                      />
                    </MDBTypography>
                    {useLoyaltyPoints && (
                      <div className="mb-2">
                        <p>Your points: {loyaltyPoints.totalLoyaltyPoints}</p>
                        <MDBInput
                          size="lg"
                          label="Enter your points"
                          className="mb-0"
                          type="number"
                          min={500}
                          max={1000}
                          placeholder="500"
                          onChange={(e) => {
                            setLoyaltyPoints({
                              ...loyaltyPoints,
                              loyaltyPointsToSpend: e.target.value,
                            });
                          }}
                        >
                          <div className="form-helper">
                            Min 500 points, max 1000 points
                          </div>
                        </MDBInput>
                      </div>
                    )}

                    <MDBTypography
                      tag="h5"
                      className="text-uppercase mb-3"
                      style={
                        useLoyaltyPoints
                          ? { marginTop: "2rem" }
                          : { marginTop: "" }
                      }
                    >
                      Give code
                    </MDBTypography>

                    <div className="mb-2">
                      <MDBInput
                        size="lg"
                        label="Enter your code"
                        className="mb-3"
                      />
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                      </MDBTypography>
                      <MDBTypography tag="h5">
                        {cartItemTotal(cartItems)}.-
                      </MDBTypography>
                    </div>

                    <MDBBtn
                      color="dark"
                      block
                      size="lg"
                      onClick={toggleCheckoutModal}
                      disabled={cartItems.length === 0}
                    >
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
      {checkoutModalOpen && (
        <CheckoutModal
          toggleCheckoutModal={toggleCheckoutModal}
          cartItems={cartItems}
          setCartItems={setCartItems}
          primaryAddress={`${addresses[0].street} ${addresses[0].houseNumber}. ${addresses[0].city}, ${addresses[0].state}, ${addresses[0].country}`}
          addresses={addresses}
          toggleOrderDetailsModal={toggleOrderDetailsModal}
          setOrderDetails={setOrderDetails}
          setLoyaltyPoints={setLoyaltyPoints}
          loyaltyPoints={loyaltyPoints}
          useLoyaltyPoints={useLoyaltyPoints}
        />
      )}
      {orderDetailsModalOpen && (
        <OrderDetailsModal
          orderDetailsModalOpen={orderDetailsModalOpen}
          setOrderDetailsModalOpen={setOrderDetailsModalOpen}
          toggleOrderDetailsModal={toggleOrderDetailsModal}
          toggleCartModal={toggleCartModal}
          orderDetails={orderDetails}
          cartItemTotal={cartItemTotal}
          loyaltyPoints={loyaltyPoints}
          useLoyaltyPoints={useLoyaltyPoints}
        />
      )}
    </>
  );
};

export default Cart;
