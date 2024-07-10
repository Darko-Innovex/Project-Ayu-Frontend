import Image from "../../img/Young bearded man with striped shirt.png";

const DoctorOldPatientCard = () => {
  return (
    <div className="oldPatientCard">
      <div>
        <img src={Image} alt="" />
      </div>
      <div>
        <h1>No - 25</h1>
        <h2>Mr. Gayanuka Bulegoda</h2>
        <h3>2024 / 05 / 14</h3>
      </div>
    </div>
  );
};

export default DoctorOldPatientCard;
