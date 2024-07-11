import "../../css/component/HospitalOurDoctorCard.css";
import doctorImage from "../../img/doctorImage.png";

const HospitalOurDoctorCard = ({ data }) => {
  return (
    <div id="HospitalOurDoctorCard">
      <div className="image">
        <img src={doctorImage} alt="" />
      </div>
      <h1>D -01</h1>
      <h2>Dr. Gayanuka Bulegoda</h2>
      <h3>Neurologist</h3>
      <button>View more </button>
    </div>
  );
};

export default HospitalOurDoctorCard;
