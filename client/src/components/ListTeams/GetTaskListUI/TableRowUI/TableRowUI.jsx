import TableRow from "../../GetTaskList/TableRow/TableRow";

function TableRowUI(props) {
  return (
    <TableRow
      editTaskState={props.editTaskState}
      functionEditTaskState={props.functionEditTaskState}
      eliminateTaskState={props.eliminateTaskState}
      functionEliminateTaskState={props.functionEliminateTaskState}
      taskId={props.taskId}
      teamId={props.teamId}
      taskName={props.taskName}
      points={props.points.toString()}
      deleteHandle={props.deleteHandle}
      activities={props.activities}
      saveHandler_onEdit={props.saveHandler_onEdit}
    />
  );
}

export default TableRowUI;
