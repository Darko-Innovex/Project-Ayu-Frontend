import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import { useNavigate } from "react-router-dom";
import "../../css/AdminPatientManage.css";
import { useState } from "react";
import AddPatientDoctorReviewPopup from "../component/DoctorReview/AddPatientDoctorReviewReview";
import ViewPatientDetailPopup from "../component/PatientManage/ViewPatientDetailPopup";
import AdminPatientCard from "../component/PatientManage/AdminPatientCard";
import PatientsButton from "../component/dashboard/button/PatientsButton";
import HospitalsButton from "../component/dashboard/button/HospitalsButton";
import HealthCardButton from "../component/dashboard/button/HealthCardButton";

const AdminPatientManagePage = () => {
  const navigate = useNavigate(null);
  const [Filter, setFilter] = useState(false);
  const [addReview, setEditDetail] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [currentForcingPatient, setCurrentForcingPatient] = useState(null);
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

  const cardData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  const handleFilter = () => {
    setFilter(!Filter);
  };

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const data = {
    ReviewType: "editDetail",
  };

  const data1 = {
    ReviewType: "viewDetail",
  };

  const handleEditPatientDetailPopup = (data) => {
    setCurrentForcingPatient(data);
    //setEditDetail(!editDetail);
  };

  const handleViewPatientDetailPopup = (data) => {
    setCurrentForcingPatient(data);
    setViewDetail(!viewDetail);
  };

  return (
    <div>
      <div>
        <div id="AdminDashboard">
          <div className="cir">
            <div></div>
            <div></div>
          </div>
          {/*{Filter && <PatientFilter closeFilter={handleFilter}*/}
          {addReview && (
            <AddPatientDoctorReviewPopup
              data={currentForcingPatient}
              backBtnAction={handleEditPatientDetailPopup}
            />
          )}

          {viewDetail && (
            <ViewPatientDetailPopup
              data={data1}
              backBtnAction={handleViewPatientDetailPopup}
            />
          )}

          <div className="container">
            <Navbar
              components={Components}
              Paths={Paths}
              LogOut={logOutBtnOnAction}
            />
            <div className="contend AdminPatientManagePage">
              <h1>Patient Management</h1>
              <div className="search">
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
                <svg
                  onClick={handleFilter}
                  className="filter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="52"
                    height="52"
                    rx="26"
                    fill="white"
                    stroke="#D7D7D7"
                  />
                  <path
                    d="M18.5626 17.0757L18.6331 17.1463L18.5626 17.0757C18.4499 17.1882 18.3865 17.3408 18.3865 17.5L18.3865 20.9621C17.6998 21.1015 17.0795 21.469 16.6276 22.006C16.1576 22.5645 15.9 23.2705 15.9 24C15.9 24.7295 16.1576 25.4355 16.6276 25.994C17.0795 26.531 17.6998 26.8985 18.3865 27.0379L18.3865 37.5C18.3865 37.6592 18.4499 37.8118 18.5626 37.9243C18.6753 38.0368 18.8281 38.1 18.9874 38.1C19.1467 38.1 19.2995 38.0368 19.4122 37.9243C19.5249 37.8118 19.5882 37.6592 19.5882 37.5L19.5882 27.0379C20.275 26.8985 20.8953 26.531 21.3471 25.994C21.8171 25.4355 22.0747 24.7295 22.0747 24C22.0747 23.2705 21.8171 22.5645 21.3471 22.006C20.8953 21.469 20.275 21.1015 19.5882 20.9621L19.5882 17.5C19.5882 17.3408 19.5249 17.1882 19.4122 17.0757C19.2995 16.9632 19.1467 16.9 18.9874 16.9C18.8281 16.9 18.6753 16.9632 18.5626 17.0757ZM33.4118 17.5L33.4118 20.9621C32.725 21.1015 32.1047 21.469 31.6529 22.006C31.1829 22.5645 30.9253 23.2705 30.9253 24C30.9253 24.7295 31.1829 25.4355 31.6529 25.994C32.1047 26.531 32.725 26.8985 33.4118 27.0379L33.4118 37.5C33.4118 37.6592 33.4751 37.8118 33.5878 37.9243C33.7005 38.0368 33.8533 38.1 34.0126 38.1C34.1719 38.1 34.3247 38.0368 34.4374 37.9243C34.5501 37.8118 34.6135 37.6592 34.6135 37.5L34.6135 27.0379C35.3002 26.8985 35.9205 26.531 36.3724 25.994C36.8423 25.4355 37.1 24.7295 37.1 24C37.1 23.2705 36.8423 22.5645 36.3724 22.006C35.9205 21.469 35.3002 21.1015 34.6135 20.9621L34.6135 17.5C34.6135 17.3408 34.5501 17.1882 34.4374 17.0757C34.3247 16.9632 34.1719 16.9 34.0126 16.9C33.8533 16.9 33.7005 16.9632 33.5878 17.0757C33.4751 17.1882 33.4118 17.3408 33.4118 17.5ZM35.916 24C35.916 24.3757 35.8044 24.7431 35.5953 25.0555C35.3861 25.368 35.0889 25.6115 34.7411 25.7553C34.3933 25.8992 34.0105 25.9368 33.6413 25.8635C33.272 25.7902 32.9329 25.6092 32.6667 25.3434C32.4005 25.0777 32.2193 24.7392 32.1458 24.3706C32.0724 24.0021 32.1101 23.6201 32.2541 23.273C32.3982 22.9258 32.6421 22.629 32.9551 22.4203C33.2681 22.2115 33.6361 22.1 34.0126 22.1C34.5175 22.1 35.0016 22.3002 35.3586 22.6566C35.7155 23.0129 35.916 23.4961 35.916 24ZM27.1008 37.5L27.1008 34.0379C27.7876 33.8985 28.4079 33.531 28.8598 32.994C29.3297 32.4355 29.5874 31.7295 29.5874 31C29.5874 30.2705 29.3297 29.5645 28.8598 29.006C28.4079 28.469 27.7876 28.1015 27.1008 27.9621L27.1008 17.5C27.1008 17.3408 27.0375 17.1882 26.9248 17.0757C26.8121 16.9632 26.6593 16.9 26.5 16.9C26.3407 16.9 26.1879 16.9632 26.0752 17.0757C25.9625 17.1882 25.8992 17.3408 25.8992 17.5L25.8992 27.9621C25.2124 28.1015 24.5921 28.469 24.1402 29.006C23.6703 29.5645 23.4126 30.2705 23.4126 31C23.4126 31.7295 23.6703 32.4355 24.1402 32.994C24.5921 33.531 25.2124 33.8985 25.8992 34.0379L25.8992 37.5C25.8992 37.6592 25.9625 37.8118 26.0752 37.9243C26.1879 38.0368 26.3407 38.1 26.5 38.1C26.6593 38.1 26.8121 38.0368 26.9248 37.9243C27.0375 37.8118 27.1008 37.6592 27.1008 37.5ZM24.5966 31C24.5966 30.6243 24.7082 30.2569 24.9174 29.9445C25.1265 29.632 25.4237 29.3885 25.7716 29.2447C26.1194 29.1008 26.5021 29.0632 26.8714 29.1365C27.2406 29.2098 27.5798 29.3908 27.8459 29.6566C28.1121 29.9223 28.2934 30.2608 28.3668 30.6294C28.4402 30.9979 28.4025 31.3799 28.2585 31.727C28.1145 32.0742 27.8705 32.371 27.5575 32.5797C27.2445 32.7885 26.8765 32.9 26.5 32.9C25.9951 32.9 25.511 32.6998 25.1541 32.3434C24.7971 31.9871 24.5966 31.5039 24.5966 31ZM17.084 24C17.084 23.6243 17.1956 23.2569 17.4047 22.9445C17.6138 22.632 17.9111 22.3885 18.2589 22.2447C18.6067 22.1008 18.9895 22.0632 19.3587 22.1365C19.728 22.2098 20.0671 22.3908 20.3333 22.6566C20.5995 22.9223 20.7807 23.2608 20.8542 23.6294C20.9276 23.9979 20.8899 24.3799 20.7459 24.727C20.6018 25.0742 20.3579 25.371 20.0449 25.5797C19.7319 25.7885 19.3638 25.9 18.9874 25.9C18.4825 25.9 17.9984 25.6998 17.6414 25.3434C17.2845 24.9871 17.084 24.5039 17.084 24Z"
                    fill="black"
                    stroke="#262626"
                    stroke-width="0.2"
                  />
                </svg>
              </div>
              <div className="cardSet">
                {cardData.map((data) => (
                  <AdminPatientCard
                    key={data.id}
                    editDetail={() => handleEditPatientDetailPopup(data)}
                    data={data}
                    viewDetail={() => handleViewPatientDetailPopup(data)}
                  />
                ))}
                {/*<AdminPatientCard*/}
                {/*  editDetail={handleEditPatientDetailPopup}*/}
                {/*  data={data}*/}
                {/*  viewDetail={handleViewPatientDetailPopup}*/}
                {/*/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPatientManagePage;
