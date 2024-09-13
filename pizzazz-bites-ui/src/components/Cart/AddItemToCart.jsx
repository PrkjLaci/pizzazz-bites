import React, { useState, useContext, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBInput,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./AddItemToCart.css";
import { CartContext } from "../../../utils/CartContext";

const AddItemToCart = ({
  showAddItemToCart,
  setShowAddItemToCart,
  toggleAddItemToCart,
  clickedItem,
  setClickedItem,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { fetchCartItems, addItemToCart } = useContext(CartContext);
  console.log(clickedItem.productId);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <MDBModal
        open={showAddItemToCart}
        onClose={() => setShowAddItemToCart(false)}
        tabIndex="-1"
        className="modal-add-item-to-cart"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleAddItemToCart}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {clickedItem.name}
              <div className="cart-quantity">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon
                    fas
                    icon="minus"
                    onClick={() =>
                      setQuantity(() => (quantity > 1 ? quantity - 1 : 1))
                    }
                  />
                </MDBBtn>
                <div>
                  <MDBInput
                    type="number"
                    min="0"
                    value={quantity}
                    size="sm"
                    className="cart-quantity-input"
                  />
                </div>

                <MDBBtn color="link" className="px-2">
                  <MDBIcon
                    fas
                    icon="plus"
                    onClick={() => setQuantity(() => quantity + 1)}
                  />
                </MDBBtn>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                onClick={() => {
                  addItemToCart(clickedItem.productId, quantity);
                  toggleAddItemToCart();
                }}
              >
                Add to cart
              </MDBBtn>
              <MDBBtn
                color="secondary"
                onClick={() => {
                  toggleAddItemToCart();
                  setClickedItem({});
                }}
              >
                Cancle
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddItemToCart;
