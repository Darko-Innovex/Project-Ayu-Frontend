import "../../../../css/component/medicalReport/DoctorSchedulePopup.css";

const DoctorSelectSchedulePopup = ({ closeAction }) => {
  const data = {
    hospital: "Lanka Hospital",
    time: "10 : 00 - 13 : 00 AM",
  };

  const dataset = [
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
    data,
  ];

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
            {dataset.map((data, index) => {
              return (
                <div key={index} className="row">
                  <h2>{data.hospital}</h2>
                  <h2>{data.time}</h2>
                  <div className="btn">
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
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSelectSchedulePopup;
