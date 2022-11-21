import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import "./BurgerMenu.scss";
import BurgerMenuRow from "./BurgerMenuRow/BurgerMenuRows";
import homeButton from "../../../assets/images/buttonHome.png";

//npm install react-burger-menu --save

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(true);

  function isMenuOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const teams = [
    "Team 1",
    "Team 2",
    "Team 3",
    "Team 4",
    "Team 5",
    "Team 6",
    "Team 7",
    "Team 8",
    "Team 9",
    "Team 10",
  ];

  {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        {isOpen && <div className="backdrop"></div>}
        <Menu right className="burger" width={265} onStateChange={isMenuOpen}>
          <BurgerMenuRow className="menu-item" teams={teams}></BurgerMenuRow>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
