import React, { createContext, useState, useEffect, useContext } from "react";
import url from "../utils/url";
import { AuthContext } from "../utils/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { userData } = useContext(AuthContext);

  const addItemToCart = async (productId, quantity) => {
    if (userData?.token) {
      try {
        const response = await fetch(
          `${url}/api/Cart/add-product-to-cart?productId=${productId}&quantity=${quantity}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        if (response.ok) {
          const responseObj = await response.json();
          toast.success("Item added to cart!");
          setCartItems((prevItem) => [...prevItem, responseObj.data]);
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  const fetchCartItems = async () => {
    if (userData?.token) {
      try {
        const response = await fetch(`${url}/api/Cart/get-products-in-cart`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        });

        if (response.ok) {
          const responseObj = await response.json();
          setCartItems(responseObj.data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      const response = await fetch(`${url}/api/Cart/remove-product-from-cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify(productId),
      });
      if (response.ok) {
        toast.success("Item removed from cart!");
        const products = cartItems.filter(
          (item) => item.productId !== productId
        );
        setCartItems(products);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [userData]);

  return (
    <CartContext.Provider
      value={{ cartItems, fetchCartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
