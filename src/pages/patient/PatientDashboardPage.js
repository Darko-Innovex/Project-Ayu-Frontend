import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import "../../css/PatientDashboardPage.css";
import Navbar from "../component/dashboard/Navbar";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";
import DashboardMediCard from "../component/dashboard/DashboardMediCard";

const PatientDashboardPage = () => {
  const Components = [
    HomeButton,
    AppointmentButton,
    ReportButton,
    ReviewButton,
  ];
  const Paths = ["/PatientDashboard", "/", "/PatientMedicalReport", "/"];

  return (
    <div>
      <div id="PatientDashboard">
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
                <div>
                  <DashboardMediCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardPage;
