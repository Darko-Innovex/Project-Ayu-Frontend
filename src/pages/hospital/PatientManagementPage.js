import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import DoctorsButton from "../component/dashboard/button/DoctorsButton";
import { useNavigate } from "react-router-dom";
import "../../css/HospitalPatientManagementPage.css";
import HospitalAddPatient from "../component/HospitalPatientManage/HospitalAddPatient";
import { useState } from "react";
import HospitalPatientManagementFilter from "../component/HospitalPatientManage/HospitalPatientManagementFilter";
import ScheduleButton from "../component/dashboard/button/ScheduleButton";
import ReportButton from "../component/dashboard/button/ReportButton";

const PatientManagementPage = () => {
  const navigate = useNavigate(null);
  const [addPatient, setAddPatient] = useState(false);
  const [filter, setFilter] = useState(false);

  const Components = [
    HomeButton,
    PatientsButton,
    AppointmentButton,
    DoctorsButton,
    ScheduleButton,
    ReportButton,
  ];

  const Paths = [
    "/HospitalDashboard",
    "/HospitalPatientManagement",
    "/HospitalAppointmentManagementPage",
    "/HospitalDoctorManagement",
    "/HospitalSchedule",
    "/HospitalLabReport",
  ];

  const logOutBtnOnAction = () => {
    navigate("/HospitalSignIn");
  };

  const handelAddPatient = () => {
    setAddPatient(!addPatient);
  };

  const handelFilter = () => {
    setFilter(!filter);
  };

  const dataSet = [
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
    {
      Id: "P001",
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 2002209805286,
      IndexNumber: "1682 8512 6254 8563",
      Date: "2024 / 05 / 10",
      Time: "10 : 20",
    },
  ];

  return (
    <div>
      <div id="dashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        {addPatient && <HospitalAddPatient BackOnAction={handelAddPatient} />}
        {filter && (
          <HospitalPatientManagementFilter closeFilter={handelFilter} />
        )}
        <div className="container">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
          <div className="contend hospitalPatientManagement">
            <h1>Patient Management</h1>
            <div className="searchSection">
              <div>
                <div>
                  <input
                    style={{ margin: "0px" }}
                    type="text"
                    placeholder={"Search"}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                      fill="#7E7E7E"
                    />
                  </svg>
                </div>
                <svg
                  onClick={handelFilter}
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="52"
                    height="52"
                    rx="26"
                    fill="white"
                    stroke="#D7D7D7"
                  />
                  <path
                    d="M18.5626 17.0757L18.6331 17.1463L18.5626 17.0757C18.4499 17.1882 18.3865 17.3408 18.3865 17.5L18.3865 20.9621C17.6998 21.1015 17.0795 21.469 16.6276 22.006C16.1576 22.5645 15.9 23.2705 15.9 24C15.9 24.7295 16.1576 25.4355 16.6276 25.994C17.0795 26.531 17.6998 26.8985 18.3865 27.0379L18.3865 37.5C18.3865 37.6592 18.4499 37.8118 18.5626 37.9243C18.6753 38.0368 18.8281 38.1 18.9874 38.1C19.1467 38.1 19.2995 38.0368 19.4122 37.9243C19.5249 37.8118 19.5882 37.6592 19.5882 37.5L19.5882 27.0379C20.275 26.8985 20.8953 26.531 21.3471 25.994C21.8171 25.4355 22.0747 24.7295 22.0747 24C22.0747 23.2705 21.8171 22.5645 21.3471 22.006C20.8953 21.469 20.275 21.1015 19.5882 20.9621L19.5882 17.5C19.5882 17.3408 19.5249 17.1882 19.4122 17.0757C19.2995 16.9632 19.1467 16.9 18.9874 16.9C18.8281 16.9 18.6753 16.9632 18.5626 17.0757ZM33.4118 17.5L33.4118 20.9621C32.725 21.1015 32.1047 21.469 31.6529 22.006C31.1829 22.5645 30.9253 23.2705 30.9253 24C30.9253 24.7295 31.1829 25.4355 31.6529 25.994C32.1047 26.531 32.725 26.8985 33.4118 27.0379L33.4118 37.5C33.4118 37.6592 33.4751 37.8118 33.5878 37.9243C33.7005 38.0368 33.8533 38.1 34.0126 38.1C34.1719 38.1 34.3247 38.0368 34.4374 37.9243C34.5501 37.8118 34.6135 37.6592 34.6135 37.5L34.6135 27.0379C35.3002 26.8985 35.9205 26.531 36.3724 25.994C36.8423 25.4355 37.1 24.7295 37.1 24C37.1 23.2705 36.8423 22.5645 36.3724 22.006C35.9205 21.469 35.3002 21.1015 34.6135 20.9621L34.6135 17.5C34.6135 17.3408 34.5501 17.1882 34.4374 17.0757C34.3247 16.9632 34.1719 16.9 34.0126 16.9C33.8533 16.9 33.7005 16.9632 33.5878 17.0757C33.4751 17.1882 33.4118 17.3408 33.4118 17.5ZM35.916 24C35.916 24.3757 35.8044 24.7431 35.5953 25.0555C35.3861 25.368 35.0889 25.6115 34.7411 25.7553C34.3933 25.8992 34.0105 25.9368 33.6413 25.8635C33.272 25.7902 32.9329 25.6092 32.6667 25.3434C32.4005 25.0777 32.2193 24.7392 32.1458 24.3706C32.0724 24.0021 32.1101 23.6201 32.2541 23.273C32.3982 22.9258 32.6421 22.629 32.9551 22.4203C33.2681 22.2115 33.6361 22.1 34.0126 22.1C34.5175 22.1 35.0016 22.3002 35.3586 22.6566C35.7155 23.0129 35.916 23.4961 35.916 24ZM27.1008 37.5L27.1008 34.0379C27.7876 33.8985 28.4079 33.531 28.8598 32.994C29.3297 32.4355 29.5874 31.7295 29.5874 31C29.5874 30.2705 29.3297 29.5645 28.8598 29.006C28.4079 28.469 27.7876 28.1015 27.1008 27.9621L27.1008 17.5C27.1008 17.3408 27.0375 17.1882 26.9248 17.0757C26.8121 16.9632 26.6593 16.9 26.5 16.9C26.3407 16.9 26.1879 16.9632 26.0752 17.0757C25.9625 17.1882 25.8992 17.3408 25.8992 17.5L25.8992 27.9621C25.2124 28.1015 24.5921 28.469 24.1402 29.006C23.6703 29.5645 23.4126 30.2705 23.4126 31C23.4126 31.7295 23.6703 32.4355 24.1402 32.994C24.5921 33.531 25.2124 33.8985 25.8992 34.0379L25.8992 37.5C25.8992 37.6592 25.9625 37.8118 26.0752 37.9243C26.1879 38.0368 26.3407 38.1 26.5 38.1C26.6593 38.1 26.8121 38.0368 26.9248 37.9243C27.0375 37.8118 27.1008 37.6592 27.1008 37.5ZM24.5966 31C24.5966 30.6243 24.7082 30.2569 24.9174 29.9445C25.1265 29.632 25.4237 29.3885 25.7716 29.2447C26.1194 29.1008 26.5021 29.0632 26.8714 29.1365C27.2406 29.2098 27.5798 29.3908 27.8459 29.6566C28.1121 29.9223 28.2934 30.2608 28.3668 30.6294C28.4402 30.9979 28.4025 31.3799 28.2585 31.727C28.1145 32.0742 27.8705 32.371 27.5575 32.5797C27.2445 32.7885 26.8765 32.9 26.5 32.9C25.9951 32.9 25.511 32.6998 25.1541 32.3434C24.7971 31.9871 24.5966 31.5039 24.5966 31ZM17.084 24C17.084 23.6243 17.1956 23.2569 17.4047 22.9445C17.6138 22.632 17.9111 22.3885 18.2589 22.2447C18.6067 22.1008 18.9895 22.0632 19.3587 22.1365C19.728 22.2098 20.0671 22.3908 20.3333 22.6566C20.5995 22.9223 20.7807 23.2608 20.8542 23.6294C20.9276 23.9979 20.8899 24.3799 20.7459 24.727C20.6018 25.0742 20.3579 25.371 20.0449 25.5797C19.7319 25.7885 19.3638 25.9 18.9874 25.9C18.4825 25.9 17.9984 25.6998 17.6414 25.3434C17.2845 24.9871 17.084 24.5039 17.084 24Z"
                    fill="black"
                    stroke="#262626"
                    stroke-width="0.2"
                  />
                </svg>
              </div>
              <button onClick={handelAddPatient}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M13.4993 25.204C7.08164 25.204 1.86133 19.9837 1.86133 13.5661C1.86133 7.14847 7.08164 1.92816 13.4993 1.92816C19.9169 1.92816 25.1372 7.14847 25.1372 13.5661C25.1372 19.9837 19.9169 25.204 13.4993 25.204ZM13.4993 3.79023C8.10857 3.79023 3.7234 8.1754 3.7234 13.5661C3.7234 18.9568 8.10857 23.342 13.4993 23.342C18.8899 23.342 23.2751 18.9559 23.2751 13.5661C23.2751 8.17633 18.8899 3.79023 13.4993 3.79023Z"
                    fill="white"
                  />
                  <path
                    d="M13.4994 20.0833C13.2525 20.0833 13.0157 19.9853 12.8411 19.8106C12.6665 19.636 12.5684 19.3992 12.5684 19.1523V7.97989C12.5684 7.73297 12.6665 7.49615 12.8411 7.32155C13.0157 7.14695 13.2525 7.04886 13.4994 7.04886C13.7463 7.04886 13.9831 7.14695 14.1577 7.32155C14.3323 7.49615 14.4304 7.73297 14.4304 7.97989V19.1523C14.4304 19.3992 14.3323 19.636 14.1577 19.8106C13.9831 19.9853 13.7463 20.0833 13.4994 20.0833Z"
                    fill="white"
                  />
                  <path
                    d="M19.0859 14.4971H7.91346C7.66653 14.4971 7.42972 14.399 7.25512 14.2244C7.08051 14.0498 6.98242 13.813 6.98242 13.5661C6.98242 13.3192 7.08051 13.0824 7.25512 12.9078C7.42972 12.7332 7.66653 12.6351 7.91346 12.6351H19.0859C19.3328 12.6351 19.5696 12.7332 19.7442 12.9078C19.9188 13.0824 20.0169 13.3192 20.0169 13.5661C20.0169 13.813 19.9188 14.0498 19.7442 14.2244C19.5696 14.399 19.3328 14.4971 19.0859 14.4971Z"
                    fill="white"
                  />
                </svg>
                Add Patient
              </button>
            </div>
            <div className="tableHead">
              <input type="checkbox" />
              <h1 className="id">ID</h1>
              <h1 className="Name">Name</h1>
              <h1 className="NIC">NIC</h1>
              <h1 className="indexNo">Index No</h1>
              <h1 className="Date">Date</h1>
              <h1 className="Time">Time</h1>
            </div>
            <div className="tableBody">{setRows(dataSet)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const setRows = (dataSet) => {
  const rowSet = [];
  for (let i = 0; i < dataSet.length; i++) {
    rowSet.push(
      <div>
        <input type="checkbox" />
        <h1 className="id">{dataSet[i].Id}</h1>
        <h1 className="Name">{dataSet[i].Name}</h1>
        <h1 className="NIC">{dataSet[i].NIC}</h1>
        <h1 className="indexNo">{dataSet[i].IndexNumber}</h1>
        <h1 className="Date">{dataSet[i].Date}</h1>
        <h1 className="Time">{dataSet[i].Time}</h1>
      </div>,
    );
  }
  return rowSet;
};

export default PatientManagementPage;
