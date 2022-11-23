import React from 'react';
import { Link } from 'react-router-dom';
import './EditCard.scss';
import editLogo from '../../assets/icons/edit-icon/edit48.png';
import deleteLogo from '../../assets/icons/delete-icon/del48.png';

function EditCard() {
  return (
    <Link
      className="linkAddTeamCard-editable"
      onClick={() => {
        // setEditTeam(true);
      }}
    >
      <div className="cardTeamPosition iconCard">
        {/* <h3 className="teamName">Add Team</h3> */}

        <div className="circular">
          <div className="editIcon">
            <img
              className="editTeamButton"
              src={editLogo}
              height="43"
              width="40px"
              alt="addLogo"
            />
          </div>
          <div className="deleteIcon">
            <img
              className="deleteTeamButton"
              src={deleteLogo}
              height="43"
              width="40px"
              alt="addLogo"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EditCard;
