import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import PatientReportViewButton from "../component/dashboard/button/PatientReportViewButton";

const DoctorPatientNfcCardScanPage = () => {
  const Components = [HomeButton, AppointmentButton, PatientReportViewButton];
  const Paths = ["/", "/", "/"];

  return (
    <div>
      <div id="DoctorDashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <Navbar components={Components} Paths={Paths} />
          <div className="nfcScan">
            <h1>Patient Details</h1>
            <div>
              <div>Scan Patient Card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientNfcCardScanPage;
