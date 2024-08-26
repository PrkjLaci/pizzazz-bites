import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { CgProfile } from "react-icons/cg";
import "./ProfileDropdown.css";
import PersonalInformationModal from "../Profile/PersonalInformation/PersonalInformation";

const ProfileDropdown = () => {
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);

  const togglePersonalInfoModal = () => {
    setShowPersonalInfoModal(!showPersonalInfoModal);
  };

  return (
    <>
      <MDBDropdown>
        <MDBDropdownToggle className="profile-dropdown">
          <CgProfile className="profile-icon" />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link onClick={togglePersonalInfoModal}>
            Personal Information
          </MDBDropdownItem>
          <MDBDropdownItem link>Manage address</MDBDropdownItem>
          <MDBDropdownItem link>Coupons & Points</MDBDropdownItem>
          <MDBDropdownItem link>Order history</MDBDropdownItem>
          <MDBDropdownItem link>Favourite orders</MDBDropdownItem>
          <MDBDropdownItem link>Change password</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Sign out</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      {showPersonalInfoModal && (
        <PersonalInformationModal
          isOpen={showPersonalInfoModal}
          toggleModal={togglePersonalInfoModal}
        />
      )}
    </>
  );
};

export default ProfileDropdown;
