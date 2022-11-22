import React, { useState } from "react";
import "./Header.scss";
import homeButton from "../../assets/images/buttonHome.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../../components/Home/BurgerMenu/BurgerMenu";
import SwitchButton from "../../components/Home/SwitchButton/SwitchButton";

function Header() {
  const [isHome, setIsHome] = useState(true);
  let currentPage = window.location.href;

  setInterval(function () {
    let newPage = window.location.href;
    if (currentPage != newPage) {
      currentPage = newPage;
      console.log("PAGE CHANGED");
      setIsHome(
        newPage.slice(-1) == "/" || newPage == "http://localhost:3000/editTeams"
      );
    }
  }, 500);

  return (
    <div className="Head">
      <h1 className="mainTitle">SOLERA TEAMS. BOOTCAMP 4</h1>
      {/* <BurgerMenu></BurgerMenu> */}
      {isHome && <SwitchButton></SwitchButton>}
      {!isHome && (
        <Link to="/">
          <img src={homeButton} alt="img" srcSet="" />
        </Link>
      )}
    </div>
  );
}

export default Header;
