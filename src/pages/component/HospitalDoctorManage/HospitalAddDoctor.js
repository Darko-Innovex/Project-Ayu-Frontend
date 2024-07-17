import "../../../css/component/HospitalDoctorManage/HospitalAddDoctor.css";

const HospitalAddDoctor = ({ closeBtnOnAction }) => {
  return (
    <div id={"HospitalAddDoctor"}>
      <div className="background">
        <div>
          <h1>Doctor Add</h1>
          <h3>NIC</h3>
          <input type="text" />
          <div className="buttons">
            <button>Add</button>
            <button onClick={closeBtnOnAction}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalAddDoctor;
