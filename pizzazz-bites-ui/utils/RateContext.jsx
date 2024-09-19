import React, { createContext, useState, useEffect, useContext } from "react";
import url from "../utils/url";
import { AuthContext } from "../utils/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RateContext = createContext();

export const RateProvider = ({ children }) => {
  const { userData } = useContext(AuthContext);

  const rateItem = async (productId, rating, item) => {
    console.log("rate item context");
    
    try {
      const response = await fetch(
        `${url}/api/Rate/add-rating?productId=${productId}&value=${rating}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      if (response.ok) {
        toast.success(`You rated ${item.name} ${rating} stars!`);
        const responseObj = await response.json();
        return responseObj.data;
      }
    } catch (error) {       
      console.error("Error rating item:", error);
    }
  };

  return (
    <RateContext.Provider value={{ rateItem }}>{children}</RateContext.Provider>
  );
};
