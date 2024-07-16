const HospitalViewAppointment = ({ AppointmentData, HideAppointment }) => {
  return (
    <div id="AppointmentDetails">
      <div className="background">
        <div className="HospitalViewAppointment">
          <div className="circle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className="close" onClick={HideAppointment}>
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
            <h1>Appointment Details</h1>
            <div>
              <div>
                <div className="transparent">
                  {/*------------------------------try to keep the same structure and classes----------------------*/}
                  <h3>transparent</h3>
                </div>
                <div>
                  <h2 className="status">Status</h2>
                  <h3>Complete</h3>
                </div>
              </div>
              <div>
                <div>
                  <h2>Appointment Id :</h2>
                  <h3>A - 001 251</h3>
                </div>
                <div>
                  <h2>Appointment No :</h2>
                  <h3>10</h3>
                </div>
              </div>
              <div>
                <div>
                  <h2>Patient Index No :</h2>
                  <h3>3456 1234 8763 1234</h3>
                </div>
                <div>
                  <h2>Patient Name :</h2>
                  <h3>Mr. Gayanuka Bulegoda</h3>
                </div>
              </div>
              <div>
                <div>
                  <h2>Doctor Name</h2>
                  <h3>Dr. Ashen Madhusanka</h3>
                </div>
                <div>
                  <h2>Doctor Specialty</h2>
                  <h3>Cardiologist</h3>
                </div>
              </div>
              <div>
                <div>
                  <h2>Date</h2>
                  <h3>2023 / 06 / 25</h3>
                </div>
                <div>
                  <h2>Time</h2>
                  <h3>09 : 00 AM</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalViewAppointment;
