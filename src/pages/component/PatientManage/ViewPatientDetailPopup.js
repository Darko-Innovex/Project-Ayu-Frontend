import "../../../css/component/AdminPatientManage/ViewPatientDetails.css";
import image from "../../../img/Young bearded man with striped shirt.png";

const ViewPatientDetail = ({ hideDetails }) => {
  return (
    <div id="PatientDetails">
      <div className="background">
        <div>
          <div className="circle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className="title">
              <h1>Mr. Gayanuka Bulegoda</h1>
              <button onClick={hideDetails}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="16"
                  viewBox="0 0 41 16"
                  fill="none"
                >
                  <path
                    d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9L41 9V7L1 7L1 9Z"
                    fill="#262626"
                  />
                </svg>
                Back
              </button>
            </div>
            <div>
              <div>
                <div>
                  <h2>Date of Birth</h2>
                  <h3>2002 / 04 / 07</h3>
                </div>
                <div>
                  <img src={image} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <h2>Address</h2>
                  <h3>No.04 , Galapitamada , Wewaldeniya , Wauniyawa</h3>
                </div>
              </div>
              <div>
                <div>
                  <h2>Email</h2>
                  <h3>bulegodagayanuka@ijse.lk</h3>
                </div>
                <div className="dual">
                  <div>
                    <h2>NIC</h2>
                    <h3 className="nic">200265842695</h3>
                  </div>
                  <div>
                    <h2>Blood Type</h2>
                    <h3>A+</h3>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2>Phone Number</h2>
                  <h3>076 855 9562</h3>
                </div>
                <div>
                  <h2>Health Card Index Number</h2>
                  <h3>5874 9526 5874 9564</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatientDetail;
