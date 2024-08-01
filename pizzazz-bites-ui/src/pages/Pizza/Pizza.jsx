import React, { useState, useEffect } from "react";
import "./Pizza.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import url from "../../../utils/url";
import ItemTable from "../../components/ItemTable/ItemTable";

const Pizza = () => {
  const [clickedPizzaType, setClickedPizzaType] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const pageSize = 10;

  const fetchPizzas = async (type = "", page = 1) => {
    if (type === "Show All") type = "";
    if (type === "Italian & International") type = "ItalianAndInternational";
    if (type === "Pizza Al Carbone") type = "PizzaAlCarbone";

    try {
      const endpoint =
        type === ""
          ? `${url}/pizzas?page=${page}&pageSize=${pageSize}`
          : `${url}/pizzas/type/${type}?pizzaTypeString=${type}&page=${page}&pageSize=${pageSize}`;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPizzas(data.data);
      } else {
        console.error("Failed to fetch pizzas:", response.statusText);
        setError("Failed to fetch pizzas.");
      }
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    fetchPizzas(clickedPizzaType);
  }, [clickedPizzaType]);

  return (
    <div className="item-container">
      <NavFilter
        clickedPizzaType={clickedPizzaType}
        setClickedPizzaType={setClickedPizzaType}
      />
      <h1 className="fw-bold">
        {clickedPizzaType === "Show All" ? "" : clickedPizzaType}
      </h1>
      <ItemTable items={pizzas} />
    </div>
  );
};

export default Pizza;
