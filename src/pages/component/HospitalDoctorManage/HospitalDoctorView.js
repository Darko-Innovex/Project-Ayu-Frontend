import "../../../css/component/HospitalDoctorManage/HospitalDoctorView.css";
import DoctorImage from "../../../img/HospitalDoctorImage.png";

const HospitalDoctorView = ({ closeBtn, doctorData }) => {
  return (
    <div id="hospitalDoctorView">
      <div className="background">
        <div>
          <div className="title">
            <h1>View Doctor</h1>
            <button onClick={closeBtn}>
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
          <div className="inputs">
            <div>
              <h2>Name</h2>
              <input type="text" readOnly={true} value={doctorData.name} />
              <h2>Speciality</h2>
              <input
                type="text"
                readOnly={true}
                value={doctorData.speciality}
              />
              <h2>Email</h2>
              <input type="text" readOnly={true} value={doctorData.email} />
              <h2>Phone Number</h2>
              <input type="text" readOnly={true} value={doctorData.mobile} />
            </div>
            <div>
              <div>
                <img src={DoctorImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDoctorView;
