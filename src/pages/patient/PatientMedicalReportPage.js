import { useState } from "react";
import "../../css/PatientMediReport.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import Search from "../component/medicalReport/Search";
import LabCard from "../component/medicalReport/LabCard";
import OldCard from "../component/medicalReport/OldCard";
import SearchFilter from "../component/medicalReport/SearchFilter";
import PopupBackground from "../component/medicalReport/popup/PopupBackground";
import labReport from "../../../src/img/a-visual-guide-chart-showing-blood-chemistry-test-interpretation 2.pdf";
import { useNavigate } from "react-router-dom";

const PatientMedicalReportPage = () => {
  const [labReportFilter, setLabReportFilter] = useState(false);
  const [oldReportFilter, setOldReportFilter] = useState(false);
  const [reportViewPopup, setReportViewPopup] = useState(false);
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

  const sowAndHideLabReportFilter = () => {
    setLabReportFilter(!labReportFilter);
  };

  const showAndHideOldReportFilter = () => {
    setOldReportFilter(!oldReportFilter);
  };

  const showAndHideReportViesPopUp = () => {
    setReportViewPopup(!reportViewPopup);
  };

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  const Allergies = [
    "Latex Allergy ",
    "Latex Allergy",
    "Latex Allergy ",
    "Latex Allergy",
    "Latex Allergy ",
    "Latex Allergy",
    "Latex Allergy ",
    "Latex Allergy",
  ];
  const AllergiesList = [];

  for (let i = 0; i < Allergies.length; i++) {
    AllergiesList.push(<h2 key={i}>{Allergies[i]}</h2>);
  }

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

  return (
    <div id="dashboard">
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
          hideFilter={sowAndHideLabReportFilter}
        />
      )}
      {oldReportFilter && (
        <SearchFilter
          getClassName={"oldReportFilter"}
          hideFilter={showAndHideOldReportFilter}
        />
      )}
      <div className="container">
        <Navbar
          components={Components}
          Paths={Paths}
          LogOut={logOutBtnOnAction}
        />
        <div id="PatientMediReport">
          <div>
            <div className="labReport">
              <div className="title">
                <h1>Lab Reports</h1>
                <Search showFilter={sowAndHideLabReportFilter} />
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
          <div>
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

export default PatientMedicalReportPage;
