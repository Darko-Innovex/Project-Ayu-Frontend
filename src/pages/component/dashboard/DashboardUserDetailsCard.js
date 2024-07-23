import "../../../css/component/dashboard/DashboardUserDetailsCard.css";
import Image from "../../../img/sideImage.png";
import hartIcon from "../../../img/hartIcon.png";
import { useState, useEffect } from "react";
import editIcon from "../../../img/profileEdit.png";
import saveIcon from "../../../img/profileSave.png";
import { Link } from "react-router-dom";
import viewMapArrow from "../../../img/ViewMapArrow.png";

const DashboardUserDetailsCard = ({ Data, type }) => {
  if (!Data) {
    Data = {
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

  let userData = {};

  if (type === "Patient") {
    userData = {
      img: Data.img,
      Name: Data.firstName + " " + Data.lastName,
      NIC: Data.nic,
      BOD: Data.dob,
      Mobile: Data.mobile,
      Email: Data.email,
      BloodType: Data.bloodType,
    };
  } else if (type === "Hospital") {
    userData = Data;
  }

  console.log(Data, "----------------GRB");

  const [mobile, setMobile] = useState(userData.Mobile);
  const [email, setEmail] = useState(userData.Email);
  const [editBtnAction, setEditBtnAction] = useState(false);
  const [editImage, setEditImage] = useState(editIcon);
  const [imagePosition, setImagePosition] = useState();

  const setMargin = type === "Hospital" ? { marginTop: "27px" } : {};

  useEffect(() => {
    setMobile(userData.Mobile);
    setEmail(userData.Email);
    if (type === "Hospital") {
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
          {type === "Hospital" ? (
            ""
          ) : (
            <div className="editIcon" onClick={handleEditAction}>
              <img src={editImage} alt="" />
            </div>
          )}
          <img style={imagePosition} src={Image} alt="" />
        </div>
        {passTags(
          userData,
          mobile,
          email,
          setMobile,
          setEmail,
          editBtnAction,
          type,
        )}
      </div>
    </div>
  );
};

const passTags = (
  data,
  mobile,
  email,
  setMobile,
  setEmail,
  editAction,
  type,
) => {
  const Tags = [];

  console.log(data, "0e9e9ejsidndunsdn");

  const setMargin =
    type === "Doctor" || type === "Hospital" ? { marginTop: "30px" } : {};

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

  if (data && type === "Patient") {
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
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
        defaultValue={mobile}
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className={highlightClass}
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        key="email"
        readOnly={!editAction}
      />,
    );
  } else if (data && type === "Doctor") {
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
        defaultValue={mobile}
        onChange={(e) => setMobile(e.target.value)}
        readOnly={!editAction}
        key="mobile"
      />,
      <h2 key="emailLabel">Email</h2>,
      <input
        type="email"
        className={highlightClass}
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        key="email"
        readOnly={!editAction}
      />,
      <div className="hospitalsCount" key="hospitalsCount">
        {setHospitalCount(data.HospitalCount)}
      </div>,
    );
  } else if (data && type === "Hospital") {
    Tags.push(
      <h2 style={setMargin} key="nameLabel">
        Name
      </h2>,
      <h1 key="name">{data.name}</h1>,
      <h2 key="locationLabel">Location</h2>,
      <h1 key="location">
        <Link to={data.location} target="_blank">
          Open In Map
        </Link>
        <img src={viewMapArrow} alt="" />
      </h1>,
      <h2 key="mobileLabel">Mobile</h2>,
      <h1 key="mobile">{data.mobile}</h1>,
      <h2 key="emailLabel">Email</h2>,
      <h1 key="email">{data.email}</h1>,
      <h2 key="websiteLabel">Website</h2>,
      <h1 key="website">
        <Link to={""} target="_blank">
          Open in Browser
        </Link>
        <img src={viewMapArrow} alt="" />
      </h1>,
    );
  }

  return Tags;
};

export default DashboardUserDetailsCard;
