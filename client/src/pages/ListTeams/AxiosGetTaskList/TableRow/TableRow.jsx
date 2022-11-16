import React, { useState, useEffect } from "react";
import "./TableRow.scss";
import sound from "../../../../assets/audio/SUIII.mp3";
import editLogo from "../../../../assets/icons/edit-icon/edit96.png";
import deleteLogo from "../../../../assets/icons/delete-icon/del96.png";
import AddEditTask from "../../AddEditTask/AddEditTask";
import RemoveConfirm from "../../RemoveConfirm/RemoveConfirm";

function TableRow(props) {
  const [editTask, setEditTask] = useState(false);
  const [eliminateTask, setEliminateTask] = useState(false);

  const audio = new Audio(sound);

  function saveHandler_onEdit(returnValue) {
    console.log("Save Pressed");
    //put save method here
    setEditTask(false);
  }

  const deleteHandler = () => {
    console.log("Delete Pressed");
    //put delete method here
    setEliminateTask(false);
  };
  return (
    <tr>
      {editTask && (
        <AddEditTask
          id={props.taskId}
          teamId={props.teamId}
          action="Edit"
          taskName={props.taskName}
          points={props.points}
          onSave={saveHandler_onEdit}
          onDiscard={() => {
            setEditTask(false);
          }}
        ></AddEditTask>
      )}
      {eliminateTask && (
        <RemoveConfirm
          teamId={props.teamId}
          title="Confirm Delete"
          message="The following Task will be deleted:"
          id={props.id}
          taskName={props.taskName}
          onDelete={deleteHandler}
          onCancel={() => {
            console.log("Delete canceled");
            setEliminateTask(false);
          }}
        ></RemoveConfirm>
      )}
      <td>{props.taskName}</td>
      <td>{props.points}</td>
      <td>
        <button className="edit" onClick={() => setEditTask(true)}>
          <img src={editLogo} height="40px" width="40px" alt="editLogo" />
        </button>
        <button className="delete" onClick={() => setEliminateTask(true)}>
          <img src={deleteLogo} height="40px" width="40px" alt="deleteLogo" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
