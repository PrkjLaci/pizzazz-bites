import React from "react";
import { useState, useEffect } from "react";
import url from "../../../utils/url.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewArrivals.css";
import ItemCard from "../ItemCard/ItemCard";

const NewArrivals = () => {
  const [newPizzas, setNewPizzas] = useState([]);

  const fetchNewPizzas = async () => {
    const response = await fetch(`${url}/pizzas/new`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setNewPizzas(data);
    } else {
      console.error("Error fetching new pizzas");
    }
  };

  useEffect(() => {
    fetchNewPizzas();
  }, []);

  console.log(newPizzas);

  return (
    <div className="new-arrivals-container">
      {newPizzas.map((pizza) => {
        return (
          <div className="new-arrivals-item" key={pizza.id}>
            <ItemCard item={pizza} />
          </div>
        );
      })}
    </div>
  );
};

export default NewArrivals;
