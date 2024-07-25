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

const SignIn = () => {
  const [nicNum, setNicNum] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleNic = (event) => {
    setNicNum(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigateToSignUp = () => {
    navigate(navigations[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: nicNum,
      password: password,
    };

    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        if (response.data.type === "patient")
          navigate(`/PatientDashboard/${response.data.patientId}`);
        else if (response.data.type === "doctor") {
          localStorage.setItem("schedule", "false");
          navigate(`/DoctorDashboard/${response.data.doctorId}`);
        } else if (response.data.type === "hospital")
          navigate(`/HospitalDashboard/${response.data.hospitalId}`);
        else if (response.data.type === "admin")
          navigate(`/AdminDashboard/${response.data.adminId}`);
        else if (response.data.type === "patient/doctor") {
          let id = response.data.patientd + "#" + response.data.doctorId;
          navigate(`load the popup`, id); //TODO: Call the doctor or patient selection popup component
        }
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
          <button type="button" onClick={navigateToSignUp}>
            Sign Up
          </button>
        </div>
        <label htmlFor="nic">NIC or Email</label>
        <input
          type="text"
          onChange={handleNic}
          placeholder="Enter Your NIC or Email"
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
