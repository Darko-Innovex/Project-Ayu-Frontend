import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/component/Appointment/AddAppointment.css";

const AddAppointment = ({ patientId, hideAppointment, reloadTable }) => {
  const [locations, setLocations] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  function getDate(timeStamp) {
    let date = new Date(timeStamp);
    let formattedDay = date.toLocaleDateString("en-LK", { weekday: "long" });
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let output = `${year} / ${month} / ${day} `;
    return (
      <>
        {output}&nbsp;&nbsp;{formattedDay}
      </>
    );
  }

  const getTime = (timeStamp) => {
    if (timeStamp) {
      let date = new Date(timeStamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${hours} : ${minutes} : ${seconds}`;
    }
    return "";
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const locationData = await fetchLocations();
      setLocations(locationData);
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      const fetchHospitalsData = async () => {
        const hospitalData = await fetchHospitals(selectedLocation);
        setHospitals(hospitalData);
      };

      fetchHospitalsData();
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (selectedHospital) {
      const fetchSpecialtiesData = async () => {
        const specialtyData = await fetchSpecialties(selectedHospital);
        setSpecialties(specialtyData);
      };

      fetchSpecialtiesData();
    }
  }, [selectedHospital]);

  useEffect(() => {
    if (selectedHospital && selectedSpecialty) {
      const fetchDoctorsData = async () => {
        const doctorData = await fetchDoctors(
          selectedHospital,
          selectedSpecialty,
        );
        setDoctors(doctorData);
      };

      fetchDoctorsData();
    }
  }, [selectedHospital, selectedSpecialty]);

  useEffect(() => {
    if (selectedHospital && selectedDoctor) {
      const fetchScheduleData = async () => {
        const scheduleData = await fetchSchedules(
          selectedHospital,
          selectedDoctor,
        );
        setSchedule(scheduleData);
      };

      fetchScheduleData();
    }
  }, [selectedHospital, selectedDoctor]);

  useEffect(() => {
    setIsFormValid(
      selectedLocation !== "" &&
        selectedHospital !== "" &&
        selectedSpecialty !== "" &&
        selectedDoctor !== "",
    );
  }, [selectedLocation, selectedHospital, selectedSpecialty, selectedDoctor]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/location`,
      );
      if (response.status === 200) {
        return response.data; // Assuming response.data is an array of location strings
      } else {
        console.error("Failed to fetch locations:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  };

  const fetchHospitals = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/location/hospital?location=${location}`,
      );
      if (response.status === 200) {
        return response.data; // Assuming response.data contains the array of hospitals
      } else {
        console.error("Failed to fetch hospitals:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      return [];
    }
  };

  const fetchSpecialties = async (hospitalId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/${hospitalId}/speciality`,
      );
      if (response.status === 200) {
        return response.data; // Assuming response.data is an array of specialty strings
      } else {
        console.error("Failed to fetch specialties:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching specialties:", error);
      return [];
    }
  };

  const fetchDoctors = async (hospitalId, specialty) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/${hospitalId}/speciality/${specialty}/doctor`,
      );
      if (response.status === 200) {
        return response.data; // Assuming response.data contains the array of doctors
      } else {
        console.error("Failed to fetch doctors:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      return [];
    }
  };

  const fetchSchedules = async (hospitalId, doctorId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/${hospitalId}/doctor/${doctorId}/schedule`,
      );
      if (response.status === 200) {
        return response.data; // Assuming response.data contains the array of schedules
      } else {
        console.error("Failed to fetch schedules:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching schedules:", error);
      return [];
    }
  };

  const handleAddAppointment = async () => {
    if (selectedRow === null) {
      alert("You need to select a schedule");
      return;
    }

    if (selectedDoctor && selectedHospital) {
      const selectedSchedule = schedule[selectedRow];

      const appointmentData = {
        patientId,
        doctorId: selectedDoctor,
        hospitalId: selectedHospital,
        scheduleId: selectedSchedule.id,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/appointment",
          appointmentData,
        );
        if (response.status === 200 || response.status === 201) {
          reloadTable();
          hideAppointment();
          console.log("Appointment added successfully");
        } else {
          alert("Failed to add appointment");
          console.error("Failed to add appointment:", response.status);
        }
      } catch (error) {
        alert("Error adding appointment");
        console.error("Error adding appointment:", error);
      }
    } else {
      alert("Please select a doctor, hospital, and schedule");
    }
  };

  return (
    <div id="addAppointment">
      <div className="background">
        <div>
          <div className="circle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className="title">
              <h1>Add Appointment</h1>
              <button onClick={hideAppointment}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="16"
                  viewBox="0 0 41 16"
                  fill="none"
                >
                  <path
                    d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9L41 9V7L1 7L1 9Z"
                    fill="#262626"
                  />
                </svg>
                Back
              </button>
            </div>
            <div>
              <div>
                <h2>Location</h2>
                <select
                  name="location"
                  id="location"
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Select Location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <h2>Hospital</h2>
                <select
                  name="hospital"
                  id="hospital"
                  onChange={(e) => setSelectedHospital(e.target.value)}
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map((hospital) => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
                <h2>Specialty</h2>
                <select
                  name="specialty"
                  id="specialty"
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">Select Specialty</option>
                  {specialties.map((specialty, index) => (
                    <option key={index} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <h2>Doctor</h2>
                <select
                  name="doctor"
                  id="doctor"
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="schedule">
                {schedule.map((item, index) => (
                  <div
                    className={`scheduleBox ${selectedRow === index ? "selected" : ""}`}
                    key={index}
                    onClick={() => handleRowClick(index)}
                  >
                    <h2>{getDate(item.date)}</h2>
                    <h2>-</h2>
                    <h2>
                      {getTime(item.inTime)}
                      &nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;
                      {getTime(item.outTime)}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleAddAppointment} disabled={!isFormValid}>
              Add Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
