import axios from "axios";
import { useEffect, useState } from "react";

const SearchLine = ({ showFilter, type, id }) => {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      let response;
      if (type === "patient") {
        response = await axios.get(
          `http://localhost:8080/patient/dashboard_data/${id}`,
        );
      } else if (type === "doctor") {
        response = await axios.get(
          `http://localhost:8080/doctor/dashboard_data/${id}`,
        );
      } else if (type === "Hospital") {
        response = await axios.get(
          `http://localhost:8080/hospital/dashboard_data/${id}`,
        );
      }

      if (response) {
        console.log(response.data);
        setData1(response.data.completedAppointment);
        setData2(response.data.pendingAppointment);
        setData3(response.data.labReportsCount);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // TODO : DO similar for admin hospital
  };

  return (
    <div className="SearchLine">
      <div id="counts">
        <div>
          <h1>{data1}</h1>
          <div>
            <h2>
              <span>+{data2}</span>
              <br />
              Channels
            </h2>
          </div>
        </div>
        <div>
          <h1>{data3}</h1>
          <div>
            <h2>
              <br />
              Lab Report
            </h2>
          </div>
        </div>
      </div>
      <div id="Search">
        <div>
          <input placeholder="Search" type="text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
              fill="#7E7E7E"
            />
          </svg>
        </div>
        <div className="filter" onClick={showFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M3.56256 1.07568L3.63311 1.14635L3.56256 1.07568C3.44986 1.18818 3.38652 1.34082 3.38652 1.5L3.38652 4.96213C2.69976 5.10149 2.07947 5.46898 1.6276 6.00598C1.15765 6.56447 0.899999 7.27054 0.899999 8C0.899999 8.72946 1.15765 9.43553 1.6276 9.99402C2.07947 10.531 2.69976 10.8985 3.38652 11.0379L3.38652 21.5C3.38652 21.6592 3.44986 21.8118 3.56256 21.9243C3.67525 22.0368 3.82806 22.1 3.98736 22.1C4.14666 22.1 4.29947 22.0368 4.41216 21.9243C4.52486 21.8118 4.5882 21.6592 4.5882 21.5L4.5882 11.0379C5.27495 10.8985 5.89525 10.531 6.34712 9.99402C6.81707 9.43553 7.07472 8.72946 7.07472 8C7.07472 7.27054 6.81707 6.56447 6.34712 6.00598C5.89525 5.46898 5.27495 5.10149 4.5882 4.96213L4.5882 1.5C4.5882 1.34082 4.52486 1.18818 4.41216 1.07568C4.29947 0.963172 4.14666 0.899999 3.98736 0.899999C3.82806 0.899999 3.67525 0.963172 3.56256 1.07568ZM18.4118 1.5L18.4118 4.96213C17.725 5.10149 17.1047 5.46898 16.6529 6.00598C16.1829 6.56447 15.9253 7.27054 15.9253 8C15.9253 8.72946 16.1829 9.43553 16.6529 9.99402C17.1047 10.531 17.725 10.8985 18.4118 11.0379L18.4118 21.5C18.4118 21.6592 18.4751 21.8118 18.5878 21.9243C18.7005 22.0368 18.8533 22.1 19.0126 22.1C19.1719 22.1 19.3247 22.0368 19.4374 21.9243C19.5501 21.8118 19.6135 21.6592 19.6135 21.5L19.6135 11.0379C20.3002 10.8985 20.9205 10.531 21.3724 9.99402C21.8423 9.43553 22.1 8.72946 22.1 8C22.1 7.27054 21.8423 6.56447 21.3724 6.00598C20.9205 5.46898 20.3002 5.10149 19.6135 4.96213L19.6135 1.5C19.6135 1.34082 19.5501 1.18819 19.4374 1.07568C19.3247 0.963173 19.1719 0.9 19.0126 0.9C18.8533 0.9 18.7005 0.963173 18.5878 1.07568C18.4751 1.18819 18.4118 1.34082 18.4118 1.5ZM20.916 8C20.916 8.37575 20.8044 8.74307 20.5953 9.05552C20.3861 9.36797 20.0889 9.61152 19.7411 9.75535C19.3933 9.89918 19.0105 9.93681 18.6413 9.86349C18.272 9.79016 17.9329 9.60918 17.6667 9.34344C17.4005 9.07771 17.2193 8.73917 17.1458 8.37064C17.0724 8.00211 17.1101 7.62012 17.2541 7.27296C17.3982 6.9258 17.6421 6.62905 17.9551 6.42025C18.2681 6.21145 18.6361 6.1 19.0126 6.1C19.5175 6.1 20.0016 6.30022 20.3586 6.65656C20.7155 7.01289 20.916 7.49614 20.916 8ZM12.1008 21.5L12.1008 18.0379C12.7876 17.8985 13.4079 17.531 13.8598 16.994C14.3297 16.4355 14.5874 15.7295 14.5874 15C14.5874 14.2705 14.3297 13.5645 13.8598 13.006C13.4079 12.469 12.7876 12.1015 12.1008 11.9621L12.1008 1.5C12.1008 1.34082 12.0375 1.18818 11.9248 1.07568C11.8121 0.963173 11.6593 0.9 11.5 0.9C11.3407 0.9 11.1879 0.963173 11.0752 1.07568C10.9625 1.18818 10.8992 1.34082 10.8992 1.5L10.8992 11.9621C10.2124 12.1015 9.59211 12.469 9.14024 13.006C8.67029 13.5645 8.41264 14.2705 8.41264 15C8.41264 15.7295 8.67029 16.4355 9.14024 16.994C9.59211 17.531 10.2124 17.8985 10.8992 18.0379L10.8992 21.5C10.8992 21.6592 10.9625 21.8118 11.0752 21.9243C11.1879 22.0368 11.3407 22.1 11.5 22.1C11.6593 22.1 11.8121 22.0368 11.9248 21.9243C12.0375 21.8118 12.1008 21.6592 12.1008 21.5ZM9.59663 15C9.59663 14.6243 9.70824 14.2569 9.91736 13.9445C10.1265 13.632 10.4237 13.3885 10.7716 13.2447C11.1194 13.1008 11.5021 13.0632 11.8714 13.1365C12.2406 13.2098 12.5798 13.3908 12.8459 13.6566C13.1121 13.9223 13.2934 14.2608 13.3668 14.6294C13.4402 14.9979 13.4025 15.3799 13.2585 15.727C13.1145 16.0742 12.8705 16.371 12.5575 16.5797C12.2445 16.7885 11.8765 16.9 11.5 16.9C10.9951 16.9 10.511 16.6998 10.1541 16.3434C9.79712 15.9871 9.59663 15.5039 9.59663 15ZM2.08399 8C2.08399 7.62425 2.1956 7.25693 2.40472 6.94448C2.61385 6.63203 2.9111 6.38848 3.25892 6.24465C3.60673 6.10082 3.98947 6.06319 4.35872 6.13651C4.72797 6.20984 5.06713 6.39082 5.33331 6.65656C5.59948 6.92229 5.78073 7.26083 5.85416 7.62936C5.92759 7.99789 5.88991 8.37988 5.74587 8.72704C5.60183 9.0742 5.35789 9.37095 5.04488 9.57975C4.73187 9.78854 4.36385 9.9 3.98736 9.9C3.4825 9.9 2.99836 9.69978 2.64141 9.34344C2.28448 8.98711 2.08399 8.50386 2.08399 8Z"
              fill="black"
              stroke="#262626"
              strokeWidth="0.2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchLine;
