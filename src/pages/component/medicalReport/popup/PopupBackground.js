import ButtonArrow from "../../../../img/ButtonArrowIcon.png";
import "../../../../css/component/medicalReport/ViewReport.css";
import MedicalTestViewPopup from "./MedicalTestViewPopup";
import DoctorReportViewPopup from "./DoctorReportViewPopup";
import MedicineReportViewPopup from "./MedicineReportViewPopup";
import { useState } from "react";

let data = [];
let hospitalData = {};
let title = "";

export const setReportData = (getData, hospital) => {
  data = getData;
  hospitalData = hospital;
};

const ReportType = () => {
  switch (data.reportType) {
    case "pdf":
      title = "Lab Report";
      return <MedicalTestViewPopup data={data.file} />;
    case "text":
      title = "Medical Report";
      return <DoctorReportViewPopup data={data.file} />;
    default:
      title = "Medicine Bill";
      return <MedicineReportViewPopup data={data.medicineList} />; // Must add data function when we connect front-end with backend
  }
};

const getDate = (timestamp) => {
  if (timestamp) {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1 for human-readable month
    let day = date.getDate();
    return `${year} / ${month} / ${day}`;
  }
  return "";
};

const PopupBackground = ({ hideReport, data }) => {
  return (
    <div id="ViewReport">
      <div className="ReportBackground">
        <div className="container medicalReportContainer">
          <div className="cir">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <header>
            <div className="title">
              <h1>{title}</h1>
              <button className="backBtn" onClick={hideReport}>
                <img src={ButtonArrow} alt="" />
                Back
              </button>
            </div>
            <div className="subData">
              {/*<div>{data.place}</div>*/}
              <div>{hospitalData.name}</div>
              <div>{getDate(data.timestamp)}</div>
            </div>
            {ReportType()}
          </header>
        </div>
      </div>
    </div>
  );
};

export default PopupBackground;
