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

  {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        {isOpen && <div className="backdrop"></div>}
        <Menu right className="burger" width={265} onStateChange={isMenuOpen}>
          <BurgerMenuRow className="menu-item"></BurgerMenuRow>

          {/* <a id="miHome" className="menu-item" href="/">
          Home
        </a>
        <a
          id="miModify"
          onClick={this.showSettings}
          className="menu-item--small"
          href=""
        >
          Modify Teams
        </a>
        <a
          id="miAdd"
          onClick={this.showSettings}
          className="menu-item--small"
          href=""
        >
          Add Team
        </a> */}
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
