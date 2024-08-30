import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./AccountSettingsModal.css";
import { AuthContext } from "../../../../utils/AuthContext";
import { useContext, useState, useEffect } from "react";
import url from "../../../../utils/url";
import PersonalInformationForm from "./PersonalInformationForm";
import ChangePassword from "./ChangePassword";
import ManageAddress from "./ManageAddress/ManageAddress";

const AccountSettingsModal = ({ isOpen, toggleModal }) => {
  const { userData } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: userData.email,
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [togglePersonalInfoForm, setTogglePersonalInfoForm] = useState(false);
  const [toggleAddressForm, setToggleAddressForm] = useState(false);
  const [toggleChangePasswordForm, setToggleChangePasswordForm] =
    useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${url}/api/User/get-user-by-email?email=${userData.email}`,
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
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        }));
      }
    } catch (error) {
      console.error(error, "Error fetching user data.");
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  return (
    <>
      <MDBModal open={isOpen} tabIndex="-1">
        <MDBModalDialog >
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Account Settings</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p
                className="toggle-account-settings"
                onClick={() =>
                  setTogglePersonalInfoForm(!togglePersonalInfoForm)
                }
              >
                Personal Information
              </p>
              <MDBCollapse open={togglePersonalInfoForm}>
                <PersonalInformationForm
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
              </MDBCollapse>
              <p
                className="toggle-account-settings"
                onClick={() => setToggleAddressForm(!toggleAddressForm)}
              >
                Manage Addresses
              </p>
              <MDBCollapse open={toggleAddressForm}>
                <ManageAddress />
              </MDBCollapse>
              <p
                className="toggle-account-settings"
                onClick={() =>
                  setToggleChangePasswordForm(!toggleChangePasswordForm)
                }
              >
                Change password
              </p>
              <MDBCollapse open={toggleChangePasswordForm}>
                <ChangePassword />
              </MDBCollapse>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AccountSettingsModal;
