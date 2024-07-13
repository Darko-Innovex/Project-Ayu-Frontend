import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import HospitalsButton from "../component/dashboard/button/HospitalsButton";
import HealthCardButton from "../component/dashboard/button/HealthCardButton";
import "../../../src/css/AddHospital.css";
import HospitalReviewCard from "../component/Admin/HospitalReviewCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminHospitalManagePage = () => {
  const navigate = useNavigate(null);
  const [addReview, setAddReview] = useState(false);
  const [viewReview, setViewReview] = useState(false);
  const [updateReview, setUpdateReview] = useState(false);
  const [currentForcingPatient, setCurrentForcingPatient] = useState(null);
  const [addAppointment, setAppointment] = useState(false);

  const Components = [
    HomeButton,
    PatientsButton,
    HospitalsButton,
    HealthCardButton,
  ];

  const Paths = [
    "/AdminDashboard",
    "/AdminPatientManage",
    "/AdminHospitalManage",
    "/HealthCardManage",
  ];

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const handleHospital = () => {
    setAppointment(!addAppointment);
  };
  const handleUpdateReviewPopup = (data) => {
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

          <div className="container">
            <Navbar
              components={Components}
              Paths={Paths}
              LogOut={logOutBtnOnAction}
            />

            <div className="contend PatientDoctorReviewPage AdminHospitalContend">
              <h1>Hospital Management</h1>
              <div className="HospitalSearch">
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
                <button onClick={handleHospital}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M13.5 25.2041C7.08237 25.2041 1.86206 19.9838 1.86206 13.5662C1.86206 7.14853 7.08237 1.92822 13.5 1.92822C19.9176 1.92822 25.1379 7.14853 25.1379 13.5662C25.1379 19.9838 19.9176 25.2041 13.5 25.2041ZM13.5 3.79029C8.1093 3.79029 3.72413 8.17546 3.72413 13.5662C3.72413 18.9568 8.1093 23.342 13.5 23.342C18.8907 23.342 23.2759 18.9559 23.2759 13.5662C23.2759 8.1764 18.8907 3.79029 13.5 3.79029Z"
                      fill="white"
                    />
                    <path
                      d="M13.4999 20.0833C13.253 20.0833 13.0161 19.9852 12.8415 19.8106C12.6669 19.636 12.5688 19.3992 12.5688 19.1523V7.97986C12.5688 7.73294 12.6669 7.49612 12.8415 7.32152C13.0161 7.14692 13.253 7.04883 13.4999 7.04883C13.7468 7.04883 13.9836 7.14692 14.1582 7.32152C14.3328 7.49612 14.4309 7.73294 14.4309 7.97986V19.1523C14.4309 19.3992 14.3328 19.636 14.1582 19.8106C13.9836 19.9852 13.7468 20.0833 13.4999 20.0833Z"
                      fill="white"
                    />
                    <path
                      d="M19.0861 14.4971H7.9137C7.66677 14.4971 7.42996 14.399 7.25536 14.2244C7.08076 14.0498 6.98267 13.813 6.98267 13.566C6.98267 13.3191 7.08076 13.0823 7.25536 12.9077C7.42996 12.7331 7.66677 12.635 7.9137 12.635H19.0861C19.333 12.635 19.5699 12.7331 19.7445 12.9077C19.9191 13.0823 20.0171 13.3191 20.0171 13.566C20.0171 13.813 19.9191 14.0498 19.7445 14.2244C19.5699 14.399 19.333 14.4971 19.0861 14.4971Z"
                      fill="white"
                    />
                  </svg>
                  Add Hospital
                </button>
              </div>

              <div className="cardSet ">
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
                  viewReview={handleViewReviewPopup}
                />{" "}
                <HospitalReviewCard
                  addReview={handleUpdateReviewPopup}
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
export default AdminHospitalManagePage;
