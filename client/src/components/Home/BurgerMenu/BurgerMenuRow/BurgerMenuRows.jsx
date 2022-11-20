import React from "react";
import "./BurgerMenuRows.scss";
import homeButton from "../../../../assets/images/buttonHome.png";
import Collapsible from "react-collapsible";

function BurgerMenuRow(props) {
  return (
    <div>
      <a className="bm-item">
        <img src={homeButton} alt="homeIcon" class="fa fa-fw"></img>
        <span>Homes</span>
      </a>
      <Collapsible trigger="Start here" className="bm-item">
        <a>
          This is the collapsible content. It can be any element or React
          component you like.
        </a>
        <a>
          It can even be another Collapsible component. Check out the next
          section!
        </a>
      </Collapsible>
      <a className="bm-item">
        <img src={homeButton} alt="homeIcon" class="fa fa-fw"></img>
        <span>Homes</span>
      </a>
    </div>
  );
}

export default BurgerMenuRow;
