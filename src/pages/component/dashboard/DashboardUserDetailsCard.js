import "../../../css/component/dashboard/sideCard.css";
import Image from "../../../img/sideImage.png";

const DashboardUserDetailsCard = () => {
  return (
    <div id="sideCard">
      <div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="bloodType">A+</div>
        <h2>Name</h2>
        <h1>Mr. Gayanuka Bulegoda</h1>
        <h2>NIC Number</h2>
        <h1>200209805286</h1>
        <h2>Birthday</h2>
        <h1>1949 / 02 / 04</h1>
        <h2>Mobile</h2>
        <h1 className="highlight">071 101 8201</h1>
        <h2>Email</h2>
        <h1 className="highlight">gayanukariviru@gmail.com</h1>
      </div>
    </div>
  );
};

export default DashboardUserDetailsCard;
