import React from 'react';
import editLogo from '../../assets/icons/edit-icon/edit48.png';
import deleteLogo from '../../assets/icons/delete-icon/del48.png';
import './EditCard.scss';

function EditCard() {
  // const [editTeam, setEditTeam] = useState(false);
  // const editable = props.editable;
  return (
    <div>
      {/* {editTeam && (
        <EditDeleteTeam
          id=""
          teamName=""
          onDiscard={() => {
            setEditTeam(false);
          }}
        />
      )} */}
      <div className="editCardPosition">
        <div className="iconContainer">
          <img
            className="editButton"
            src={editLogo}
            height="40px"
            width="40px"
            alt="addLogo"
          />
        </div>
        <div className="iconContainer">
          <img
            className="deleteButton"
            src={deleteLogo}
            height="43px"
            width="40px"
            alt="addLogo"
          />
        </div>
      </div>
    </div>
  );
}

export default EditCard;
