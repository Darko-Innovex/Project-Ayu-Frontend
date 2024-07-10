import "../../../css/component/dashboard/DashboardUserDetailsCard.css";
import Image from "../../../img/sideImage.png";
import hartIcon from "../../../img/hartIcon.png";
import { useState, useEffect } from "react";
import editIcon from "../../../img/profileEdit.png";
import saveIcon from "../../../img/profileSave.png";

const DashboardUserDetailsCard = ({ userData }) => {
  if (!userData) {
    userData = {
      img: Image,
      Name: "Mr. Gayanuka Bulegoda",
      NIC: "200209805286111",
      BOD: "1949 / 02 / 04",
      Mobile: "071 101 8201",
      Email: "gayanukariviru@gmail.com",
      BloodType: "A+",
      UserType: "Patient",
    };
  }

  const [mobile, setMobile] = useState(userData.Mobile);
  const [email, setEmail] = useState(userData.Email);
  const [editBtnAction, setEditBtnAction] = useState(false);
  const [editImage, setEditImage] = useState(editIcon);

  useEffect(() => {
    setMobile(userData.Mobile);
    setEmail(userData.Email);
  }, [userData]);

  const handleEditAction = () => {
    if (!editBtnAction) {
      setEditImage(saveIcon);
      setEditBtnAction(!editBtnAction);
    } else {
      setEditImage(editIcon);
      setEditBtnAction(!editBtnAction);
    }
  };

  return (
    <div id="sideCard">
      <div>
        <div className="image">
          <div className="editIcon" onClick={handleEditAction}>
            <img src={editImage} alt="" />
          </div>
          <img src={Image} alt="" />
        </div>
        {passTags(userData, mobile, email, setMobile, setEmail, editBtnAction)}
      </div>
    </div>
  );
};

const passTags = (data, mobile, email, setMobile, setEmail, editAction) => {
  const Tags = [];

  const setMargin = data.UserType === "Doctor" ? { marginTop: "30px" } : {};

  const setHospitalCount = (count) => {
    const Hospitals = [];
    for (let i = 0; i < count; i++) {
      Hospitals.push(
        <div key={i}>
          <img src={hartIcon} alt="" />
        </div>,
      );
    }
    return Hospitals;
  };

  if (data && data.UserType === "Patient") {
    Tags.push(
      <div className="bloodType" key="bloodType">
        {data.BloodType}
      </div>,
      <h2 style={setMargin} key="nameLabel">
        Name
      </h2>,
      <h1 key="name">{data.Name}</h1>,
      <h2 key="nicLabel">NIC Number</h2>,
      <h1 key="nic">{data.NIC}</h1>,
      <h2 key="bodLabel">Birthday</h2>,
      <h1 key="bod">{data.BOD}</h1>,
      <h2 key="mobileLabel">Mobile</h2>,
      <input
        type="text"
        className="highlight"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className="highlight"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        key="email"
        readOnly={!editAction}
      />,
    );
  } else if (data && data.UserType === "Doctor") {
    Tags.push(
      <h2 style={setMargin} key="nameLabel">
        Name
      </h2>,
      <h1 key="name">{data.Name}</h1>,
      <h2 key="nicLabel">NIC Number</h2>,
      <h1 key="nic">{data.NIC}</h1>,
      <h2 key="mobileLabel">Mobile</h2>,
      <input
        type="text"
        className="highlight"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className="highlight"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        key="email"
        readOnly={!editAction}
      />,
      <div className="hospitalsCount" key="hospitalsCount">
        {setHospitalCount(data.HospitalCount)}
      </div>,
    );
  }

  return Tags;
};

export default DashboardUserDetailsCard;
