import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import DoctorPatientDetailPage from "./DoctorPatientDetailPage";

const DoctorPatientNfcCardScanPage = () => {
  const Components = [HomeButton, ReviewButton, ScanButton];
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    scanNFC();
  }, []);

  const scanNFC = () => {};

  const Paths = [
    "/DoctorDashboard",
    "/DoctorSignIn",
    "/DoctorPatientNfcCardScanPage",
  ];

  // const [showPatientDetail, setShowPatientDetail] = useState(false);
  const navigate = useNavigate();

  const handleScanPatientCardClick = () => {
    navigate("/DoctorPatientDetailPage");

    // If you want to conditionally render the detail page
    // setShowPatientDetail(true);
  };

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
              <div onClick={handleScanPatientCardClick}>Scan Patient Card</div>
            </div>
            {/*{showPatientDetail && <DoctorPatientDetailPage />}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientNfcCardScanPage;
