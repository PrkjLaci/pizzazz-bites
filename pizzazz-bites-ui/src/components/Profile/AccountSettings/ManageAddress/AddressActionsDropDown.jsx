import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { GoGear } from "react-icons/go";

const AddressActionsDropDown = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>
        <GoGear />
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        <MDBDropdownItem link>Edit</MDBDropdownItem>
        <MDBDropdownItem link>Delete</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default AddressActionsDropDown;
