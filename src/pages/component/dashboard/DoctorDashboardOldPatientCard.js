import "../../../css/component/dashboard/DoctorDashboardOldPatientCard.css";
import image from "../../../img/Young bearded man with striped shirt.png";

const DoctorDashboardOldPatientCard = ({ data }) => {
  data = {
    img: image,
    No: 25,
    name: "Mr. Gayanuka Bulegoda",
    date: "2024 / 05 / 14",
  };

  return (
    <div id="OldPatientCard">
      <div className="image">
        <img src={data.img} alt="" />
      </div>
      <div>
        <h1 className="No">No - {data.No}</h1>
        <h1 className="name">{data.name}</h1>
        <h1 className="date">{data.date}</h1>
      </div>
    </div>
  );
};

export default DoctorDashboardOldPatientCard;
