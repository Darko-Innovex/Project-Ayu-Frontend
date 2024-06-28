import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import PatientReportViewButton from "../component/dashboard/button/PatientReportViewButton";
import "../../css/DoctorMedicalReportPage.css";
import Search from "../component/medicalReport/Search";
import LabCard from "../component/medicalReport/LabCard";
import labReport from "../../img/a-visual-guide-chart-showing-blood-chemistry-test-interpretation 2.pdf";
import { useState } from "react";
import PopupBackground from "../component/medicalReport/popup/PopupBackground";
import SearchFilter from "../component/medicalReport/SearchFilter";
import OldCard from "../component/medicalReport/OldCard";
import AddReport from "../component/medicalReport/popup/AddReport";

const DoctorPatientDetailPage = () => {
  const [labReportFilter, setLabReportFilter] = useState(false);
  const [oldReportFilter, setOldReportFilter] = useState(false);
  const [reportViewPopup, setReportViewPopup] = useState(false);
  const [addReportPopup, setAddReportPopup] = useState(false);
  const Components = [HomeButton, AppointmentButton, PatientReportViewButton];
  const Paths = ["/", "/", "/"];

  let data = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report: labReport,
    reportType: "pdf",
  };

  let data1 = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
      "        tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit\n" +
      "        aliquet sagittis id consectetur purus ut. Dui vivamus arcu felis\n" +
      "        bibendum ut tristique. Pellentesque diam volutpat commodo sed egestas\n" +
      "        egestas fringilla phasellus. Et egestas quis ipsum suspendisse.\n" +
      "        Consectetur lorem donec massa sapien faucibus et molestie ac. At\n" +
      "        volutpat diam ut venenatis tellus in. Vel facilisis volutpat est velit\n" +
      "        egestas dui. Sit amet commodo nulla facilisi nullam vehicula ipsum a\n" +
      "        arcu. Risus ultricies tristique nulla aliquet enim tortor at auctor.\n" +
      "        Elementum curabitur vitae nunc sed velit dignissim sodales. Sed enim ut\n" +
      "        sem viverra aliquet eget.",
    reportType: "text",
  };

  let data2 = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report: labReport,
    reportType: "Table",
  };

  const showAndHideLabReportFilter = () => {
    setLabReportFilter(!labReportFilter);
  };

  const showAndHideOldReportFilter = () => {
    setOldReportFilter(!oldReportFilter);
  };

  const showAndHideReportViesPopUp = () => {
    setReportViewPopup(!reportViewPopup);
  };

  const showAndHideAddReportPopup = () => {
    setAddReportPopup(!addReportPopup);
  };

  const Allergies = [
    "Api ",
    "Apa",
    "Api ",
    "Apa",
    "Api ",
    "Apa",
    "Api ",
    "Apa",
  ];
  const AllergiesList = [];

  for (let i = 0; i < Allergies.length; i++) {
    AllergiesList.push(<h2 key={i}>{Allergies[i]}</h2>);
  }

  return (
    <div id="DoctorDashboard">
      <div className="cir">
        <div></div>
        <div></div>
      </div>
      {/* ---------------------- Report View
      -------------------------------------------- */}
      {reportViewPopup && (
        <PopupBackground hideReport={showAndHideReportViesPopUp} />
      )}
      {/*------------------------ Filter View
      ---------------------------------------------*/}
      {labReportFilter && (
        <SearchFilter
          getClassName={"labReportFilter"}
          hideFilter={showAndHideLabReportFilter}
        />
      )}
      {oldReportFilter && (
        <SearchFilter
          getClassName={"oldReportFilter"}
          hideFilter={showAndHideOldReportFilter}
        />
      )}
      {/*---------------------------------------- Add Report --------------------- */}
      {addReportPopup && <AddReport backOnAction={showAndHideAddReportPopup} />}
      <div className="container">
        <Navbar components={Components} Paths={Paths} />
        <div id="PatientReports">
          <div>
            <div className="labReport">
              <div className="title">
                <h1>Lab Reports</h1>
                <Search showFilter={showAndHideLabReportFilter} />
              </div>
              <div className="cardSet">
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
                <LabCard data={data} showReport={showAndHideReportViesPopUp} />
              </div>
            </div>
            <div className="OldMediReport">
              <div className="title">
                <h1>Old Medical Reports & Medicines</h1>
                <Search showFilter={showAndHideOldReportFilter} />
              </div>
              <div className="cardSet">
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
                <OldCard
                  MedicalReport={data1}
                  MedicalList={data2}
                  hideReport={showAndHideReportViesPopUp}
                />
              </div>
            </div>
          </div>
          <div className="addPopups">
            <div
              className="addMedicalReport"
              onClick={showAndHideAddReportPopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M12.5 22.5H57.5V25H12.5V22.5ZM12.5 32.5H32.5V55H12.5V32.5ZM15 52.5H30V35H15V52.5ZM40 35H57.5V32.5H40V35ZM40 40H57.5V37.5H40V40ZM40 50H57.5V47.5H40V50ZM40 45H57.5V42.5H40V45ZM40 55H57.5V52.5H40V55ZM80 17.5V60C80 65.515 75.515 70 70 70H10C4.485 70 0 65.515 0 60V12.5C0 11.12 1.12 10 2.5 10H67.5C68.88 10 70 11.12 70 12.5V15H77.5C78.88 15 80 16.12 80 17.5ZM75 20H67.5V55H65V17.5V15H5V60C5 62.7575 7.2425 65 10 65H70C72.7575 65 75 62.7575 75 60V20Z"
                  fill="#111918"
                />
              </svg>
              <h1>Medical Report</h1>
            </div>
            <div className="addMedicine">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40 75C20.67 75 5 59.325 5 40C5 20.675 20.67 5 40 5C59.33 5 75 20.675 75 40C75 59.325 59.33 75 40 75ZM40 0C17.9075 0 0 17.9 0 40C0 62.1 17.9075 80 40 80C62.0925 80 80 62.1 80 40C80 17.9 62.0925 0 40 0ZM55 37.5H42.5V25C42.5 23.625 41.3825 22.5 40 22.5C38.6175 22.5 37.5 23.625 37.5 25V37.5H25C23.6175 37.5 22.5 38.625 22.5 40C22.5 41.375 23.6175 42.5 25 42.5H37.5V55C37.5 56.375 38.6175 57.5 40 57.5C41.3825 57.5 42.5 56.375 42.5 55V42.5H55C56.3825 42.5 57.5 41.375 57.5 40C57.5 38.625 56.3825 37.5 55 37.5Z"
                  fill="#262626"
                />
              </svg>
              <h1>Medicine</h1>
            </div>
          </div>
          <div>
            <div className="patientDetails">
              <div>
                <div>
                  <h2>Age</h2>
                  <h1>38</h1>
                </div>
                <div>
                  <h2>Name</h2>
                  <h1>Mr. Gayanuka Bullegoda</h1>
                </div>
              </div>
              <div>
                <div>A+ </div>
              </div>
            </div>
            <div className="Allergies">
              <h1>Allergies</h1>
              <div className="list">{AllergiesList}</div>
            </div>
            <div className="Allergies">
              <h1>Regular drug list</h1>
              <div className="list">{AllergiesList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientDetailPage;
