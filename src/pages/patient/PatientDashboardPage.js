import "../../css/PatientDashboardPage.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";
import DashboardMediCard from "../component/dashboard/DashboardMediCard";
import DashboardAppointmentCard from "../component/dashboard/DashboardAppointmentCard";
import DashboardUserDetailsCard from "../component/dashboard/DashboardUserDetailsCard";
import NotificationPanel from "../component/dashboard/NotificationPanel";
import { useState, useEffect } from "react";
import DashboardFilter from "../component/dashboard/DashboardFilter";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViewAppointment from "../component/PatientAppointment/ViewAppointment";

const PatientDashboardPage = () => {
  const [notificationPanel, setNotificationPanel] = useState(false);
  const [filterPanel, setFilterPanel] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const [patientData, setPatientData] = useState(null);
  const navigate = useNavigate();
  const { userId } = useParams();
  const [viewAppointment, setViewAppointment] = useState(false);
  const [data, setData] = useState(null);

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

  const handleViewAppointment = (data) => {
    if (data.doctor) {
      setData({
        AppointmentId: data.id,
        Status: data.status,
        Hospital: data.hospitalId,
        AppointmentNumber: data.appointmentNo,
        DoctorName: data.doctor.name,
        DoctorSpeciality: data.doctor.speciality,
        Date: getDate(data.timestamp),
        Time: getTime(data.timestamp),
      });
    } else {
      setData({
        AppointmentId: data.id,
        Status: data.status,
        Hospital: data.hospitalId,
        AppointmentNumber: data.appointmentNo,
        DoctorName: "Unknown",
        DoctorSpeciality: "Unknown",
        Date: getDate(data.timestamp),
        Time: getTime(data.timestamp),
      });
    }
    setViewAppointment(!viewAppointment);
  };

  const Components = [HomeButton, AppointmentButton, ReportButton];

  const Paths = [
    `/PatientDashboard/${userId}`,
    `/PatientAppointment/${userId}`,
    `/PatientMedicalReport/${userId}`,
  ];

  const showNotificationPanel = () => {
    setNotificationPanel(true);
  };

  const hideNotificationPanel = () => {
    setNotificationPanel(false);
  };

  const showAndHideFilterPanel = () => {
    setFilterPanel(!filterPanel);
  };

  const navigateToMedicalPage = () => {
    navigate(`/PatientMedicalReport/${userId}`);
  };

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const navigateToPatientAppointmentPage = () => {
    navigate(`/PatientAppointment/${userId}`);
  };

  useEffect(() => {
    const fetchAppointmentData = async () => {
      const userData = {
        page: 1,
        count: 3,
      };

      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${userId}/appointment`,
          { params: userData },
        );

        if (response.status === 200) {
          const appointments = response.data;

          // Fetch doctor data for each appointment
          const appointmentsWithDoctorData = await Promise.all(
            appointments.map(async (appointment) => {
              const doctorResponse = await axios.get(
                `http://localhost:8080/doctor/${appointment.doctorId}`,
              );
              return {
                ...appointment,
                doctor: doctorResponse.data,
              };
            }),
          );

          setAppointmentData(appointmentsWithDoctorData);
        } else {
          console.error("Failed to fetch appointments:", response.status);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const fetchPatientData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${userId}`,
        );
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchAppointmentData();
    fetchPatientData();
  }, [userId]);

  return (
    <div>
      <div id="PatientDashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>

        {viewAppointment && (
          <ViewAppointment
            AppointmentData={data}
            HideAppointment={handleViewAppointment}
          />
        )}

        {notificationPanel && (
          <NotificationPanel hideNotification={hideNotificationPanel} />
        )}

        {filterPanel && (
          <DashboardFilter closeFilter={showAndHideFilterPanel} />
        )}

        <div className="container">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
          <div className="contend">
            <DashboardHeader showNotification={showNotificationPanel} />
            <div>
              <div>
                <SearchLine
                  type={"patient"}
                  id={userId}
                  showFilter={showAndHideFilterPanel}
                />
                <div>
                  <div className="MediCardSectionTitle">
                    <h1>Medical Reports</h1>
                    <button onClick={navigateToMedicalPage}>
                      View All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="14"
                        viewBox="0 0 21 14"
                        fill="none"
                      >
                        <path
                          d="M20.6364 7.6364C20.9879 7.28492 20.9879 6.71508 20.6364 6.3636L14.9088 0.636039C14.5574 0.284567 13.9875 0.284567 13.636 0.636039C13.2846 0.987511 13.2846 1.55736 13.636 1.90883L18.7272 7L13.636 12.0912C13.2846 12.4426 13.2846 13.0125 13.636 13.364C13.9875 13.7154 14.5574 13.7154 14.9088 13.364L20.6364 7.6364ZM0 7.9H20V6.1H0V7.9Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="MediCardList">
                    <DashboardMediCard reportId={1} />
                    <DashboardMediCard />
                    <DashboardMediCard />
                  </div>
                  <h1 className="AppointmentCardTitle">Appointments</h1>
                  <div className="AppointmentCardList">
                    <div>
                      {appointmentData.map((appointment, index) => (
                        <DashboardAppointmentCard
                          key={index}
                          AppointmentData={appointment}
                          DoctorData={appointment.doctor}
                          handelAppointment={handleViewAppointment}
                        />
                      ))}
                    </div>
                    <div
                      className="viewMore"
                      onClick={navigateToPatientAppointmentPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="79"
                          height="79"
                          rx="39.5"
                          fill="white"
                          fill-opacity="0.6"
                          stroke="#E5E5E5"
                        />
                        <path
                          d="M33.449 54.1162C34.0477 54.7346 35.0183 54.7346 35.617 54.1162L45.803 43.594C47.5986 41.7391 47.599 38.7322 45.8042 36.8766L35.7319 26.4638C35.1332 25.8454 34.1626 25.8454 33.5639 26.4638C32.9652 27.0823 32.9652 28.0849 33.5639 28.7034L43.6388 39.1108C44.2376 39.7294 44.2376 40.7319 43.6388 41.3503L33.449 51.8765C32.8503 52.4951 32.8503 53.4977 33.449 54.1162Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideCard">
                <DashboardUserDetailsCard type={"Patient"} Data={patientData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardPage;
