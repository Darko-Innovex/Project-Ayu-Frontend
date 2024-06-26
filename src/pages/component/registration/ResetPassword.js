import React, { useState } from "react";
import "../../../css/component/registration/RegistrationFormStyle.css";
import { Link, useNavigate } from "react-router-dom";

let url = "";
let navigations = [];

export function getResetPasswordUrlAndNavigations(getUrl, getNavigations) {
  url = getUrl;
  navigations = getNavigations;
}

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate(navigations[0]);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    fetch(url, {
      method: " POST ",
      headers: {
        Accept: " application/json ",
        " Contend-Type ": " application/json ",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setNewPassword(null);
        setConfirmPassword(null);
      })
      .then(() => {
        alert("Your Password Changed Successfully!");
        navigateToSignIn();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="Form">
      <form>
        <div>
          <h2>Reset Password</h2>
          <button type="button" onClick={navigateToSignIn}>
            Sign In
          </button>
        </div>
        <label htmlFor="">Enter a New Password</label>
        <input
          type="password"
          onChange={handleNewPassword}
          placeholder="Enter New Password"
          required
        />
        <label htmlFor="">Confirm New Password</label>
        <input
          type="password"
          onChange={handleConfirmPassword}
          placeholder="Re-enter New Password"
          required
        />
        <p>
          By resetting password , you agree to our <u>Terms & Conditions</u>
        </p>
        <div>
          {/*Should be <button type="submit" onClick={handleSubmit}>*/}
          <button type="button" onClick={navigateToSignIn}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
