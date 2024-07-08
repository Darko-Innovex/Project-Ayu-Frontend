import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import { useNavigate } from "react-router-dom";
import PatientDoctorReviewCard from "../component/PatientDoctorReviewCard";

const PatientDoctorReviewPage = () => {
  const navigate = useNavigate(null);
  const Components = [
    HomeButton,
    AppointmentButton,
    ReportButton,
    ReviewButton,
  ];
  const Paths = [
    "/PatientDashboard",
    "/PatientAppointment",
    "/PatientMedicalReport",
    "/",
  ];

  const logOutBtnOnAction = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <div id="PatientDashboard">
          <div className="cir">
            <div></div>
            <div></div>
          </div>
          <div className="container">
            <Navbar
              components={Components}
              Paths={Paths}
              LogOut={logOutBtnOnAction}
            />
            <div className="contend PatientDoctorReviewPage">
              <PatientDoctorReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDoctorReviewPage;
