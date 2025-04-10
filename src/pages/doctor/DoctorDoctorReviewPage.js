import Navbar from "../component/dashboard/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import HomeButton from "../component/dashboard/button/HomeButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import "../../css/DoctorDoctorReviewPage.css";
import { useState } from "react";
import DoctorDoctorReviewCard from "../component/DoctorReview/DoctorDoctorReviewCard";

const DoctorDoctorReviewPage = () => {
  const navigate = useNavigate(null);
  const [pressButton, setPressButton] = useState("All");
  const Components = [HomeButton, ScanButton];
  const { doctorId } = useParams();

  const Paths = [
    `/DoctorDashboard/${doctorId}`,
    `/DoctorPatientNfcCardScanPage/${doctorId}`,
  ];

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const handlePressButton = (pressButton) => {
    setPressButton(pressButton);
  };

  return (
    <div>
      <div id="dashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        <div className="container DoctorDoctorReview">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
            onPress={handlePressButton}
          />
          <div className="contend">
            <div className="title">
              <h1>Doctor Reviews</h1>
              <div className="buttons">
                <button
                  className={pressButton === "All" ? "active" : ""}
                  onClick={() => handlePressButton("All")}
                >
                  All
                </button>
                <button
                  className={pressButton === "Unread" ? "active" : ""}
                  onClick={() => handlePressButton("Unread")}
                >
                  Unread
                </button>
                <button
                  className={pressButton === "Read" ? "active" : ""}
                  onClick={() => handlePressButton("Read")}
                >
                  Read
                </button>
              </div>
            </div>
            <div className="ReviewCardSet">
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
              <DoctorDoctorReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDoctorReviewPage;
