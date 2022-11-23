import React from "react";
import { Link } from "react-router-dom";
import "./AddCard.scss";
import addLogo from "../../assets/icons/add-icon/add96.png";

function AddCard() {
  return (
    <Link
      className="linkAddTeamCard-editable"
      onClick={() => {
        // setEditTeam(true);
      }}
    >
      <div className="cardTeamPosition">
        {/* <h3 className="teamName">Add Team</h3> */}

        <div className="circular">
          <img
            className="addTeamButton"
            src={addLogo}
            height="43"
            width="40px"
            alt="addLogo"
          />
        </div>
      </div>
    </Link>
  );
}

export default AddCard;
