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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [editingPassword, setEditingPassword] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
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
          oldPassword: password.oldPassword,
          newPassword1: password.newPassword1,
          newPassword2: password.newPassword2,
        }),
      });
      if (response.ok) {
        toast.success("Password updated successfully.");
      } else if (response.status === 400) {
        setPassword({
          password1: "",
          password2: "",
          newPassword: "",
        });
        toast.error("Passwords do not match.");
      } else if (response.status === 401) {
        toast.warning("Unauthorized access. Please log in.");
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
              id="oldPassword"
              label="Old Password"
              value={password.oldPassword}
              onChange={handleChange}
              required
              style={{ marginTop: "0.3rem" }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="newPassword1"
              label="New Password"
              value={password.newPassword1}
              onChange={handleChange}
              required
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="newPassword2"
              label="New password again"
              value={password.newPassword2}
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
              label="Old Password"
              value={"*****"}
              disabled
              style={{ marginTop: "0.3rem" }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="disabledPassword2"
              label="New Password"
              disabled
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="newPassword"
              label="New password again"
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
