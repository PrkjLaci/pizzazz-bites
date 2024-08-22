import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { IoIosLeaf } from "react-icons/io";
import { GiChiliPepper } from "react-icons/gi";
import "./ItemCard.css";

const ItemCard = ({ item, index }) => {
  return (
    <MDBCard style={{ maxWidth: "540px" }} className="new-arrival-card">
      <MDBRow className="g-0">
        <MDBCol md="4" className="card-col">
          <MDBCardImage src={item.imageUrl} alt={index} className="img-custom"/>
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>
              {item.name}{" "}
              {item.isVegetarian && <IoIosLeaf className="isVegetarian-icon" />}
              {item.isSpicy && <GiChiliPepper className="isSpicy-icon" />}
            </MDBCardTitle>
            <MDBCardText>
              <i>{item.ingredients ? item.ingredients : item.decription}</i>
            </MDBCardText>
            <MDBCardText>{item.price}.-</MDBCardText>
            <Button variant="primary">Add to cart</Button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default ItemCard;
