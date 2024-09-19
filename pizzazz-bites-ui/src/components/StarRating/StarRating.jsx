import React, { useState, useContext } from "react";
import { Rating } from "react-simple-star-rating";
import "./StarRating.css";
import { MDBBadge } from "mdb-react-ui-kit";

const StarRating = ({ item, handleRatingChange }) => {
  return (
    <div className="star-rating-container">
      <Rating
      key={item.id}
        onClick={(event) => handleRatingChange(item, event)}
        initialValue={item.rating}
      />
      <MDBBadge pill color="secondary">
        {item.ratingCount}
      </MDBBadge>
    </div>
  );
};

export default StarRating;
