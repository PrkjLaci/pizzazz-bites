import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./NavFilter.css";

const NavFilter = ({ clickedPizzaType, setClickedPizzaType, setPage }) => {
  const [openBasic, setOpenBasic] = useState(false);

  const handlePizzaTypeClick = (e) => {
    e.preventDefault();
    setPage(1);
    setClickedPizzaType(e.target.text);
  };

  return (
    <div className="d-flex">
      <MDBNavbar expand="lg">
        <MDBContainer className="nav-filter">
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          ></MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Pizza Types
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      onClick={(e) => handlePizzaTypeClick(e)}
                    >
                      Italian & International
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={(e) => handlePizzaTypeClick(e)}
                    >
                      Artisan
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={(e) => handlePizzaTypeClick(e)}
                    >
                      Pizza Al Carbone
                    </MDBDropdownItem>
                    <hr />
                    <MDBDropdownItem
                      link
                      onClick={(e) => handlePizzaTypeClick(e)}
                    >
                      Show All
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem></MDBNavbarItem>
              <MDBNavbarItem className="nav-filter-input">
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Pizza..."
                    aria-label="Search"
                  />
                  <MDBBtn color="primary" type="button">
                    Search
                  </MDBBtn>
                </form>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default NavFilter;
