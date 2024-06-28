import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import HospitalsButton from "../component/dashboard/button/HospitalsButton";
import HealthCardButton from "../component/dashboard/button/HealthCardButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";

const AdminDashboardPage = () => {
  const Components = [
    HomeButton,
    PatientsButton,
    HospitalsButton,
    HealthCardButton,
  ];

  const Paths = [
    "/AdminDashboard",
    "/AdminSignIn",
    "/AdminSignIn",
    "/AdminSignIn",
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

export default AdminDashboardPage;
