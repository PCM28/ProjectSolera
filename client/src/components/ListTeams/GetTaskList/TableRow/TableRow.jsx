import "./TableRow.scss";
import editLogo from "../../../../assets/icons/edit-icon/edit96.png";
import deleteLogo from "../../../../assets/icons/delete-icon/del96.png";
import AddEditTask from "../../AddEditTask/AddEditTask";
import RemoveConfirm from "../../RemoveConfirm/RemoveConfirm";

function TableRow(props) {
  const editTask = props.editTaskState;
  const setEditTask = props.functionEditTaskState;
  const eliminateTask = props.eliminateTaskState;
  const setEliminateTask = props.functionEliminateTaskState;

  return (
    <tr>
      {editTask && (
        <AddEditTask
          id={props.taskId}
          teamId={props.teamId}
          action="Edit"
          activities={props.activities}
          taskName={props.taskName}
          points={props.points.toString()}
          onSave={props.saveHandler_onEdit}
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
          onDelete={props.deleteHandle}
          onCancel={() => {
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
