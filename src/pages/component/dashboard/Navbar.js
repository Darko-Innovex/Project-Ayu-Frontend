import AyuLogo from "../../../img/AyuLogo.png";
import "../../../css/component/dashboard/Navbar.css";
import { Link } from "react-router-dom";
import LogOutButton from "./button/LogOutButton";

const Navbar = ({ components, Paths }) => {
  const renderedComponents = [];

  for (let i = 0; i < components.length; i++) {
    const Component = components[i];
    renderedComponents.push(
      <Link to={Paths[i]}>
        <Component key={i} />
      </Link>,
    );
  }

  return (
    <div id="navBar">
      <div>
        <img src={AyuLogo} alt="AyuLogo" />
        <div className="buttons">{renderedComponents}</div>
        <LogOutButton />
      </div>
    </div>
  );
};

export default Navbar;
