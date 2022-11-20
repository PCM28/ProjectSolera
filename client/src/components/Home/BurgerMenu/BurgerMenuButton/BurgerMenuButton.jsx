import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import "../BurgerMenu.scss";
import BurgerMenuRow from "../BurgerMenu";

function BurgerMenuButton() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div>
      <Menu right className="burger" width={265} isOpen={showMenu} />
      <button
        onClick={() => {
          setshowMenu(true);
        }}
      ></button>
    </div>
  );
}

export default BurgerMenuButton;
