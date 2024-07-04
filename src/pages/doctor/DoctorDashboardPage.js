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

const DoctorDashboardPage = () => {
  const Components = [HomeButton, ReviewButton, ScanButton];
  const Paths = [
    "/DoctorDashboard",
    "/DoctorSignIn",
    "/DoctorPatientNfcCardScanPage",
  ];

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
        <div className="container DoctorDashboardContainer">
          <Navbar components={Components} Paths={Paths} />
          <div className="contend">
            <DashboardHeader />
            <div>
              <div>
                <SearchLine />
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
