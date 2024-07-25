import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import DoctorsButton from "../component/dashboard/button/DoctorsButton";
import ScheduleButton from "../component/dashboard/button/ScheduleButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";
import BarChart from "../component/dashboard/DoctorDashboardBarChart";
import "../../css/HospitalDashboard.css";
import DoctorDashboardOldPatientCard from "../component/dashboard/DoctorDashboardOldPatientCard";
import HospitalOurDoctorCard from "../component/HospitalOurDoctorCard";
import DashboardUserDetailsCard from "../component/dashboard/DashboardUserDetailsCard";
import NotificationPanel from "../component/dashboard/NotificationPanel";
import { useEffect, useState } from "react";
import HospitalDashboardFilter from "../component/dashboard/HospitalDashboardFilter";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/PatientAppointment.css";
import axios from "axios";
import HospitalDoctorView from "../component/HospitalDoctorManage/HospitalDoctorView";

const HospitalDashboardPage = () => {
  const [notificationPanel, setNotificationPanel] = useState(false);
  const [HospitalFilter, setHospitalFilter] = useState(false);
  const navigate = useNavigate(null);
  const { hospitalId } = useParams();
  const [hospitalData, setHospitalData] = useState(null);
  const [doctorData, setDoctorData] = useState([]);
  const [doctorCount, setDoctorCount] = useState(0);
  const [viewDoctor, setViewDoctor] = useState(false);
  const [currentDoctorData, setCurrentDoctorData] = useState(null);

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
    ScheduleButton,
  ];

  const Paths = [
    "/HospitalDashboard",
    "/HospitalPatientManagement",
    "/HospitalAppointmentManagementPage",
    "/HospitalDoctorManagement",
    "/HospitalSchedule",
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

  const handleViewDoctor = (data) => {
    setCurrentDoctorData(data);
    setViewDoctor(!viewDoctor);
  };

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hospital/${hospitalId}`,
        );
        setHospitalData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const getFirstTreeDoctor = async () => {
      const sendData = {
        page: 0,
        count: 3,
      };
      try {
        const response = await axios.get(
          `http://localhost:8080/hospital/${hospitalId}/doctor`,
          { params: sendData },
        );
        setDoctorData(response.data);
        console.log(response.data, "----------------------------------Loukika");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const getHospitalDoctorCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hospital/dashboard_data/${hospitalId}/doctor`,
        );
        console.log(
          response.data.doctorCount,
          "----------------------------------doctor count",
        );
        setDoctorCount(response.data.doctorCount);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchHospitalData().then((r) => console.log(r));
    getFirstTreeDoctor().then((r) => console.log(r));
    getHospitalDoctorCount().then((r) => console.log(r));
  }, [hospitalId]);

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
        {viewDoctor && (
          <HospitalDoctorView
            closeBtn={handleViewDoctor}
            doctorData={currentDoctorData}
          />
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
                <SearchLine
                  type={"Hospital"}
                  id={hospitalId}
                  showFilter={showAndHideFilterPanel}
                />
                <div></div>
                <div>
                  <h1 className="title">Monthly Patients</h1>
                  <div className="chart">
                    <BarChart hospitalId={hospitalId} />
                  </div>
                  <h1 className="title">Our Doctor</h1>
                  <div className="ourDoctorCardSet">
                    {/*<HospitalOurDoctorCard data={""} />*/}
                    {/*<HospitalOurDoctorCard data={""} />*/}
                    {/*<HospitalOurDoctorCard data={""} />*/}

                    {doctorData.map((doctor) => (
                      <HospitalOurDoctorCard
                        data={doctor}
                        handelViewDoctor={handleViewDoctor}
                      />
                    ))}

                    <div className="moreBtn">
                      <div>{doctorCount - 3}+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar">
                <DashboardUserDetailsCard
                  Data={hospitalData}
                  type={"Hospital"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardPage;
