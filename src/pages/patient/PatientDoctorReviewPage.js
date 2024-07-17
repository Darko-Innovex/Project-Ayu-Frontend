import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import { useNavigate, useParams } from "react-router-dom";
import PatientDoctorReviewCard from "../component/DoctorReview/PatientDoctorReviewCard";
import "../../css/PatientDoctorReview.css";
import PatientDoctorReviewBackground from "../component/DoctorReview/PatientDoctorReviewBackground";
import AddPatientDoctorReviewReview from "../component/DoctorReview/AddPatientDoctorReviewReview";
import { useState } from "react";
import AddPatientDoctorReviewPopup from "../component/DoctorReview/AddPatientDoctorReviewReview";
import ViewPatientReviewPopup from "../component/DoctorReview/ViewPatientReviewPopup";

const PatientDoctorReviewPage = () => {
  const navigate = useNavigate(null);
  const [addReview, setAddReview] = useState(false);
  const [viewReview, setViewReview] = useState(false);
  const [currentForcingPatient, setCurrentForcingPatient] = useState(null);
  const { userId } = useParams();

  const Components = [
    HomeButton,
    AppointmentButton,
    ReportButton,
    ReviewButton,
  ];

  const Paths = [
    `/PatientDashboard/${userId}`,
    `/PatientAppointment/${userId}`,
    `/PatientMedicalReport/${userId}`,
    `/PatientDoctorReviewPage/${userId}`,
  ];

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const data = {
    ReviewType: "addReview",
  };

  const data1 = {
    ReviewType: "viewReview",
  };

  const handleAddReviewPopup = (data) => {
    setCurrentForcingPatient(data);
    setAddReview(!addReview);
  };

  const handleViewReviewPopup = (data) => {
    setCurrentForcingPatient(data);
    setViewReview(!viewReview);
  };

  return (
    <div>
      <div>
        <div id="PatientDashboard">
          <div className="cir">
            <div></div>
            <div></div>
          </div>
          {addReview && (
            <AddPatientDoctorReviewPopup
              data={currentForcingPatient}
              backBtnAction={handleAddReviewPopup}
            />
          )}

          {viewReview && (
            <ViewPatientReviewPopup
              data={data1}
              backBtnAction={handleViewReviewPopup}
            />
          )}

          <div className="container">
            <Navbar
              components={Components}
              Paths={Paths}
              LogOut={logOutBtnOnAction}
            />
            <div className="contend PatientDoctorReviewPage">
              <h1>Doctor Review</h1>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                >
                  <path
                    d="M22.1861 16.29L18.1121 12.9C19.4265 11.5025 20.1398 9.77666 20.1371 8C20.1371 6.41775 19.5749 4.87103 18.5216 3.55544C17.4682 2.23985 15.9711 1.21447 14.2195 0.608967C12.4679 0.00346625 10.5405 -0.15496 8.68096 0.153721C6.82146 0.462403 5.1134 1.22433 3.77277 2.34315C2.43214 3.46197 1.51916 4.88743 1.14928 6.43928C0.779406 7.99113 0.969241 9.59966 1.69478 11.0615C2.42033 12.5233 3.64899 13.7727 5.2254 14.6518C6.80181 15.5308 8.65517 16 10.5511 16C12.68 16.0022 14.7479 15.407 16.4225 14.31L20.4846 17.71C20.596 17.8037 20.7285 17.8781 20.8745 17.9289C21.0206 17.9797 21.1772 18.0058 21.3354 18.0058C21.4935 18.0058 21.6502 17.9797 21.7962 17.9289C21.9422 17.8781 22.0747 17.8037 22.1861 17.71C22.2984 17.617 22.3876 17.5064 22.4484 17.3846C22.5092 17.2627 22.5406 17.132 22.5406 17C22.5406 16.868 22.5092 16.7373 22.4484 16.6154C22.3876 16.4936 22.2984 16.383 22.1861 16.29ZM3.36159 8C3.36159 6.81332 3.78325 5.65328 4.57324 4.66658C5.36324 3.67989 6.48608 2.91085 7.79979 2.45673C9.1135 2.0026 10.5591 1.88378 11.9537 2.11529C13.3483 2.3468 14.6294 2.91825 15.6348 3.75736C16.6403 4.59648 17.3251 5.66558 17.6025 6.82946C17.8799 7.99335 17.7375 9.19975 17.1933 10.2961C16.6492 11.3925 15.7277 12.3295 14.5454 12.9888C13.3631 13.6481 11.973 14 10.5511 14C8.64432 14 6.81564 13.3679 5.46735 12.2426C4.11906 11.1174 3.36159 9.5913 3.36159 8Z"
                    fill="#7E7E7E"
                  />
                </svg>
                <input type="text" placeholder="Search" />
              </div>
              <div className="cardSet">
                <PatientDoctorReviewCard
                  addReview={handleAddReviewPopup}
                  data={data}
                  viewReview={handleViewReviewPopup}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDoctorReviewPage;
