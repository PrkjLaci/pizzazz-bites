import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import ItemTable from "../../components/ItemTable/ItemTable";
import Pagination from "../../components/Pegination/Pagination";
import ItemTypeWithDiscription from "../../../utils/ItemTypeWithDiscription";
import fetchMenuItems from "../../../utils/fetchMenuItems";
import url from "../../../utils/url";
import "./MenuItem.css";

const MenuItem = ({
  productType,
  subTypes,
  clickedSubType,
  setClickedItemType,
  page,
  setPage,
}) => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [rating, setRating] = useState({});

  useEffect(() => {
    fetchMenuItems(
      url,
      clickedSubType,
      page,
      productType,
      setItems,
      setItemCount
    );
  }, [clickedSubType, page, productType, rating]);
  console.log("is re-rendering");
  console.log("items", items);
  
  

  return (
    <div className="item-container">
      <NavFilter
        setClickedItemType={setClickedItemType}
        setPage={setPage}
        itemTypes={subTypes}
        dropdownTitle={productType + " Types"}
        inputPlaceholder={"Search for " + productType + "s..."}
      />
      <h3 className="fw-bold">
        {<ItemTypeWithDiscription clickedItemType={clickedSubType} />}
      </h3>
      <ItemTable
        itemName={productType}
        items={items}
        setItems={setItems}
        clickedItemType={clickedSubType}
        page={page}
        rating={rating}
        setRating={setRating}
      />
      <Pagination page={page} setPage={setPage} itemCount={itemCount} />
    </div>
  );
};

export default MenuItem;
