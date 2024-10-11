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
import OrderHistoryModal from "../OrderHistory/OrderHistoryModal";

const ProfileDropdown = () => {
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showOrderHistoryModal, setShowOrderHistoryModal] = useState(false);

  const togglePersonalInfoModal = () => {
    setShowPersonalInfoModal(!showPersonalInfoModal);
  };

  const toggleOrderHistoryModal = () => {
    setShowOrderHistoryModal(!showOrderHistoryModal);
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
          <MDBDropdownItem link onClick={toggleOrderHistoryModal}>
            Order history
          </MDBDropdownItem>
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

      {showOrderHistoryModal && (
        <OrderHistoryModal
          isOpen={showOrderHistoryModal}
          toggleModal={toggleOrderHistoryModal}
        />
      )}
    </>
  );
};

export default ProfileDropdown;
