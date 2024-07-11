import "../../../css/component/dashboard/HospitalDashboardFilter.css";
import { useState } from "react";

const HospitalDashboardFilter = ({ CloseFilter }) => {
  const [pressButton, setPressButton] = useState("All");

  const handleButtonClick = (button) => {
    setPressButton(button);
  };

  return (
    <div id="HospitalDashboardFilter">
      <div className="background">
        <div>
          <div className="closeBtn" onClick={CloseFilter}>
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
          <h1>Reports</h1>
          <div className="buttons">
            <button
              className={pressButton === "All" ? "active" : ""}
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className={pressButton === "LabReport" ? "active" : ""}
              onClick={() => handleButtonClick("LabReport")}
            >
              Lab Report
            </button>
            <button
              className={pressButton === "MedicalReport" ? "active" : ""}
              onClick={() => handleButtonClick("MedicalReport")}
            >
              Medical Report
            </button>
          </div>
          <h1>Appointment</h1>
          <div className="buttons">
            <button
              className={pressButton === "AllAppointments" ? "active" : ""}
              onClick={() => handleButtonClick("AllAppointments")}
            >
              All
            </button>
            <button
              className={pressButton === "Pending" ? "active" : ""}
              onClick={() => handleButtonClick("Pending")}
            >
              Pending
            </button>
            <button
              className={pressButton === "Completed" ? "active" : ""}
              onClick={() => handleButtonClick("Completed")}
            >
              Completed
            </button>
          </div>
          <h2>By Date</h2>
          <div>
            <select name="from" id="from">
              <option value="">From</option>
            </select>
            <select name="to" id="to">
              <option value="">To</option>
            </select>
          </div>
          <h3>Reset Search</h3>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardFilter;
