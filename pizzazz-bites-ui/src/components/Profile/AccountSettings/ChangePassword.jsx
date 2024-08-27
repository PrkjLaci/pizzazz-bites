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

  const { userData } = useContext(AuthContext);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setEditingPassword(false);

    try {
      const response = await fetch(`${url}/api/User/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify({
          email: userData.email,
          password1: password.password1,
          password2: password.password2,
          newPassword: password.newPassword,
        }),
      });
      if (response.ok) {
        console.log("Password updated successfully.");
      }
    } catch (error) {
      console.error(error, "Error updating password.");
    }
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
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <>
            <MDBInput
              className="mb-4"
              type="password"
              id="disabledPassword1"
              label="Password"
              value={"*****"}
              disabled
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="disabledPassword2"
              label="Password again"
              value={"*****"}
              disabled
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="disabledPassword2"
              label="New password"
              disabled
            />
          </>
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
