import { setReportData } from "./popup/PopupBackground";
import axios from "axios";

const OldCard = ({ Appointment, hideReport }) => {
  function onClickViewDoctorReport() {
    //Must get Medical Report using Appointment ID
    try {
      const response = axios.get(`/appointment/${Appointment}/medical_report`);
      setReportData(response.data);
    } catch (error) {
      console.error(error);
    }

    hideReport();
  }

  function onClickMedicalList() {
    //Must get Medicine List using Appointment ID
    try {
      const response = axios.get(`/appointment/${Appointment}/medicine_list`);
      setReportData(response.data);
    } catch (error) {
      console.error(error);
    }

    hideReport();
  }

  return (
    <div className="labCard">
      <h1>Dr. {Appointment.doctorName}</h1>
      <h2>{Appointment.hospitalName}</h2>
      <div>
        <h3>{Appointment.date}</h3>
        <h3>{Appointment.time}</h3>
      </div>
      <button className="viewDoctor" onClick={onClickViewDoctorReport}>
        View Doctor Report
      </button>
      <button onClick={onClickMedicalList}>View Medicine List</button>
    </div>
  );
};

export default OldCard;
