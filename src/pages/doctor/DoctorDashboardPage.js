import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";
import BarChart from "../component/dashboard/DoctorDashboardBarChart";
import "../../../src/css/DoctordashboardPage.css";
import DoctorDashboardOldPatientCard from "../component/dashboard/DoctorDashboardOldPatientCard";
import DashboardUserDetailsCard from "../component/dashboard/DashboardUserDetailsCard";
import Image from "../../../src/img/sideImage.png";
import NotificationPanel from "../component/dashboard/NotificationPanel";
import { useState } from "react";
import DashboardFilter from "../component/dashboard/DashboardFilter";
import DoctorDashboardFilter from "../component/dashboard/DoctorDashboardFilter";
import { useNavigate } from "react-router-dom";

const DoctorDashboardPage = () => {
  const Components = [HomeButton, ReviewButton, ScanButton];
  const [notificationPanel, setNotificationPanel] = useState(false);
  const [filterPanel, setFilterPanel] = useState(false);
  const navigate = useNavigate(null);

  const Paths = [
    "/DoctorDashboard",
    "/DoctorDoctorReviewPage",
    "/DoctorPatientNfcCardScanPage",
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

  const logOutBtnOnAction = () => {
    navigate("/DoctorSignIn");
  };

  let userData = {
    img: Image,
    Name: "Mr Ashen Madhushanka",
    NIC: 1540258493,
    Mobile: "076 234 0111",
    Email: "glamadushanka3@gmail.com",
    UserType: "Doctor",
    HospitalCount: 3,
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
        {filterPanel && (
          <DoctorDashboardFilter closeFilter={showAndHideFilterPanel} />
        )}
        <div className="container DoctorDashboardContainer">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
          <div className="contend">
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
                  <h1 className="title">Your Old Patients</h1>
                  <div className="oldPatientCardSet">
                    <DoctorDashboardOldPatientCard data={""} />
                    <DoctorDashboardOldPatientCard data={""} />
                    <DoctorDashboardOldPatientCard data={""} />
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

export default DoctorDashboardPage;
