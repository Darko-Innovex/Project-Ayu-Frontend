import { setReportData } from "./popup/PopupBackground";
import axios from "axios";
import { useEffect, useState } from "react";

const OldCard = ({ Appointment, hideReport }) => {
  const [doctor, setDoctor] = useState(null);

  const [date, setDate] = useState(null);

  const [time, setTime] = useState(null);

  function onClickViewDoctorReport() {
    //Must get Medical Report using Appointment ID

    async function getMedicalReport() {
      try {
        const response = await axios.get(
          `http://localhost:8080/appointment/${Appointment.id}/medical_report`,
        );
        setReportData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getMedicalReport();
    hideReport();
  }

  function onClickMedicalList() {
    //Must get Medicine List using Appointment ID
    async function getMedicineList() {
      try {
        const response = await axios.get(
          `http://localhost:8080/appointment/${Appointment.id}/medicine_list`,
        );
        setReportData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getMedicineList();
    hideReport();
  }

  function getDoctor() {
    //Must get Medicine List using Appointment ID
    console.log(Appointment.doctorId);
    try {
      const response = axios.get(
        `http://localhost:8080/doctor/${Appointment.doctorId}`,
      );
      console.log(response.data);
      setDoctor(response.data);
    } catch (error) {
      console.error(error);
    }

    hideReport();
  }

  function getDate(appointment) {
    let date = new Date(appointment.timestamp);

    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1 for human-readable month
    let day = date.getDate();

    return `${year} : ${month} : ${day}`;
  }

  function getTime(appointment) {
    let date = new Date(appointment.timestamp);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours} : ${minutes} : ${seconds}`;
  }

  useEffect(() => {
    getDoctor();
  }, [Appointment]);

  return (
    <div className="labCard">
      {doctor && <h1>Dr. {doctor.name}</h1>}
      <h2>Ruhunu Hospital</h2>
      <div>
        <h3>{getDate(Appointment)}</h3>
        <h3>{getTime(Appointment)}</h3>
      </div>
      <button className="viewDoctor" onClick={onClickMedicalList}>
        View Doctor Report
      </button>
      <button onClick={onClickViewDoctorReport}>View Medicine List</button>
    </div>
  );
};

export default OldCard;
