import PopupBackground, { setReportData } from "./popup/PopupBackground";
import axios from "axios";
import { useEffect, useState } from "react";

const LabCard = ({ data, showReport }) => {
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    getHospital();
  }, [data]);

  const onClickViewBtn = () => {
    setReportData(data, hospital);
    showReport();
  };

  const getHospital = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/${data.hospitalId}`,
      );
      setHospital(response.data);
    } catch (error) {
      console.error("Error fetching hospital: ", error);
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

  const getTime = (timestamp) => {
    if (timestamp) {
      let date = new Date(timestamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${hours} : ${minutes} : ${seconds}`;
    }
    return "";
  };

  return (
    <div className="labCard labReportCard">
      <h1>{data.type}</h1>
      {hospital && <h2>{hospital.name}</h2>}
      <div>
        <h3>{getDate(data.timestamp)}</h3>
        <h3>{getTime(data.timestamp)}</h3>
      </div>
      <button onClick={onClickViewBtn}>View</button>
    </div>
  );
};

export default LabCard;
