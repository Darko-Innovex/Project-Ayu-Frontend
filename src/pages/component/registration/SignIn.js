import React, { useState } from "react";
import "../../../css/component/registration/RegistrationFormStyle.css";
import { Link, useNavigate } from "react-router-dom";

let url = "";
let navigations = [];

export function getSignInUrlAndNavigations(getUrl, getNavigations) {
  url = getUrl;
  navigations = getNavigations;
}

const SignIn = ({ showSignUp = true, isHospital = false }) => {
  const [nicNum, setNicNum] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleNic = (event) => {
    setNicNum(event.target.value);
  };

  const navigateToSignUp = () => {
    navigate(navigations[0]);
  };

  const navigateToDashboard = () => {
    navigate(navigations[2]);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nicNum: nicNum,
      password: password,
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
        setNicNum(null);
        setPassword(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="Form">
      <form>
        <div>
          <h2>Sign In</h2>
          {showSignUp && (
            <button type="button" onClick={navigateToSignUp}>
              Sign Up
            </button>
          )}
        </div>
        <label htmlFor="nic">{isHospital ? "Email" : "NIC"}</label>
        <input
          type={isHospital ? "email" : "text"}
          onChange={handleNic}
          placeholder={
            isHospital ? "Enter Your Email" : "Enter Your NIC Number"
          }
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={handlePassword}
          placeholder="Enter Password"
          required
        />
        <p>
          By Signing Up , you agree to our <u>Terms & Conditions</u>
        </p>
        <div>
          <button type="submit" onClick={navigateToDashboard}>
            Sign In
          </button>
          <Link to={navigations[1]}>
            <h2 className="ForgetPassword">Forget Password</h2>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
