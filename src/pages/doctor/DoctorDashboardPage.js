import "../../css/component/dashboard/DashboardBackground.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import DashboardHeader from "../component/dashboard/DashboardHeader";
import SearchLine from "../component/dashboard/SearchSection";

const DoctorDashboardPage = () => {
  const Components = [HomeButton, ReviewButton, ScanButton];
  const Paths = ["/DoctorDashboard", "/DoctorSignIn", "/DoctorSignIn"];

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

export default DoctorDashboardPage;
