import AyuLogo from "../../../img/AyuLogo.png";
import "../../../css/component/dashboard/Navbar.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutButton from "./button/LogOutButton";

const Navbar = ({ components, Paths, LogOut }) => {
  const [activePath, setActivePath] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  useState(() => {
    setActivePath(location.pathname);
  }, []);

  const renderedComponents = components.map((Component, i) => (
    <Link
      to={Paths[i]}
      key={i}
      className={activePath === Paths[i] ? "active" : ""}
      onClick={() => handleLinkClick(Paths[i])}
    >
      <Component />
    </Link>
  ));

  const handelLogOut = () => {
    navigate("/");
    localStorage.setItem("schedule", "false");
  };

  return (
    <div id="navBar">
      <div>
        <img src={AyuLogo} alt="AyuLogo" />
        <div className="buttons">{renderedComponents}</div>
        <LogOutButton logOut={handelLogOut} />
      </div>
    </div>
  );
};

export default Navbar;
