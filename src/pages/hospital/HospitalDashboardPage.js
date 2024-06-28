import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import DoctorsButton from "../component/dashboard/button/DoctorsButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";

const HospitalDashboardPage = () => {
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

  return (
    <div>
      <div id="dashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <Navbar components={Components} Paths={Paths} />
          <div className="contend">
            <DashboardHeader />
            <div>
              <div>
                <SearchLine />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardPage;
