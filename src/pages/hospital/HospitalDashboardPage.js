import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import DoctorsButton from "../component/dashboard/button/DoctorsButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";
import BarChart from "../component/dashboard/DoctorDashboardBarChart";
import "../../css/HospitalDashboard.css";
import DoctorDashboardOldPatientCard from "../component/dashboard/DoctorDashboardOldPatientCard";
import HospitalOurDoctorCard from "../component/HospitalOurDoctorCard";
import DashboardUserDetailsCard from "../component/dashboard/DashboardUserDetailsCard";
import NotificationPanel from "../component/dashboard/NotificationPanel";
import { useState } from "react";
import HospitalDashboardFilter from "../component/dashboard/HospitalDashboardFilter";
import { useNavigate } from "react-router-dom";

const HospitalDashboardPage = () => {
  const [notificationPanel, setNotificationPanel] = useState(false);
  const [HospitalFilter, setHospitalFilter] = useState(false);
  const navigate = useNavigate(null);

  const userData = {
    Name: "Lanka Hospital Galle",
    LocationUrl: "https://maps.app.goo.gl/fvioT91DTvCtPMp18",
    Mobile: "011 543 0000",
    Email: "info@lankahospitals.com",
    WebsiteUrl: "https://www.lankahospitals.com/en/",
    UserType: "Hospital",
  };

  const Components = [
    HomeButton,
    PatientsButton,
    AppointmentButton,
    DoctorsButton,
  ];

  const Paths = [
    "/HospitalDashboard",
    "/HospitalSignIn",
    "/HospitalSignIn",
    "/HospitalSignIn",
  ];

  const showNotificationPanel = () => {
    setNotificationPanel(true);
  };

  const hideNotificationPanel = () => {
    setNotificationPanel(false);
  };

  const showAndHideFilterPanel = () => {
    setHospitalFilter(!HospitalFilter);
  };

  const logOutBtnOnAction = () => {
    navigate("/HospitalSignIn");
  };

  return (
    <div>
      <div id="dashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        {notificationPanel && (
          <NotificationPanel hideNotification={hideNotificationPanel} />
        )}
        {HospitalFilter && (
          <HospitalDashboardFilter CloseFilter={showAndHideFilterPanel} />
        )}
        <div className="container">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
          <div className="contend hospitalDashboard">
            <DashboardHeader showNotification={showNotificationPanel} />
            <div>
              <div>
                <SearchLine showFilter={showAndHideFilterPanel} />
                <div></div>
                <div>
                  <h1 className="title">Monthly Patients</h1>
                  <div className="chart">
                    <BarChart />
                  </div>
                  <h1 className="title">Our Doctor</h1>
                  <div className="ourDoctorCardSet">
                    <HospitalOurDoctorCard data={""} />
                    <HospitalOurDoctorCard data={""} />
                    <HospitalOurDoctorCard data={""} />
                    <div className="moreBtn">
                      <div>20+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar">
                <DashboardUserDetailsCard userData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardPage;
