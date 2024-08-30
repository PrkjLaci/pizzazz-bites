import React, { useState, useContext, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import url from "../../../../../utils/url";
import { AuthContext } from "../../../../../utils/AuthContext";
import { toast } from "react-toastify";

const AddNewAddressModal = ({
  addNewAddressOpen,
  setAddNewAddressOpen,
  toggleOpen,
  onAddressAdded,
}) => {
  const [newAddress, setNewAddress] = useState({
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const { userData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [id]: value.toString(),
    }));
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    toggleOpen();

    try {
      const response = await fetch(
        `${url}/api/User/add-address?email=${userData.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
          body: JSON.stringify(newAddress),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setNewAddress({
          houseNumber: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        });
        setAddNewAddressOpen(false);
        toast.success("New address added successfully.");
        onAddressAdded(data.data);
      }
    } catch (error) {
      console.error(error, "Error saving address.");
    }
  };

  return (
    <>
      <MDBModal
        open={addNewAddressOpen}
        onClose={() => setAddNewAddressOpen(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add new address</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <MDBInput
                  className="mb-4"
                  type="number"
                  id="houseNumber"
                  label="House Number"
                  value={newAddress.houseNumber}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  className="mb-4"
                  type="string"
                  id="street"
                  label="Street"
                  value={newAddress.street}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  className="mb-4"
                  type="string"
                  id="city"
                  label="City"
                  value={newAddress.city}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  className="mb-4"
                  type="string"
                  id="state"
                  label="State"
                  value={newAddress.state}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  className="mb-4"
                  type="number"
                  id="zipCode"
                  label="Zip Code"
                  value={newAddress.zipCode}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  className="mb-4"
                  type="string"
                  id="country"
                  label="Country"
                  value={newAddress.country}
                  onChange={handleChange}
                  required
                />
                <MDBBtn onClick={(e) => handleSaveAddress(e)}>Save</MDBBtn>
              </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddNewAddressModal;
