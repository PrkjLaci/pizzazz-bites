import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import "./DraggableAddress.css";
import AddressActionsDropDown from "./AddressActionsDropDown";

const DraggableAddress = ({ id, address, addresses }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <MDBCard ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <MDBCardBody
          style={
            addresses[0].id === address.id
              ? { backgroundColor: "rgb(80, 200, 120)" }
              : { backgroundColor: "rgb(211, 211, 211)" }
          }
          className="address-info"
        >
          <MDBTypography blockquote className="mb-0">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>{addresses[0].id === address.id && "Shipping address:"}</h6>
                <p>{`${address.street} ${address.houseNumber}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}</p>
              </div>
              <AddressActionsDropDown />
            </div>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default DraggableAddress;
