import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import "../../css/PatientMediReport.css";
import Search from "../component/medicalReport/Search";
import LabCard from "../component/medicalReport/LabCard";
import OldCard from "../component/medicalReport/OldCard";
import SearchFilter from "../component/medicalReport/SearchFilter";
import { useState } from "react";

const PatientMedicalReportPage = () => {
  const [labReportFilter, setLabReportFilter] = useState(false);
  const [oldReportFilter, setOldReportFilter] = useState(false);
  const Components = [
    HomeButton,
    AppointmentButton,
    ReportButton,
    ReviewButton,
  ];
  const Paths = ["/PatientDashboard", "/", "/PatientMedicalReport", "/"];

  const sowAndHideLabReportFilter = () => {
    setLabReportFilter(!labReportFilter);
  };

  const showAndHideOldReportFilter = () => {
    setOldReportFilter(!oldReportFilter);
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
    <div id="PatientDashboard">
      <div className="cir">
        <div></div>
        <div></div>
      </div>
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
        <Navbar components={Components} Paths={Paths} />
        <div id="PatientMediReport">
          <div>
            <div className="labReport">
              <div className="title">
                <h1>Lab Reports</h1>
                <Search showFilter={sowAndHideLabReportFilter} />
              </div>
              <div className="cardSet">
                <LabCard />
                <LabCard />
                <LabCard />
                <LabCard />
                <LabCard />
                <LabCard />
              </div>
            </div>
            <div className="OldMediReport">
              <div className="title">
                <h1>Old Medical Reports & Medicines</h1>
                <Search showFilter={showAndHideOldReportFilter} />
              </div>
              <div className="cardSet">
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
                <OldCard />
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
