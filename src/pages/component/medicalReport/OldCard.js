import { setReportData } from "./popup/PopupBackground";
import axios from "axios";
import { useEffect, useState } from "react";

const OldCard = ({ Appointment, hideReport }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (Appointment) {
      getDoctor();
    }
  }, [Appointment]);

  const getDoctor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/doctor/${Appointment.doctorId}`,
      );
      setDoctor(response.data);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };

  const onClickViewDoctorReport = async () => {
    if (Appointment) {
      try {
        const response = await axios.get(
          `http://localhost:8080/appointment/${Appointment.id}/medical_report`,
        );
        setReportData(response.data);
      } catch (error) {
        console.error("Error fetching doctor report:", error);
      }
    }
    hideReport();
  };

  const onClickMedicalList = async () => {
    if (Appointment) {
      try {
        const response = await axios.get(
          `http://localhost:8080/appointment/${Appointment.id}/medicine_list`,
        );
        setReportData(response.data);
      } catch (error) {
        console.error("Error fetching medicine list:", error);
      }
    }
    hideReport();
  };

  const getDate = (appointment) => {
    if (appointment) {
      let date = new Date(appointment.timestamp);
      let year = date.getFullYear();
      let month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1 for human-readable month
      let day = date.getDate();
      return `${year} : ${month} : ${day}`;
    }
    return "";
  };

  const getTime = (appointment) => {
    if (appointment) {
      let date = new Date(appointment.timestamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${hours} : ${minutes} : ${seconds}`;
    }
    return "";
  };

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
