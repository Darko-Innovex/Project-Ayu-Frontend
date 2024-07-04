import React, { useState } from "react";
import "../../component/registration/RegistrationBackground";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PatientSignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [nicNum, setNicNum] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [mobileNum, setMobile] = useState(null);
  const [bloodType, setBloodType] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
    navigate("/PatientDashboard");
  };

  const handleFistName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleNicNum = (event) => {
    setNicNum(event.target.value);
  };

  const handleDateOfBirth = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleMobileNum = (event) => {
    setMobile(event.target.value);
  };

  const handleBloodType = (event) => {
    setBloodType(event.target.value);
  };

  const handleMail = (event) => {
    setMail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      dob: dateOfBirth,
      nic: nicNum,
      mobile: mobileNum,
      email: mail,
      bloodType: bloodType,
      password: password,
      healthCardPin: null,
      hospitalId: null,
    };

    try {
      const response = await axios.post("http://localhost:8080/patient", data);
      console.log(response.data);
      console.log("Success");
      navigateToDashboard();
    } catch (error) {
      console.log(error);
    } finally {
      setFirstName(null);
      setLastName(null);
      setNicNum(null);
      setDateOfBirth(null);
      setMobile(null);
      setBloodType(null);
      setMail(null);
      setPassword(null);
      setConfirmPassword(null);
    }
  };

  return (
    <div id="Form">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h2>Sign Up</h2>
          <button onClick={navigateToSignIn}>Sign In</button>
        </div>
        <div>
          <input
            type="text"
            onChange={handleFistName}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            onChange={handleLastName}
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <input type="text" onChange={handleNicNum} placeholder="NIC" />
          <input
            type="date"
            onChange={handleDateOfBirth}
            placeholder="Date of Birth"
            required
          />
        </div>
        <div>
          <input
            type="number"
            onChange={handleMobileNum}
            placeholder="Mobile Number"
            required
          />
          <input
            type="text"
            onChange={handleBloodType}
            placeholder="Blood Type"
            required
          />
        </div>
        <input
          type="email"
          onChange={handleMail}
          placeholder="Email"
          required
        />
        <div>
          <input
            type="password"
            onChange={handlePassword}
            placeholder="Password"
            required
          />
          <input
            type="password"
            onChange={handleConfirmPassword}
            placeholder="Confirm Password"
            required
          />
        </div>
        <p>
          By Sign Up , you agree to our <u>Terms & Conditions</u>
        </p>
        <button type={"submit"}>Sign Up</button>
      </form>
    </div>
  );
};

export default PatientSignUp;
