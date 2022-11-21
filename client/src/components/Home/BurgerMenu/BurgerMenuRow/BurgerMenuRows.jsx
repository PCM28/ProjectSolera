import React, { useState } from "react";
import "./BurgerMenuRows.scss";
import homeButton from "../../../../assets/images/buttonHome.png";
import ExpandableRow from "../ExpandableRow/ExpandableRow";
import AddEditTask from "../../../ListTeams/AddEditTask/AddEditTask";

function BurgerMenuRow(props) {
  const [createTeam, setCreateTeam] = useState(false);

  return (
    <div>
      {createTeam && (
        <AddEditTask
          onDiscard={() => {
            setCreateTeam(false);
          }}
        ></AddEditTask>
      )}
      <a className="bm-item">
        <img src={homeButton} alt="homeIcon" class="fa fa-fw"></img>
        <span>Homes</span>
      </a>
      <a
        className="bm-item"
        onClick={() => {
          setCreateTeam(true);
        }}
      >
        <span>Create Team</span>
      </a>
      <ExpandableRow action="Modify Team" teams={props.teams}></ExpandableRow>
    </div>
  );
}

export default BurgerMenuRow;
