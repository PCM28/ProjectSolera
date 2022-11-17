import React, { useState } from "react";
import "./TableRow.scss";
import axios from "axios";
import editLogo from "../../../../assets/icons/edit-icon/edit96.png";
import deleteLogo from "../../../../assets/icons/delete-icon/del96.png";
import AddEditTask from "../../AddEditTask/AddEditTask";
import RemoveConfirm from "../../RemoveConfirm/RemoveConfirm";

function TableRow(props) {
  const [editTask, setEditTask] = useState(false);
  const [eliminateTask, setEliminateTask] = useState(false);
  const activityURL = "http://localhost:5000/activities";

  function saveHandler_onEdit(taskId, taskName, taskPoints, teamId) {
    let activity = { name: taskName, point: taskPoints };
    const editActivityURL = activityURL + "/" + taskId;
    axios.put(editActivityURL, activity).then(window.location.reload());
    console.log("Save Pressed");
    //put save method here
    setEditTask(false);
  }

  return (
    <tr>
      {editTask && (
        <AddEditTask
          id={props.taskId}
          teamId={props.teamId}
          action="Edit"
          taskName={props.taskName}
          points={props.points.toString()}
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
          id={props.taskId}
          taskName={props.taskName}
          onDelete={() => {
            console.log("Deleted saved");
            setEliminateTask(false);
          }}
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
