import "../../../../css/component/medicalReport/AddMedicine.css";
import AddMedicalTableRow from "../tableRow/AddMedicalTableRow";
import { useState } from "react";
import axios from "axios";

const DoctorAddMedicinePopup = ({
  backButtonOnAction,
  scheduleId,
  patientId,
}) => {
  const [medicineName, setMedicineName] = useState("");
  const [medicineBrand, setMedicineBrand] = useState("");
  const [weight, setWeight] = useState("");
  const [dayCount, setDayCount] = useState("");
  const [dose, setDose] = useState("");
  const [dosePerDay, setDosePerDay] = useState([]);

  const addBtnOnAction = () => {
    let medicalData = {
      dayCount: dayCount,
      medicineName: medicineName,
      medicineBrand: medicineBrand,
      medicineWeight: weight,
      dose: dose,
      dosePerDay: dosePerDay,
    };

    const sendData = {
      patientId: patientId,
      scheduleId: scheduleId,
      medicalData: medicalData,
    };

    sendDataBackEnd(sendData).then((r) => console.log(r));
  };

  const sendDataBackEnd = async (medicalData) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/medicine_bill`,
        medicalData,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="AddMedicine">
      <div>
        <div className="contend">
          <div className="title">
            <h1>Add Drug List</h1>
            <button onClick={backButtonOnAction}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="20"
                viewBox="0 0 42 20"
                fill="none"
              >
                <path
                  d="M1.11612 9.11612C0.627961 9.60427 0.627961 10.3957 1.11612 10.8839L9.07107 18.8388C9.55922 19.327 10.3507 19.327 10.8388 18.8388C11.327 18.3507 11.327 17.5592 10.8388 17.0711L3.76777 10L10.8388 2.92893C11.327 2.44078 11.327 1.64932 10.8388 1.16117C10.3507 0.67301 9.55922 0.67301 9.07107 1.16117L1.11612 9.11612ZM2 11.25L42 11.25V8.75L2 8.75L2 11.25Z"
                  fill="#262626"
                />
              </svg>
              Back
            </button>
          </div>
          <div>
            <div className="table">
              <div className="tableHead">
                <div>
                  <div className="checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="medicalName">Medical Name</div>
                  <div className="days">Days</div>
                  <div className="dose">Dose</div>
                  <div className="perDay">Per Day</div>
                  <div className="action">Action</div>
                </div>
              </div>
              <div className="tableRows">
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
                <AddMedicalTableRow />
              </div>
            </div>
            <div className="addForm">
              <div>
                <h1>Medicine Details</h1>
                <label>
                  <h1>Medicine Name : </h1>
                </label>
                <input
                  type="text"
                  onChange={(e) => setMedicineName(e.target.value)}
                />
                <div>
                  <div>
                    <label>
                      <h1>Medicine Brand : </h1>
                      <input
                        type="text"
                        onChange={(e) => setMedicineBrand(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <h1>Weight ( mg ) :</h1>
                      <input
                        type="text"
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <h1>Medical Details</h1>
                <div>
                  <div>
                    <label>
                      <h1>Day Count : </h1>
                      <input
                        type="text"
                        onChange={(e) => setDayCount(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <h1>Dose : </h1>
                      <input
                        type="text"
                        onChange={(e) => setDose(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  <h1>Doses’ Per Day : </h1>
                  <div>
                    <div>
                      <input
                        type="radio"
                        onChange={() =>
                          setDosePerDay([...dosePerDay, "Morning"])
                        }
                      />
                      <h2>Morning</h2>
                    </div>
                    <div>
                      <input
                        type="radio"
                        onChange={() =>
                          setDosePerDay([...dosePerDay, "Afternoon"])
                        }
                      />
                      <h2>Afternoon</h2>
                    </div>
                    <div>
                      <input
                        type="radio"
                        onChange={() =>
                          setDosePerDay([...dosePerDay, "Evening"])
                        }
                      />
                      <h2>Evening</h2>
                    </div>
                  </div>
                </label>
                <button onClick={addBtnOnAction}>Add</button>
              </div>
              <button>Add Drug List</button>
            </div>
          </div>
        </div>
        <div className="circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAddMedicinePopup;
