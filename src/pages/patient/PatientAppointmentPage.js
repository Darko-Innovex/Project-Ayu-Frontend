import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import { useNavigate, useParams } from "react-router-dom";
import "../../../src/css/PatientAppointment.css";
import "../../css/TableSlide.css";
import { useEffect, useState } from "react";
import PatientAppointmentFilter from "../component/PatientAppointment/PatientAppointmentFilter";
import AddAppointment from "../../pages/component/PatientAppointment/AddAppointment";
import ViewAppointment from "../component/PatientAppointment/ViewAppointment";
import CancelAppointment from "../component/PatientAppointment/CancelAppointment";
import axios from "axios";

const PatientAppointmentPage = () => {
  const navigate = useNavigate(null);
  const [Filter, setFilter] = useState(false);
  const [addAppointment, setAppointment] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const [viewAppointment, setViewAppointment] = useState(false);
  const [cancelAppointment, setCancelAppointment] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [page, setPage] = useState(0);
  const [rowSet, setRows] = useState([]);
  const { userId } = useParams();

  const Components = [HomeButton, AppointmentButton, ReportButton];

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const Paths = [
    `/PatientDashboard/${userId}`,
    `/PatientAppointment/${userId}`,
    `/PatientMedicalReport/${userId}`,
  ];

  const handleFilter = () => {
    setFilter(!Filter);
  };

  const handleAppointment = () => {
    setAppointment(!addAppointment);
  };

  const handleViewAppointment = (appointmentData) => {
    setAppointmentData(appointmentData);
    setViewAppointment(!viewAppointment);
  };

  const handleCancelAppointment = (appointmentData) => {
    setAppointmentData(appointmentData);
    setCancelAppointment(!cancelAppointment);
  };

  const reloadTable = () => {
    getData();
  };

  function getDate(timeStamp) {
    let date = new Date(timeStamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year} / ${month} / ${day}`;
  }

  const getTime = (timeStamp) => {
    if (timeStamp) {
      let date = new Date(timeStamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${hours} : ${minutes} : ${seconds}`;
    }
    return "";
  };

  useEffect(() => {
    getData();
  }, [page, userId]);

  const getData = async () => {
    const userData = {
      page: page,
      count: 8,
    };

    try {
      const response = await axios.get(
        `http://localhost:8080/patient/${userId}/appointment`,
        { params: userData },
      );
      const appointments = response.data;
      setRows([]);
      setDataSet([]);

      const appointmentPromises = appointments.map(async (appointment) => {
        try {
          const [hospitalResponse, doctorResponse] = await Promise.all([
            axios.get(
              `http://localhost:8080/hospital/${appointment.hospitalId}`,
            ),
            axios.get(`http://localhost:8080/doctor/${appointment.doctorId}`),
          ]);
          const date = getDate(appointment.timestamp);
          const time = getTime(appointment.timestamp);
          return {
            AppointmentId: appointment.id,
            AppointmentNumber: appointment.appointmentNo,
            DoctorName: doctorResponse.data.name,
            DoctorSpeciality: doctorResponse.data.speciality,
            Hospital: hospitalResponse.data.name,
            Date: date,
            Time: time,
            Status: appointment.status,
          };
        } catch (err) {
          console.error(
            `Error fetching hospital or doctor data for appointment ${appointment.id}:`,
            err,
          );
          return null;
        }
      });

      const appointmentData = await Promise.all(appointmentPromises);
      setDataSet(appointmentData.filter((data) => data !== null));
    } catch (err) {
      console.error("Error fetching appointment data:", err);
    }
  };

  return (
    <div>
      <div id="PatientDashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        {Filter && <PatientAppointmentFilter closeFilter={handleFilter} />}
        {addAppointment && (
          <AddAppointment
            hideAppointment={handleAppointment}
            patientId={userId}
            reloadTable={reloadTable}
          />
        )}
        {viewAppointment && (
          <ViewAppointment
            HideAppointment={handleViewAppointment}
            AppointmentData={appointmentData}
          />
        )}
        {cancelAppointment && (
          <CancelAppointment
            AppointmentId={appointmentData.AppointmentId}
            cancel={handleCancelAppointment}
            reloadTable={reloadTable}
          />
        )}

        <div className="container">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
        </div>
        <div className="PatientAppointmentContend">
          <h1 className="title">Appointments</h1>
          <div>
            <div>
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
              <input type="text" placeholder="Search" />
              <svg
                onClick={handleFilter}
                className="filter"
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
            <button onClick={handleAppointment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 25.2041C7.08237 25.2041 1.86206 19.9838 1.86206 13.5662C1.86206 7.14853 7.08237 1.92822 13.5 1.92822C19.9176 1.92822 25.1379 7.14853 25.1379 13.5662C25.1379 19.9838 19.9176 25.2041 13.5 25.2041ZM13.5 3.79029C8.1093 3.79029 3.72413 8.17546 3.72413 13.5662C3.72413 18.9568 8.1093 23.342 13.5 23.342C18.8907 23.342 23.2759 18.9559 23.2759 13.5662C23.2759 8.1764 18.8907 3.79029 13.5 3.79029Z"
                  fill="white"
                />
                <path
                  d="M13.4999 20.0833C13.253 20.0833 13.0161 19.9852 12.8415 19.8106C12.6669 19.636 12.5688 19.3992 12.5688 19.1523V7.97986C12.5688 7.73294 12.6669 7.49612 12.8415 7.32152C13.0161 7.14692 13.253 7.04883 13.4999 7.04883C13.7468 7.04883 13.9836 7.14692 14.1582 7.32152C14.3328 7.49612 14.4309 7.73294 14.4309 7.97986V19.1523C14.4309 19.3992 14.3328 19.636 14.1582 19.8106C13.9836 19.9852 13.7468 20.0833 13.4999 20.0833Z"
                  fill="white"
                />
                <path
                  d="M19.0861 14.4971H7.9137C7.66677 14.4971 7.42996 14.399 7.25536 14.2244C7.08076 14.0498 6.98267 13.813 6.98267 13.566C6.98267 13.3191 7.08076 13.0823 7.25536 12.9077C7.42996 12.7331 7.66677 12.635 7.9137 12.635H19.0861C19.333 12.635 19.5699 12.7331 19.7445 12.9077C19.9191 13.0823 20.0171 13.3191 20.0171 13.566C20.0171 13.813 19.9191 14.0498 19.7445 14.2244C19.5699 14.399 19.333 14.4971 19.0861 14.4971Z"
                  fill="white"
                />
              </svg>
              Add Appointment
            </button>
          </div>
          <div className="tableHead">
            <h1 className="appointmentNm">Appointment No</h1>
            <h1 className="doctorName">Doctor Name</h1>
            <h1 className="hospital">Hospital</h1>
            <h1 className="date">Date</h1>
            <h1 className="status">Status</h1>
            <h1 className="action">Action</h1>
          </div>
          <div className="tableBody">
            {dataSet.map((appointment) => (
              <div>
                <h1 className="appointmentNm">
                  {appointment.AppointmentNumber}
                </h1>
                <h1 className="doctorName">{appointment.DoctorName}</h1>
                <h1 className="hospital">{appointment.Hospital}</h1>
                <h1 className="date">{appointment.Date}</h1>
                <h1
                  style={
                    appointment.Status === "Completed"
                      ? { color: "#499A51" }
                      : appointment.Status === "Pending"
                        ? { color: "#7E83F8" }
                        : { color: "#F87E7E" }
                  }
                  className="status"
                >
                  {appointment.Status}
                </h1>
                <div className="action">
                  {appointment.Status === "Pending" ? (
                    <button
                      onClick={() => handleCancelAppointment(appointment)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M12.966 2.08028C12.7219 1.8362 12.3262 1.8362 12.0821 2.08028L7.52313 6.63927L2.96416 2.08028C2.72008 1.8362 2.32435 1.8362 2.08028 2.08028C1.8362 2.32435 1.8362 2.72008 2.08028 2.96416L6.63925 7.52315L2.08029 12.0821C1.83621 12.3262 1.83621 12.7219 2.08029 12.966C2.32437 13.2101 2.7201 13.2101 2.96417 12.966L7.52313 8.40702L12.0821 12.966C12.3262 13.2101 12.7219 13.2101 12.966 12.966C13.2101 12.7219 13.2101 12.3262 12.966 12.0821L8.407 7.52315L12.966 2.96416C13.2101 2.72008 13.2101 2.32435 12.966 2.08028Z"
                          fill="#9A9A9A"
                        />
                      </svg>
                    </button>
                  ) : (
                    ""
                  )}
                  <button onClick={() => handleViewAppointment(appointment)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <path
                        d="M10 0C16.25 0 20 7 20 7C20 7 16.25 14 10 14C3.75 14 0 7 0 7C0 7 3.75 0 10 0ZM10 1.27273C5.6 1.27273 2.4975 5.41036 1.46875 7C2.49625 8.58836 5.59875 12.7273 10 12.7273C14.4 12.7273 17.5025 8.58964 18.5312 7C17.5037 5.41164 14.4012 1.27273 10 1.27273ZM10 2.54545C11.1603 2.54545 12.2731 3.01477 13.0936 3.85016C13.9141 4.68555 14.375 5.81858 14.375 7C14.375 8.18142 13.9141 9.31445 13.0936 10.1498C12.2731 10.9852 11.1603 11.4545 10 11.4545C8.83968 11.4545 7.72688 10.9852 6.90641 10.1498C6.08594 9.31445 5.625 8.18142 5.625 7C5.625 5.81858 6.08594 4.68555 6.90641 3.85016C7.72688 3.01477 8.83968 2.54545 10 2.54545ZM10 3.81818C9.1715 3.81918 8.37721 4.15473 7.79138 4.75122C7.20554 5.34771 6.87598 6.15644 6.875 7C6.875 8.75382 8.27625 10.1818 10 10.1818C11.7238 10.1818 13.125 8.75382 13.125 7C13.125 5.24618 11.7238 3.81818 10 3.81818Z"
                        fill="#9A9A9A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div id="btn_slide">
              <button
                onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="29"
                  viewBox="0 0 15 29"
                  fill="none"
                >
                  <path
                    d="M13.7014 0.463783C13.1027 -0.154612 12.1321 -0.154612 11.5334 0.463783L1.34742 10.986C-0.448186 12.8409 -0.448645 15.8478 1.3462 17.7034L11.4185 28.1162C12.0172 28.7346 12.9878 28.7346 13.5865 28.1162C14.1852 27.4977 14.1852 26.495 13.5865 25.8766L3.51157 15.4692C2.91278 14.8506 2.91278 13.848 3.51157 13.2297L13.7014 2.70347C14.3001 2.08491 14.3001 1.08234 13.7014 0.463783Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </button>

              <h3>{page + 1}</h3>

              <button
                onClick={() =>
                  setPage((prevPage) => {
                    return dataSet.length < 8 ? prevPage : prevPage + 1;
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="29"
                  viewBox="0 0 15 29"
                  fill="none"
                >
                  <path
                    d="M0.449002 28.1162C1.04769 28.7346 2.01832 28.7346 2.61701 28.1162L12.803 17.594C14.5986 15.7391 14.599 12.7322 12.8042 10.8766L2.73189 0.463832C2.13322 -0.154611 1.16257 -0.154611 0.563901 0.463832C-0.0347682 1.08226 -0.0347682 2.08495 0.563901 2.70337L10.6388 13.1108C11.2376 13.7294 11.2376 14.7319 10.6388 15.3503L0.449002 25.8765C-0.149667 26.4951 -0.149667 27.4976 0.449002 28.1162Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentPage;
