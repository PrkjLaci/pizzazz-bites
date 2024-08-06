import React, { useState, useEffect } from "react";
import "./Dessert.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import url from "../../../utils/url";
import ItemTable from "../../components/ItemTable/ItemTable";
import Pagination from "../../components/Pegination/Pagination";

const Dessert = () => {
  const [clickedDessertType, setClickedDessertType] = useState("");
  const [desserts, setDesserts] = useState([]);
  const [page, setPage] = useState(1);
  const [dessertCount, setDessertCount] = useState(0);
  const pageSize = 10;
  const dessertTypes = ["Italian", "International", "Show All"];

  const fetchDesserts = async (type = "", page) => {
    if (type === "Show All") type = "";

    try {
      const endpoint =
        type === ""
          ? `${url}/desserts?page=${page}&pageSize=${pageSize}`
          : `${url}/desserts/type/${type}?dessertTypeString=${type}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDesserts(data.data);
        setDessertCount(data.count);
      } else {
        console.error("Failed to fetch desserts:", response.statusText);
        setError("Failed to fetch desserts.");
      }
    } catch (error) {
      console.error("Error fetching desserts:", error);
    }
  };

  useEffect(() => {
    fetchDesserts(clickedDessertType, page);
  }, [clickedDessertType, page]);

  return (
    <div className="item-container">
      <NavFilter
        setClickedItemType={setClickedDessertType}
        setPage={setPage}
        itemTypes={dessertTypes}
        dropdownTitle="Dessert Types"
        inputPlaceholder="Search for desserts..."
      />
      <ItemTable
        itemName="Dessert"
        items={desserts}
        clickedItemType={clickedDessertType}
        page={page}
      />
      <Pagination
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        itemCount={dessertCount}
      />
    </div>
  );
};

export default Dessert;
