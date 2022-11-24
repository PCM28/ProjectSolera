import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditCard.scss";
import editLogo from "../../assets/icons/edit-icon/edit48.png";
import deleteLogo from "../../assets/icons/delete-icon/del48.png";
import EditDeleteTeam from "../Home/SwitchButton/EditDeleteTeam/EditDeleteTeam";
import RemoveConfirm from "../ListTeams/RemoveConfirm/RemoveConfirm";

function EditCard() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div>
      {isEdit && (
        <EditDeleteTeam
          onDiscard={() => {
            setIsEdit(false);
          }}
        ></EditDeleteTeam>
      )}
      {isDelete && (
        <RemoveConfirm
          onDiscard={() => {
            setIsDelete(false);
          }}
        ></RemoveConfirm>
      )}
      <div className="linkEditTeamCard-editable">
        <div className="cardTeamPosition iconCard">
          <div className="circular">
            <Link
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <div className="icon editIcon">
                <img
                  className="editTeamButton"
                  src={editLogo}
                  height="40px"
                  width="40px"
                  alt="addLogo"
                />
              </div>
            </Link>
            <Link
              onClick={() => {
                setIsDelete(true);
              }}
            >
              <div className="icon deleteIcon">
                <img
                  className="deleteTeamButton"
                  src={deleteLogo}
                  height="40px"
                  width="40px"
                  alt="addLogo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
