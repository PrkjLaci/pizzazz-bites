import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavFilter from "../../components/NavFilter/NavFilter";
import ItemTable from "../../components/ItemTable/ItemTable";
import Pagination from "../../components/Pegination/Pagination";
import PizzatypeWithDiscription from "../../../utils/PizzatypeWithDiscription";
import fetchMenuItems from "../../../utils/fetchMenuItems";
import url from "../../../utils/url";
import "./MenuItem.css";

const MenuItem = ({menuType, itemTypes, clickedItemType, setClickedItemType, page, setPage }) => {
    
    const [items, setItems] = useState([]);
    
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        fetchMenuItems(
            url,
            clickedItemType,
            page,
            menuType+"s",
            menuType,
            setItems,
            setItemCount
        );
    }, [clickedItemType, page, menuType]);

    return (
        <div className="item-container">
      <NavFilter
        setClickedItemType={setClickedItemType}
        setPage={setPage}
        itemTypes={itemTypes}
        dropdownTitle={menuType + " Types"}
        inputPlaceholder={"Search for " + menuType + "s..."}
      />
      {/* <h3 className="fw-bold">
        {<PizzatypeWithDiscription pizzatype={clickedPizzaType} />}
      </h3> */}
      <ItemTable
        itemName={menuType}
        items={items}
        clickedItemType={clickedItemType}
        page={page}
      />
      <Pagination page={page} setPage={setPage} itemCount={itemCount} />
    </div>
    );
};

export default MenuItem;