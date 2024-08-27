import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./AccountSettingsModal.css";

const ChangePassword = () => {
  const [editingPassword, setEditingPassword] = useState(false);
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [id]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setEditingPassword(false);
  };

  return (
    <>
      <form>
        {editingPassword ? (
          <>
            <MDBInput
              className="mb-4"
              type="password"
              id="password1"
              label="Password"
              value={password.password1}
              onChange={handleChange}
              required
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="password2"
              label="Password again"
              value={password.password2}
              onChange={handleChange}
              required
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="newPassword"
              label="New password"
              value={password.password2}
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <MDBInput
            className="mb-4"
            type="password"
            id="firstName"
            label="Password"
            value={"*****"}
            disabled
          />
        )}
      </form>
      {editingPassword ? (
        <>
          <MDBBtn onClick={(e) => handlePasswordChange(e)}>Save</MDBBtn>
          <MDBBtn onClick={() => setEditingPassword(false)}>Cancel</MDBBtn>
        </>
      ) : (
        <MDBBtn onClick={() => setEditingPassword(true)}>Edit</MDBBtn>
      )}
    </>
  );
};

export default ChangePassword;
