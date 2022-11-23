import React, { useState } from "react";
import "./Header.scss";
import homeButton from "../../assets/images/buttonHome.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../../components/Home/BurgerMenu/BurgerMenu";
import SwitchButton from "../../components/Home/SwitchButton/SwitchButton";

function Header() {
  const [isHome, setIsHome] = useState(true);
  const POSITION_HOME_URL = 3;
  let currentPage = window.location.href;

  setInterval(() => {
    let newPage = window.location.href;
    if (currentPage != newPage) {
      currentPage = newPage;
      setIsHome(
        newPage.split("/")[POSITION_HOME_URL] === "" ||
          newPage.split("/")[POSITION_HOME_URL] === "editTeams"
      );
    }
  }, 500);

  return (
    <div className="Head">
      <h1 className="mainTitle">SOLERA TEAMS. BOOTCAMP 4</h1>
      {/* <BurgerMenu></BurgerMenu> */}
      {isHome ? (
        <SwitchButton></SwitchButton>
      ) : (
        <Link to="/">
          <img src={homeButton} alt="img" srcSet="" />
        </Link>
      )}
    </div>
  );
}

export default Header;
