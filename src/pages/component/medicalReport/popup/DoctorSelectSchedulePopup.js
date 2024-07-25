import "../../../../css/component/medicalReport/DoctorSchedulePopup.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { setScheduleId } from "../../../doctor/DoctorPatientDetailPage";

const DoctorSelectSchedulePopup = ({ closeAction, doctorId }) => {
  const [schedule, setSchedule] = useState(null);
  const [scheduleWithHospitals, setScheduleWithHospitals] = useState([]);

  useEffect(() => {
    const fetchDoctorSchedules = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/doctor/${doctorId}/schedule`,
        );
        console.log("response", response.data);
        setSchedule(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctorSchedules().then((r) => console.log(r));
  }, [doctorId]);

  useEffect(() => {
    const fetchHospitalData = async () => {
      if (schedule) {
        const hospitalPromises = schedule.map(async (data) => {
          try {
            const response = await axios.get(
              `http://localhost:8080/hospital/${data.hospitalId}`,
            );
            return { ...data, hospital: response.data };
          } catch (error) {
            console.error(error);
            return { ...data, hospital: { name: "Unknown" } }; // Fallback in case of error
          }
        });

        const updatedSchedule = await Promise.all(hospitalPromises);
        setScheduleWithHospitals(updatedSchedule);
      }
    };

    fetchHospitalData().then((r) => console.log(r));
  }, [schedule]);

  const onclickSchedule = (scheduleId) => {
    setScheduleId(scheduleId);
    closeAction();
  };

  return (
    <div id="DoctorSelectSchedulePopup">
      <div className="background">
        <div>
          <div className="closeBtn" onClick={closeAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <path
                d="M0.195791 9.10888C-0.0652637 9.36995 -0.0652637 9.79314 0.195791 10.0542C0.456846 10.3153 0.880109 10.3153 1.14116 10.0542L0.195791 9.10888ZM5.59767 5.59767C5.85873 5.33661 5.85873 4.91341 5.59767 4.65235C5.33661 4.39129 4.91341 4.39129 4.65235 4.65235L5.59767 5.59767ZM4.65235 4.65235C4.39129 4.91341 4.39129 5.33661 4.65235 5.59767C4.91341 5.85873 5.33661 5.85873 5.59767 5.59767L4.65235 4.65235ZM10.0542 1.14116C10.3153 0.88011 10.3153 0.456846 10.0542 0.195791C9.79314 -0.0652637 9.36995 -0.0652637 9.10888 0.195791L10.0542 1.14116ZM5.59767 4.65235C5.33661 4.39129 4.91341 4.39129 4.65235 4.65235C4.39129 4.91341 4.39129 5.33661 4.65235 5.59767L5.59767 4.65235ZM9.10888 10.0542C9.36995 10.3153 9.79314 10.3153 10.0542 10.0542C10.3153 9.79314 10.3153 9.36995 10.0542 9.10888L9.10888 10.0542ZM4.65235 5.59767C4.91341 5.85873 5.33661 5.85873 5.59767 5.59767C5.85873 5.33661 5.85873 4.91341 5.59767 4.65235L4.65235 5.59767ZM1.14116 0.195791C0.880109 -0.0652637 0.456846 -0.0652637 0.195791 0.195791C-0.0652637 0.456846 -0.0652637 0.88011 0.195791 1.14116L1.14116 0.195791ZM1.14116 10.0542L5.59767 5.59767L4.65235 4.65235L0.195791 9.10888L1.14116 10.0542ZM5.59767 5.59767L10.0542 1.14116L9.10888 0.195791L4.65235 4.65235L5.59767 5.59767ZM4.65235 5.59767L9.10888 10.0542L10.0542 9.10888L5.59767 4.65235L4.65235 5.59767ZM5.59767 4.65235L1.14116 0.195791L0.195791 1.14116L4.65235 5.59767L5.59767 4.65235Z"
                fill="#262626"
              />
            </svg>
          </div>
          <h1>Schedules</h1>
          <div className="table">
            {scheduleWithHospitals.length > 0 ? (
              scheduleWithHospitals.map((data, index) => (
                <div key={index} className="row">
                  <h2>{data.hospital.name}</h2>
                  <h2>{data.inTime}</h2>
                  <div className="btn" onClick={() => onclickSchedule(data.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect width="24" height="24" rx="12" fill="#00E590" />
                      <path
                        d="M16 9L10 15L7 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSelectSchedulePopup;
