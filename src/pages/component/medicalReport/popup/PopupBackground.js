import ButtonArrow from "../../../../img/ButtonArrowIcon.png";
import "../../../../css/component/medicalReport/ViewReport.css";
import MedicalTestViewPopup from "./MedicalTestViewPopup";
import DoctorReportViewPopup from "./DoctorReportViewPopup";
import MedicineReportViewPopup from "./MedicineReportViewPopup";

let data = [];

export const setReportData = (getData) => {
  data = getData;
};

const ReportType = () => {
  switch (data.reportType) {
    case "pdf":
      return <MedicalTestViewPopup data={data.report} />;
    case "text":
      return <DoctorReportViewPopup data={data.report} />;
    default:
      return <MedicineReportViewPopup />; // Must add data function when we connect front-end with backend
  }
};

const PopupBackground = ({ hideReport }) => {
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
              <h1>{data.title}</h1>
              <button className="backBtn" onClick={hideReport}>
                <img src={ButtonArrow} alt="" />
                Back
              </button>
            </div>
            <div className="subData">
              <div>{data.place}</div>
              <div>{data.date}</div>
            </div>
            {ReportType()}
          </header>
        </div>
      </div>
    </div>
  );
};

export default PopupBackground;
