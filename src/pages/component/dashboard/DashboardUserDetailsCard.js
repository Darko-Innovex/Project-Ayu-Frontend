import "../../../css/component/dashboard/DashboardUserDetailsCard.css";
import Image from "../../../img/sideImage.png";
import hartIcon from "../../../img/hartIcon.png";

const DashboardUserDetailsCard = ({ userData }) => {
  if (!userData) {
    userData = {
      img: Image,
      Name: "Mr. Gayanuka Bulegoda",
      NIC: 200209805286111,
      BOD: "1949 / 02 / 04",
      Mobile: "071 101 8201",
      Email: "gayanukariviru@gmail.com",
      BloodType: "A+",
      UserType: "Patient",
    };
  }

  return (
    <div id="sideCard">
      <div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        {passTags(userData)}
      </div>
    </div>
  );
};

const passTags = (data) => {
  const Tags = [];

  const setMargin = data.UserType === "Doctor" ? { marginTop: "30px" } : {};

  const setHospitalCount = (count) => {
    const Hospitals = [];
    for (let i = 0; i < count; i++) {
      Hospitals.push(
        <div>
          <img src={hartIcon} alt="" />
        </div>,
      );
    }
    return Hospitals;
  };

  if (data && data.UserType === "Patient") {
    Tags.push(
      <div className="bloodType">{data.BloodType}</div>,
      <h2 style={setMargin}>Name</h2>,
      <h1>{data.Name}</h1>,
      <h2>NIC Number</h2>,
      <h1>{data.NIC}</h1>,
      <h2>Birthday</h2>,
      <h1>{data.BOD}</h1>,
      <h2>Mobile</h2>,
      <h1 className="highlight">{data.Mobile}</h1>,
      <h2>Email</h2>,
      <h1 className="highlight">{data.Email}</h1>,
    );
  } else if (data && data.UserType === "Doctor") {
    Tags.push(
      <h2 style={setMargin}>Name</h2>,
      <h1>{data.Name}</h1>,
      <h2>NIC Number</h2>,
      <h1>{data.NIC}</h1>,
      <h2>Mobile</h2>,
      <h1 className="highlight">{data.Mobile}</h1>,
      <h2>Email</h2>,
      <h1 className="highlight">{data.Email}</h1>,
      <div className="hospitalsCount">
        {setHospitalCount(data.HospitalCount)}
      </div>,
    );
  }

  return Tags;
};

export default DashboardUserDetailsCard;
