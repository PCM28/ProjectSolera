import React from 'react';
import { Link } from 'react-router-dom';
import './EditCard.scss';
import editLogo from '../../assets/icons/edit-icon/edit48.png';
import deleteLogo from '../../assets/icons/delete-icon/del48.png';

function EditCard() {
  return (
    // <Link
    //   className="linkEditTeamCard-editable"
    //   onClick={() => {
    //     // setEditTeam(true);
    //   }}
    // >
    <div className="linkEditTeamCard-editable">
      <div className="cardTeamPosition iconCard">
        <div className="circular">
          <Link onClick={''}>
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
          <Link onClick={''}>
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

    //</Link>
  );
}

export default EditCard;
