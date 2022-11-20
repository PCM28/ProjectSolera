import React from "react";
import "./Header.scss";
import homeButton from "../../assets/images/buttonHome.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../../components/Home/BurgerMenu/BurgerMenu";
import BurgerMenuButton from "../../components/Home/BurgerMenu/BurgerMenuButton/BurgerMenuButton";

function Header() {
  return (
    <div className="Head">
      <h1 className="mainTitle">SOLERA TEAMS. BOOTCAMP 4</h1>
      {/* <BurgerMenuButton></BurgerMenuButton> */}
      <BurgerMenu></BurgerMenu>
      {/* <Link to="/"><img src={homeButton} alt="img" srcSet="" /></Link> */}
    </div>
  );
}

export default Header;
