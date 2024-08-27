import React, { useState, useContext } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./AccountSettingsModal.css";
import url from "../../../../utils/url";
import { AuthContext } from "../../../../utils/AuthContext";

const PersonalInformationForm = ({ userInfo, setUserInfo }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };
  const [editingPersonalInfo, setEditingPersonalInfo] = useState(false);
  const { userData } = useContext(AuthContext);

  const handleSaveUserData = async (e) => {
    e.preventDefault();
    setEditingPersonalInfo(false);

    try {
      const response = await fetch(`${url}/api/User/update-personal-info`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify({
          email: userData.email,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          phoneNumber: userInfo.phoneNumber,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        }));
      }
    } catch (error) {
      console.error(error, "Error updating user data.");
    }
  };

  return (
    <>
      <form>
        {editingPersonalInfo ? (
          <>
            <MDBInput
              className="mb-4"
              type="text"
              id="firstName"
              label="First Name"
              value={userInfo.firstName}
              placeholder={userInfo.firstName}
              onChange={handleChange}
            />
            <MDBInput
              className="mb-4"
              type="text"
              id="lastName"
              label="Last Name"
              value={userInfo.lastName}
              placeholder={userInfo.lastName}
              onChange={handleChange}
            />
            <MDBInput
              className="mb-4"
              type="text"
              id="phoneNumber"
              label="Phone Number"
              value={userInfo.phoneNumber}
              placeholder={userInfo.phoneNumber}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <MDBInput
              className="mb-4"
              type="text"
              id="firstNameDisabled"
              label="First Name"
              value={userInfo.firstName}
              disabled
            />
            <MDBInput
              className="mb-4"
              type="text"
              id="lastNameDisabled"
              label="Last Name"
              placeholder={userInfo.lastName}
              value={userInfo.lastName}
              disabled
            />
            <MDBInput
              className="mb-4"
              type="text"
              id="phoneNumberDisabled"
              label="Phone Number"
              placeholder={userInfo.phoneNumber}
              value={userInfo.phoneNumber}
              disabled
            />
          </>
        )}
      </form>
      {editingPersonalInfo ? (
        <>
          <MDBBtn onClick={(e) => handleSaveUserData(e)}>Save</MDBBtn>
          <MDBBtn onClick={() => setEditingPersonalInfo(false)}>Cancel</MDBBtn>
        </>
      ) : (
        <MDBBtn onClick={() => setEditingPersonalInfo(true)}>Edit</MDBBtn>
      )}
    </>
  );
};

export default PersonalInformationForm;
