import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { CgProfile } from "react-icons/cg";
import "./ProfileDropdown.css";
import AccountSettingsModal from "../AccountSettings/AccountSettingsModal";

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
            Account settings
          </MDBDropdownItem>
          <MDBDropdownItem link>Coupons & Points</MDBDropdownItem>
          <MDBDropdownItem link>Order history</MDBDropdownItem>
          <MDBDropdownItem link>Favourite orders</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Sign out</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      {showPersonalInfoModal && (
        <AccountSettingsModal
          isOpen={showPersonalInfoModal}
          toggleModal={togglePersonalInfoModal}
        />
      )}
    </>
  );
};

export default ProfileDropdown;
