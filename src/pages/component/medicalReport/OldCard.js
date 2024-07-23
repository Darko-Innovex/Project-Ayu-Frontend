import { setReportData } from "./popup/PopupBackground";
import axios from "axios";
import { useEffect, useState } from "react";

const OldCard = ({ Appointment, hideReport }) => {
  const [doctor, setDoctor] = useState(null);
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    if (Appointment) {
      getDoctor();
      getHospital();
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

  const getHospital = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/${Appointment.hospitalId}`,
      );
      setHospital(response.data);
    } catch (error) {
      console.error("Error fetching hospital: ", error);
    }
  };

  const onClickViewDoctorReport = async () => {
    if (Appointment) {
      try {
        const response = await axios.get(
          `http://localhost:8080/appointment/${Appointment.id}/medical_report`,
        );
        setReportData(response.data, hospital);
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
        setReportData(response.data, hospital);
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
      return `${year} / ${month} / ${day}`;
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
      {hospital && <h2>{hospital.name}</h2>}
      <div>
        <h3>{getDate(Appointment)}</h3>
        <h3>{getTime(Appointment)}</h3>
      </div>
      <button className="viewDoctor" onClick={onClickViewDoctorReport}>
        View Medical Report
      </button>
      <button onClick={onClickMedicalList}>View Medicine List</button>
    </div>
  );
};

export default OldCard;
