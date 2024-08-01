import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Pizza.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import url from "../../../utils/url";

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
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id} className="m-5 table-img">
              <td className="talbe-image">
                <img
                  src={pizza.imageUrl}
                  alt=""
                  style={{ width: "12rem", height: "12rem" }}
                  className="item-image"
                />
              </td>
              <td className="table-description">
                <h4 className="fw-bold mb-0">
                  {pizza.id <= 9 ? `0${pizza.id}. ` : `${pizza.id}. `}
                  {pizza.name}
                </h4>
                <p className="mb-1">
                  <i>
                    {pizza.description ? pizza.description : pizza.ingredients}
                  </i>
                </p>
              </td>
              <td className="table-pricing">
                {pizza.price}.-
                <MDBBtn color="" rounded size="sm" className="cart-button">
                  <RiShoppingCartLine />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Pizza;
