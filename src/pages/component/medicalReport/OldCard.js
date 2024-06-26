import { setReportData } from "./popup/PopupBackground";

const OldCard = ({ MedicalReport, MedicalList, hideReport }) => {
  function onClickViewDoctorReport() {
    setReportData(MedicalReport);
    hideReport();
  }

  function onClickMedicalList() {
    setReportData(MedicalList);
    hideReport();
  }

  return (
    <div className="labCard">
      <h1>Dr. Gayanuka Bulegoda</h1>
      <h2>Ruhunu Hospital</h2>
      <div>
        <h3>2024 / 06 / 25 </h3>
        <h3>05 : 30 : 52 PM</h3>
      </div>
      <button className="viewDoctor" onClick={onClickViewDoctorReport}>
        View Doctor Report
      </button>
      <button onClick={onClickMedicalList}>View Medicine List</button>
    </div>
  );
};

export default OldCard;
