import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoIosLeaf } from "react-icons/io";
import { GiChiliPepper } from "react-icons/gi";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem", height: "25rem" }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body className="item-card-body">
        <Card.Title>
          {item.name}{" "}
          {item.isVegetarian && <IoIosLeaf className="isVegetarian-icon" />}
          {item.isSpicy && <GiChiliPepper className="isSpicy-icon" />}
        </Card.Title>
        <Card.Text>
          {item.ingredients ? item.ingredients : item.decription}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
