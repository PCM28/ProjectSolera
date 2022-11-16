import React from "react";
import Button from "../UI/Button";
import "./TableRow.scss";
import editLogo from "../../../../assets/icons/edit-icon/edit96.png";
import deleteLogo from "../../../../assets/icons/delete-icon/del96.png";

function TableRow(props) {
  return (
    <tr>
      <td>{props.taskName}</td>
      <td>{props.points}</td>
      <td>
        <button className="edit" onClick={props.onClickSave}>
          <img src={editLogo} height="40px" width="40px" alt="editLogo" />
        </button>
        <button className="delete" onClick={props.onClickDelete}>
          <img src={deleteLogo} height="40px" width="40px" alt="deleteLogo" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
