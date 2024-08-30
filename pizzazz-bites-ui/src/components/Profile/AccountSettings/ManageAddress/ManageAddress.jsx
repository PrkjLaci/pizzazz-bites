import React, { useState, useEffect, useContext } from "react";
import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import url from "../../../../../utils/url";
import { AuthContext } from "../../../../../utils/AuthContext";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { toast } from "react-toastify";
import DraggableAddress from "./DraggableAddress";
import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBBtn,
  MDBTooltip,
} from "mdb-react-ui-kit";
import "../AccountSettingsModal.css";
import AddNewAddressModal from "./AddNewAddressModal";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [editingAddresses, setEditingAddresses] = useState(false);
  const { userData } = useContext(AuthContext);
  const [addNewAddressOpen, setAddNewAddressOpen] = useState(false);

  console.log("Rendering ManageAddress");

  const getAddressPosition = (id) =>
    addresses.findIndex((address) => address.id === id);

  const fetchAddresses = async () => {
    try {
      const response = await fetch(
        `${url}/api/User/get-all-addresses?email=${userData.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      }
      if (response.status === 401) {
        toast.warning("You are not authorized to view this page.");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    setEditingAddresses(false);

    try {
      const response = await fetch(
        `${url}/api/User/refresh-address-order?email=${userData.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
          body: JSON.stringify(addresses),
        }
      );
      if (response.ok) {
        toast.success("Addresses saved successfully.");
      }
    } catch (error) {}
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setAddresses((addresses) => {
      const originalPos = getAddressPosition(active.id);
      const newPost = getAddressPosition(over.id);

      const newAddresses = arrayMove(addresses, originalPos, newPost);

      return newAddresses.map((address, index) => ({
        ...address,
        order: index,
      }));
    });
  };

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 100,
    },
  });

  const sensors = useSensors(pointerSensor);

  useEffect(() => {
    fetchAddresses();
  }, []);
  console.log("Addresses", addresses);

  const toggleAddNewAddress = () => {
    setAddNewAddressOpen(!addNewAddressOpen);
  };

  const handleNewAddressAdded = (newAddress) => {
    console.log("New address added", newAddress);
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };
  console.log("Addresses", addresses);

  return (
    <>
      {editingAddresses ? (
        <>
          <MDBTooltip
            wrapperProps={{ color: "secondary" }}
            title="Drag and drop an address to the top of the list to set it as your
            shipping address."
          >
            Set Shipping address
          </MDBTooltip>
          <DndContext
            onDragEnd={(e) => handleDragEnd(e)}
            collisionDetection={closestCorners}
            sensors={sensors}
          >
            <SortableContext
              items={addresses}
              strategy={verticalListSortingStrategy}
            >
              {addresses.map((address) => {
                return (
                  <>
                    <DraggableAddress
                      key={address.id}
                      id={address.id}
                      address={address}
                      addresses={addresses}
                      toggleAddNewAddress={toggleAddNewAddress}
                    />
                  </>
                );
              })}
            </SortableContext>
          </DndContext>
          <MDBCard onClick={toggleAddNewAddress}>
            <MDBCardBody className="new-address-card-body">
              <p className="new-address-p">+ New Address</p>
            </MDBCardBody>
          </MDBCard>
        </>
      ) : (
        <>
          {addresses.map((address) => {
            return (
              <MDBCard>
                <MDBCardBody
                  style={
                    addresses[0].id === address.id
                      ? { backgroundColor: "rgb(80, 200, 120)" }
                      : { backgroundColor: "rgb(211, 211, 211)" }
                  }
                  className="address-info"
                >
                  <MDBTypography blockquote className="mb-0">
                    <h6>
                      {addresses[0].id === address.id && "Shipping address:"}
                    </h6>
                    <p>{`${address.street} ${address.houseNumber}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}</p>
                  </MDBTypography>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </>
      )}
      {editingAddresses ? (
        <>
          <MDBBtn onClick={(e) => handleSaveAddress(e)}>Save</MDBBtn>
          <MDBBtn onClick={() => setEditingAddresses(false)}>Cancel</MDBBtn>
        </>
      ) : (
        <MDBBtn onClick={() => setEditingAddresses(true)}>Edit</MDBBtn>
      )}
      <AddNewAddressModal
        addNewAddressOpen={addNewAddressOpen}
        setAddNewAddressOpen={setAddNewAddressOpen}
        toggleOpen={toggleAddNewAddress}
        onAddressAdded={handleNewAddressAdded}
      />
    </>
  );
};
export default ManageAddress;
