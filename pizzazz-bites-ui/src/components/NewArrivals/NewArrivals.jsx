import React from "react";
import { useState, useEffect } from "react";
import url from "../../../utils/url.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewArrivals.css";
import ItemCard from "../ItemCard/ItemCard";
import fetchNewItems from "../../../utils/fetchNewItems";

const NewArrivals = () => {
  const [newItems, setNewItems] = useState([]);

  
  useEffect(() => {
    fetchNewItems(url, setNewItems);
  }, []);

  console.log("newItems", newItems);
  

  return (
    <div className="new-arrivals-container">
      <div className="new-arrivals-header">
        <h2>New Arrivals</h2>
      </div>
      <div className="new-arrivals-items">
        {newItems.map((item) => {
          return (
            <div className="new-arrivals-item" key={item.id}>
              <ItemCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
