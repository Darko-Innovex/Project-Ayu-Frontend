import "../../../css/component/dashboard/DashboardUserDetailsCard.css";
import Image from "../../../img/sideImage.png";
import hartIcon from "../../../img/hartIcon.png";
import { useState, useEffect } from "react";
import editIcon from "../../../img/profileEdit.png";
import saveIcon from "../../../img/profileSave.png";
import { Link } from "react-router-dom";
import viewMapArrow from "../../../img/ViewMapArrow.png";

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
  const [imagePosition, setImagePosition] = useState();

  const setMargin =
    userData.UserType === "Hospital" ? { marginTop: "27px" } : {};

  useEffect(() => {
    setMobile(userData.Mobile);
    setEmail(userData.Email);
    if (userData.UserType === "Hospital") {
      setEditImage(null);
      setImagePosition({ position: "static" });
    }
  }, [userData]);

  const handleEditAction = () => {
    if (!editBtnAction) {
      setEditImage(saveIcon);
      setEditBtnAction(true);
    } else {
      setEditImage(editIcon);
      setEditBtnAction(false);
    }
  };

  return (
    <div style={setMargin} id="sideCard">
      <div>
        <div className="image">
          {userData.UserType === "Hospital" ? (
            ""
          ) : (
            <div className="editIcon" onClick={handleEditAction}>
              <img src={editImage} alt="" />
            </div>
          )}
          <img style={imagePosition} src={Image} alt="" />
        </div>
        {passTags(userData, mobile, email, setMobile, setEmail, editBtnAction)}
      </div>
    </div>
  );
};

const passTags = (data, mobile, email, setMobile, setEmail, editAction) => {
  const Tags = [];

  const setMargin =
    data.UserType === "Doctor" || data.UserType === "Hospital"
      ? { marginTop: "30px" }
      : {};

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

  const highlightClass = editAction ? "highlight" : "";

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
        className={highlightClass}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className={highlightClass}
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
        className={highlightClass}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className={highlightClass}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        key="email"
        readOnly={!editAction}
      />,
      <div className="hospitalsCount" key="hospitalsCount">
        {setHospitalCount(data.HospitalCount)}
      </div>,
    );
  } else if (data && data.UserType === "Hospital") {
    Tags.push(
      <h2 style={setMargin} key="nameLabel">
        Name
      </h2>,
      <h1 key="name">{data.Name}</h1>,
      <h2 key="locationLabel">Location</h2>,
      <h1 key="location">
        <Link to={data.LocationUrl} target="_blank">
          Open In Map
        </Link>
        <img src={viewMapArrow} alt="" />
      </h1>,
      <h2 key="mobileLabel">Mobile</h2>,
      <h1 key="mobile">{data.Mobile}</h1>,
      <h2 key="emailLabel">Email</h2>,
      <h1 key="email">{data.Email}</h1>,
      <h2 key="websiteLabel">Website</h2>,
      <h1 key="website">
        <Link to={data.WebiteUrl} target="_blank">
          Open in Browser
        </Link>
        <img src={viewMapArrow} alt="" />
      </h1>,
    );
  }

  return Tags;
};

export default DashboardUserDetailsCard;
