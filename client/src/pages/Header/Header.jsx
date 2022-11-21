import React from "react";
import "./Header.scss";
import homeButton from "../../assets/images/buttonHome.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../../components/Home/BurgerMenu/BurgerMenu";
import SwitchButton from "../../components/Home/SwitchButton/SwitchButton";

function Header(props) {
  return (
    <div className="Head">
      <h1 className="mainTitle">SOLERA TEAMS. BOOTCAMP 4</h1>
      {/* <BurgerMenu></BurgerMenu> */}
      {/* <Link to="/"><img src={homeButton} alt="img" srcSet="" /></Link> */}
      <SwitchButton></SwitchButton>
    </div>
  );
}

export default Header;
