import "../../../css/component/Appointment/AppointmentFilter.css";
import { useState } from "react";

const HospitalAppointmentFilter = ({ closeFilter }) => {
  const [pressButton, setPressButton] = useState("");

  const handleButtonClick = (button) => {
    setPressButton(button);
  };

  return (
    <div id="PatientAppointmentFilter">
      <div className="background">
        <div className="AppointmentFilterContend HospitalAppointmentFilterContend">
          <div className="closeBtn" onClick={closeFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M0.237379 11.0437C-0.0791263 11.3602 -0.0791263 11.8733 0.237379 12.1898C0.553884 12.5063 1.06705 12.5063 1.38356 12.1898L0.237379 11.0437ZM6.78667 6.78667C7.10318 6.47015 7.10318 5.95707 6.78667 5.64055C6.47015 5.32404 5.95707 5.32404 5.64055 5.64055L6.78667 6.78667ZM5.64055 5.64055C5.32404 5.95707 5.32404 6.47015 5.64055 6.78667C5.95707 7.10318 6.47015 7.10318 6.78667 6.78667L5.64055 5.64055ZM12.1898 1.38356C12.5063 1.06705 12.5063 0.553884 12.1898 0.237379C11.8733 -0.0791263 11.3602 -0.0791263 11.0437 0.237379L12.1898 1.38356ZM6.78667 5.64055C6.47015 5.32404 5.95707 5.32404 5.64055 5.64055C5.32404 5.95707 5.32404 6.47015 5.64055 6.78667L6.78667 5.64055ZM11.0437 12.1898C11.3602 12.5063 11.8733 12.5063 12.1898 12.1898C12.5063 11.8733 12.5063 11.3602 12.1898 11.0437L11.0437 12.1898ZM5.64055 6.78667C5.95707 7.10318 6.47015 7.10318 6.78667 6.78667C7.10318 6.47015 7.10318 5.95707 6.78667 5.64055L5.64055 6.78667ZM1.38356 0.237379C1.06705 -0.0791263 0.553884 -0.0791263 0.237379 0.237379C-0.0791263 0.553884 -0.0791263 1.06705 0.237379 1.38356L1.38356 0.237379ZM1.38356 12.1898L6.78667 6.78667L5.64055 5.64055L0.237379 11.0437L1.38356 12.1898ZM6.78667 6.78667L12.1898 1.38356L11.0437 0.237379L5.64055 5.64055L6.78667 6.78667ZM5.64055 6.78667L11.0437 12.1898L12.1898 11.0437L6.78667 5.64055L5.64055 6.78667ZM6.78667 5.64055L1.38356 0.237379L0.237379 1.38356L5.64055 6.78667L6.78667 5.64055Z"
                fill="#777777"
              />
            </svg>
          </div>
          <h1>Status</h1>
          <div className="buttons">
            <button
              className={`All ${pressButton === "All" ? "active" : ""}`}
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className={`pending ${pressButton === "pending" ? "active" : ""}`}
              onClick={() => handleButtonClick("pending")}
            >
              Pending
            </button>
            <button
              className={`complete ${pressButton === "complete" ? "active" : ""}`}
              onClick={() => handleButtonClick("complete")}
            >
              Completed
            </button>
            <button
              className={`cancel ${pressButton === "cancel" ? "active" : ""}`}
              onClick={() => handleButtonClick("cancel")}
            >
              Canceled
            </button>
          </div>
          <h1>Appointment Date</h1>
          <div className="buttons">
            <button
              className={`All ${pressButton === "AllAppointment" ? "active" : ""}`}
              onClick={() => handleButtonClick("AllAppointment")}
            >
              All
            </button>
            <select name="" id="">
              <option value="">From</option>
            </select>
            <select name="" id="">
              <option value="">To</option>
            </select>
          </div>
          <h2>Reset Filter</h2>
        </div>
      </div>
    </div>
  );
};

export default HospitalAppointmentFilter;
