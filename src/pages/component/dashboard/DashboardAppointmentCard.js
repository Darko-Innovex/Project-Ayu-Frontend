import "../../../css/component/dashboard/AppointmentCard.css";
import ProfileImage from "../../../img/Young bearded man with striped shirt.png";
import { useState } from "react";
import ViewAppointment from "../PatientAppointment/ViewAppointment";

const DashboardAppointmentCard = ({ AppointmentData, DoctorData }) => {
  const [viewAppointment, setViewAppointment] = useState(false);

  const handleViewAppointment = () => {
    setViewAppointment(!viewAppointment);
  };

  return (
    <div>
      {viewAppointment && (
        <ViewAppointment
          HideAppointment={handleViewAppointment}
          AppointmentData={AppointmentData}
        />
      )}
      <div id="AppointmentCard">
        <div className="image">
          <img src={ProfileImage} alt="" />
        </div>
        <h1>Dr. {DoctorData.name}</h1>
        <h2>{DoctorData.speciality}</h2>
        <div className="AppointmentContend">
          <div className="starSet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.5042 1.6483C6.66128 1.27875 6.73986 1.09398 6.84924 1.03708C6.94423 0.987641 7.05578 0.987641 7.15078 1.03708C7.26016 1.09398 7.33873 1.27875 7.49581 1.6483L8.74703 4.59178C8.79351 4.70103 8.81672 4.75565 8.85268 4.79748C8.88444 4.83449 8.92332 4.8641 8.96668 4.88436C9.01573 4.90727 9.07246 4.91355 9.18591 4.9261L12.2422 5.26436C12.626 5.30682 12.8178 5.32805 12.9032 5.41955C12.9774 5.49902 13.0118 5.6103 12.9964 5.72033C12.9786 5.84698 12.8353 5.98238 12.5487 6.25325L10.2656 8.4107C10.1809 8.49075 10.1385 8.53081 10.1117 8.57955C10.088 8.62273 10.0731 8.67062 10.0681 8.72014C10.0625 8.77614 10.0743 8.83462 10.098 8.95167L10.7357 12.1042C10.8158 12.5 10.8558 12.6979 10.7992 12.8113C10.75 12.9099 10.6598 12.9786 10.5552 12.9972C10.4348 13.0185 10.2677 12.9175 9.93345 12.7154L7.27122 11.1052C7.17242 11.0454 7.12302 11.0156 7.07051 11.0039C7.02403 10.9936 6.97599 10.9936 6.92951 11.0039C6.87699 11.0156 6.82759 11.0454 6.7288 11.1052L4.06657 12.7154C3.73234 12.9175 3.56522 13.0185 3.44484 12.9972C3.34027 12.9786 3.25 12.9099 3.20085 12.8113C3.14427 12.6979 3.18429 12.5 3.26435 12.1042L3.90201 8.95167C3.92568 8.83462 3.93751 8.77614 3.9319 8.72014C3.92692 8.67062 3.91208 8.62273 3.88833 8.57955C3.8615 8.53081 3.81913 8.49075 3.7344 8.4107L1.45139 6.25325C1.16476 5.98238 1.02145 5.84698 1.00363 5.72033C0.988162 5.6103 1.02264 5.49902 1.09683 5.41955C1.18224 5.32805 1.3741 5.30682 1.75781 5.26436L4.81414 4.9261C4.92757 4.91355 4.98429 4.90727 5.03333 4.88436C5.07672 4.8641 5.11558 4.83449 5.14737 4.79748C5.1833 4.75565 5.20652 4.70103 5.25297 4.59178L6.5042 1.6483Z"
                fill="#E0FD03"
                stroke="#262626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.5042 1.6483C6.66128 1.27875 6.73986 1.09398 6.84924 1.03708C6.94423 0.987641 7.05578 0.987641 7.15078 1.03708C7.26016 1.09398 7.33873 1.27875 7.49581 1.6483L8.74703 4.59178C8.79351 4.70103 8.81672 4.75565 8.85268 4.79748C8.88444 4.83449 8.92332 4.8641 8.96668 4.88436C9.01573 4.90727 9.07246 4.91355 9.18591 4.9261L12.2422 5.26436C12.626 5.30682 12.8178 5.32805 12.9032 5.41955C12.9774 5.49902 13.0118 5.6103 12.9964 5.72033C12.9786 5.84698 12.8353 5.98238 12.5487 6.25325L10.2656 8.4107C10.1809 8.49075 10.1385 8.53081 10.1117 8.57955C10.088 8.62273 10.0731 8.67062 10.0681 8.72014C10.0625 8.77614 10.0743 8.83462 10.098 8.95167L10.7357 12.1042C10.8158 12.5 10.8558 12.6979 10.7992 12.8113C10.75 12.9099 10.6598 12.9786 10.5552 12.9972C10.4348 13.0185 10.2677 12.9175 9.93345 12.7154L7.27122 11.1052C7.17242 11.0454 7.12302 11.0156 7.07051 11.0039C7.02403 10.9936 6.97599 10.9936 6.92951 11.0039C6.87699 11.0156 6.82759 11.0454 6.7288 11.1052L4.06657 12.7154C3.73234 12.9175 3.56522 13.0185 3.44484 12.9972C3.34027 12.9786 3.25 12.9099 3.20085 12.8113C3.14427 12.6979 3.18429 12.5 3.26435 12.1042L3.90201 8.95167C3.92568 8.83462 3.93751 8.77614 3.9319 8.72014C3.92692 8.67062 3.91208 8.62273 3.88833 8.57955C3.8615 8.53081 3.81913 8.49075 3.7344 8.4107L1.45139 6.25325C1.16476 5.98238 1.02145 5.84698 1.00363 5.72033C0.988162 5.6103 1.02264 5.49902 1.09683 5.41955C1.18224 5.32805 1.3741 5.30682 1.75781 5.26436L4.81414 4.9261C4.92757 4.91355 4.98429 4.90727 5.03333 4.88436C5.07672 4.8641 5.11558 4.83449 5.14737 4.79748C5.1833 4.75565 5.20652 4.70103 5.25297 4.59178L6.5042 1.6483Z"
                fill="#E0FD03"
                stroke="#262626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.5042 1.6483C6.66128 1.27875 6.73986 1.09398 6.84924 1.03708C6.94423 0.987641 7.05578 0.987641 7.15078 1.03708C7.26016 1.09398 7.33873 1.27875 7.49581 1.6483L8.74703 4.59178C8.79351 4.70103 8.81672 4.75565 8.85268 4.79748C8.88444 4.83449 8.92332 4.8641 8.96668 4.88436C9.01573 4.90727 9.07246 4.91355 9.18591 4.9261L12.2422 5.26436C12.626 5.30682 12.8178 5.32805 12.9032 5.41955C12.9774 5.49902 13.0118 5.6103 12.9964 5.72033C12.9786 5.84698 12.8353 5.98238 12.5487 6.25325L10.2656 8.4107C10.1809 8.49075 10.1385 8.53081 10.1117 8.57955C10.088 8.62273 10.0731 8.67062 10.0681 8.72014C10.0625 8.77614 10.0743 8.83462 10.098 8.95167L10.7357 12.1042C10.8158 12.5 10.8558 12.6979 10.7992 12.8113C10.75 12.9099 10.6598 12.9786 10.5552 12.9972C10.4348 13.0185 10.2677 12.9175 9.93345 12.7154L7.27122 11.1052C7.17242 11.0454 7.12302 11.0156 7.07051 11.0039C7.02403 10.9936 6.97599 10.9936 6.92951 11.0039C6.87699 11.0156 6.82759 11.0454 6.7288 11.1052L4.06657 12.7154C3.73234 12.9175 3.56522 13.0185 3.44484 12.9972C3.34027 12.9786 3.25 12.9099 3.20085 12.8113C3.14427 12.6979 3.18429 12.5 3.26435 12.1042L3.90201 8.95167C3.92568 8.83462 3.93751 8.77614 3.9319 8.72014C3.92692 8.67062 3.91208 8.62273 3.88833 8.57955C3.8615 8.53081 3.81913 8.49075 3.7344 8.4107L1.45139 6.25325C1.16476 5.98238 1.02145 5.84698 1.00363 5.72033C0.988162 5.6103 1.02264 5.49902 1.09683 5.41955C1.18224 5.32805 1.3741 5.30682 1.75781 5.26436L4.81414 4.9261C4.92757 4.91355 4.98429 4.90727 5.03333 4.88436C5.07672 4.8641 5.11558 4.83449 5.14737 4.79748C5.1833 4.75565 5.20652 4.70103 5.25297 4.59178L6.5042 1.6483Z"
                fill="#E0FD03"
                stroke="#262626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.5042 1.6483C6.66128 1.27875 6.73986 1.09398 6.84924 1.03708C6.94423 0.987641 7.05578 0.987641 7.15078 1.03708C7.26016 1.09398 7.33873 1.27875 7.49581 1.6483L8.74703 4.59178C8.79351 4.70103 8.81672 4.75565 8.85268 4.79748C8.88444 4.83449 8.92332 4.8641 8.96668 4.88436C9.01573 4.90727 9.07246 4.91355 9.18591 4.9261L12.2422 5.26436C12.626 5.30682 12.8178 5.32805 12.9032 5.41955C12.9774 5.49902 13.0118 5.6103 12.9964 5.72033C12.9786 5.84698 12.8353 5.98238 12.5487 6.25325L10.2656 8.4107C10.1809 8.49075 10.1385 8.53081 10.1117 8.57955C10.088 8.62273 10.0731 8.67062 10.0681 8.72014C10.0625 8.77614 10.0743 8.83462 10.098 8.95167L10.7357 12.1042C10.8158 12.5 10.8558 12.6979 10.7992 12.8113C10.75 12.9099 10.6598 12.9786 10.5552 12.9972C10.4348 13.0185 10.2677 12.9175 9.93345 12.7154L7.27122 11.1052C7.17242 11.0454 7.12302 11.0156 7.07051 11.0039C7.02403 10.9936 6.97599 10.9936 6.92951 11.0039C6.87699 11.0156 6.82759 11.0454 6.7288 11.1052L4.06657 12.7154C3.73234 12.9175 3.56522 13.0185 3.44484 12.9972C3.34027 12.9786 3.25 12.9099 3.20085 12.8113C3.14427 12.6979 3.18429 12.5 3.26435 12.1042L3.90201 8.95167C3.92568 8.83462 3.93751 8.77614 3.9319 8.72014C3.92692 8.67062 3.91208 8.62273 3.88833 8.57955C3.8615 8.53081 3.81913 8.49075 3.7344 8.4107L1.45139 6.25325C1.16476 5.98238 1.02145 5.84698 1.00363 5.72033C0.988162 5.6103 1.02264 5.49902 1.09683 5.41955C1.18224 5.32805 1.3741 5.30682 1.75781 5.26436L4.81414 4.9261C4.92757 4.91355 4.98429 4.90727 5.03333 4.88436C5.07672 4.8641 5.11558 4.83449 5.14737 4.79748C5.1833 4.75565 5.20652 4.70103 5.25297 4.59178L6.5042 1.6483Z"
                fill="#E0FD03"
                stroke="#262626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.5042 1.6483C6.66128 1.27875 6.73986 1.09398 6.84924 1.03708C6.94423 0.987641 7.05578 0.987641 7.15078 1.03708C7.26016 1.09398 7.33873 1.27875 7.49581 1.6483L8.74703 4.59178C8.79351 4.70103 8.81672 4.75565 8.85268 4.79748C8.88444 4.83449 8.92332 4.8641 8.96668 4.88436C9.01573 4.90727 9.07246 4.91355 9.18591 4.9261L12.2422 5.26436C12.626 5.30682 12.8178 5.32805 12.9032 5.41955C12.9774 5.49902 13.0118 5.6103 12.9964 5.72033C12.9786 5.84698 12.8353 5.98238 12.5487 6.25325L10.2656 8.4107C10.1809 8.49075 10.1385 8.53081 10.1117 8.57955C10.088 8.62273 10.0731 8.67062 10.0681 8.72014C10.0625 8.77614 10.0743 8.83462 10.098 8.95167L10.7357 12.1042C10.8158 12.5 10.8558 12.6979 10.7992 12.8113C10.75 12.9099 10.6598 12.9786 10.5552 12.9972C10.4348 13.0185 10.2677 12.9175 9.93345 12.7154L7.27122 11.1052C7.17242 11.0454 7.12302 11.0156 7.07051 11.0039C7.02403 10.9936 6.97599 10.9936 6.92951 11.0039C6.87699 11.0156 6.82759 11.0454 6.7288 11.1052L4.06657 12.7154C3.73234 12.9175 3.56522 13.0185 3.44484 12.9972C3.34027 12.9786 3.25 12.9099 3.20085 12.8113C3.14427 12.6979 3.18429 12.5 3.26435 12.1042L3.90201 8.95167C3.92568 8.83462 3.93751 8.77614 3.9319 8.72014C3.92692 8.67062 3.91208 8.62273 3.88833 8.57955C3.8615 8.53081 3.81913 8.49075 3.7344 8.4107L1.45139 6.25325C1.16476 5.98238 1.02145 5.84698 1.00363 5.72033C0.988162 5.6103 1.02264 5.49902 1.09683 5.41955C1.18224 5.32805 1.3741 5.30682 1.75781 5.26436L4.81414 4.9261C4.92757 4.91355 4.98429 4.90727 5.03333 4.88436C5.07672 4.8641 5.11558 4.83449 5.14737 4.79748C5.1833 4.75565 5.20652 4.70103 5.25297 4.59178L6.5042 1.6483Z"
                fill="#E0FD03"
                stroke="#262626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3
            style={
              AppointmentData.status === "Completed"
                ? { color: "#499A51" }
                : AppointmentData.status === "Pending"
                  ? { color: "#7E83F8" }
                  : { color: "#F87E7E" }
            }
            className="status"
          >
            {AppointmentData.status}
          </h3>
        </div>
        <button onClick={handleViewAppointment}>View Appointment</button>
      </div>
    </div>
  );
};

export default DashboardAppointmentCard;
