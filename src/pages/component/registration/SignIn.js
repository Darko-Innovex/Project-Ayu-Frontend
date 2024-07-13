import React, { useState } from "react";
import "../../../css/component/registration/RegistrationFormStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: nicNum,
      password: password,
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/auth/signIn`,
        data,
      );
      console.log(response.data.type);
      if (response.status === 200) {
        if (response.data.type === "patient")
          navigate(`/PatientDashboard/${response.data.id}`);
        else if (response.data.type === "doctor")
          navigate(`/DoctorDashboard/${response.data.id}`);
        else if (response.data.type === "hospital")
          navigate(`/HospitalDashboard/${response.data.id}`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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
          <button type="submit" onClick={handleSubmit}>
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
