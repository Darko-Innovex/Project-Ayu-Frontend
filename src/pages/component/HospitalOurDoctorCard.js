import "../../css/component/HospitalOurDoctorCard.css";
import doctorImage from "../../img/doctorImage.png";

const HospitalOurDoctorCard = ({ data, handelViewDoctor }) => {
  return (
    <div id="HospitalOurDoctorCard">
      <div className="image">
        <img src={doctorImage} alt="" />
      </div>
      <h1>D - 0{data.id}</h1>
      <h2>Dr. {data.name}</h2>
      <h3>{data.speciality}</h3>
      <button onClick={() => handelViewDoctor(data)}>View more </button>
    </div>
  );
};

export default HospitalOurDoctorCard;
