import { RiShoppingCartLine } from "react-icons/ri";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "./ItemTable.css";
import React, { useState, useContext } from "react";
import AddItemToCart from "../Cart/AddItemToCart";
import StarRating from "../StarRating/StarRating";
import { RateContext } from "../../../utils/RateContext";

const ItemTable = ({
  itemName,
  items,
  setItems,
  clickedItemType,
  page,
  rating,
  setRating,
}) => {
  const [showAddItemToCart, setShowAddItemToCart] = useState(false);
  const [clickedItem, setClickedItem] = useState({});

  const { rateItem } = useContext(RateContext);

  const toggleAddItemToCart = () => setShowAddItemToCart(!showAddItemToCart);

  const handleRatingChange = async (item, newRating) => {
    setRating((prevRatings) => ({
      ...prevRatings,
      [item.id]: newRating,
    }));
    const ratedItem = await rateItem(item.id, newRating, item);
    if (ratedItem) {
      setItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, rating: newRating, ...ratedItem }
            : prevItem
        )
      );
    }
  };

  return (
    <>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col" className="item-table-nav">
              {itemName} »{" "}
              {clickedItemType === "" ? "Show All" : clickedItemType} » {page}{" "}
              page
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {items.map((item) => (
            <tr key={item.id} className="m-5 table-img">
              <td className="talbe-image">
                <img src={item.imageUrl} alt="" className="item-image" />
              </td>
              <td className="table-description">
                <h4 className="fw-bold mb-0">
                  {item.productId <= 9
                    ? `0${item.productId}. `
                    : `${item.productId}. `}
                  {item.name}
                </h4>
                <p className="mb-1">
                  <i>
                    {item.ingredients ? `Ingredients: ${item.ingredients}` : ""}
                  </i>
                </p>
                <p className="mb-1">
                  <i>{item.description}</i>
                </p>
                <p className="mb-1">
                  <i>
                    {item.isAlcoholic
                      ? `Alcohol percentage: ${item.alcoholPercentage}%`
                      : ""}
                  </i>
                </p>
                <p className="mb-1">
                  <i>{item.volume}</i>
                </p>
              </td>
              <td className="table-rating">
                <StarRating
                  item={item}
                  rating={rating[item.id]}
                  setRating={setRating}
                  handleRatingChange={handleRatingChange}
                />
              </td>
              <td className="table-pricing">
                {item.price}.-
                <MDBBtn
                  color=""
                  rounded
                  size="sm"
                  className="cart-button"
                  onClick={() => {
                    setClickedItem(item);
                    toggleAddItemToCart();
                  }}
                >
                  <RiShoppingCartLine />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {showAddItemToCart && (
        <AddItemToCart
          showAddItemToCart={showAddItemToCart}
          setShowAddItemToCart={setShowAddItemToCart}
          toggleAddItemToCart={toggleAddItemToCart}
          setClickedItem={setClickedItem}
          clickedItem={clickedItem}
        />
      )}
    </>
  );
};

export default ItemTable;
