import React, { useState } from "react";
import "../../../css/component/registration/RegistrationFormStyle.css";
import { useNavigate } from "react-router-dom";

const AdminSignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [nicNum, setNicNum] = useState(null);
  const [mobileNum, setMobile] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/AdminSignIn");
  };

  const navigateToDashboard = () => {
    // navigate("/PatientDashboard");
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleNicNum = (event) => {
    setLastName(event.target.value);
  };

  const handleMobileNum = (event) => {
    setLastName(event.target.value);
  };

  const handleMail = (event) => {
    setLastName(event.target.value);
  };

  const handlePassword = (event) => {
    setLastName(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      nicNum: nicNum,
      mobileNum: mobileNum,
      mail: mail,
      password: password,
      confirmPassword: confirmPassword,
    };
    fetch(" ENTER URL ", {
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
        setFirstName(null);
        setLastName(null);
        setNicNum(null);
        setMobile(null);
        setMail(null);
        setPassword(null);
        setConfirmPassword(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="Form">
      <form action="">
        <div>
          <h2>Sign Up</h2>
          <button onClick={navigateToSignIn}>Sign In</button>
        </div>
        <div>
          <input
            type="text"
            onChange={handleFirstName}
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
        <input type="text" onChange={handleNicNum} placeholder="NIC" required />
        <div>
          <input
            type="number"
            onChange={handleMobileNum}
            placeholder="Mobile"
            required
          />
          <input
            type="email"
            onChange={handleMail}
            placeholder="Email"
            required
          />
        </div>
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
        <button onClick={navigateToDashboard}>Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignUp;
