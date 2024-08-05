import React, { useState, useEffect } from "react";
import "./Pizza.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import url from "../../../utils/url";
import ItemTable from "../../components/ItemTable/ItemTable";
import Pagination from "../../components/Pegination/Pagination";
import PizzatypeWithDiscription from "../../../utils/PizzatypeWithDiscription";

const Pizza = () => {
  const [clickedPizzaType, setClickedPizzaType] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);
  const [pizzaCount, setPizzaCount] = useState(0);
  const pageSize = 10;
  const pizzaTypes = [
    "Italian & International",
    "Artisan",
    "Pizza Al Carbone",
    "Show All",
  ];

  const fetchPizzas = async (type = "", page) => {
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
        setPizzaCount(data.count);
      } else {
        console.error("Failed to fetch pizzas:", response.statusText);
        setError("Failed to fetch pizzas.");
      }
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    fetchPizzas(clickedPizzaType, page);
  }, [clickedPizzaType, page]);

  return (
    <div className="item-container">
      <NavFilter
        setClickedItemType={setClickedPizzaType}
        setPage={setPage}
        itemTypes={pizzaTypes}
        dropdownTitle="Pizza Types"
        inputPlaceholder="Search for pizzas..."
      />
      <h3 className="fw-bold">
        {<PizzatypeWithDiscription pizzatype={clickedPizzaType} />}
      </h3>
      <ItemTable
        itemName="Pizza"
        items={pizzas}
        clickedItemType={clickedPizzaType}
        page={page}
      />
      <Pagination page={page} setPage={setPage} pizzaCount={pizzaCount} />
    </div>
  );
};

export default Pizza;
