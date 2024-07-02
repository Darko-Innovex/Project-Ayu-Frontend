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
                  <div className="MediCardSectionTitle">
                    <h1>Medical Reports</h1>
                    <button>
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
                    <DashboardMediCard />
                    <DashboardMediCard />
                    <DashboardMediCard />
                  </div>
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
