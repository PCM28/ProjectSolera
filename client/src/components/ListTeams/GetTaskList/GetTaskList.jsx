import React from "react";

import TableRowUI from "../GetTaskListUI/TableRowUI/TableRowUI";

function GetTaskList(props) {
  const taskList = [];
  const rows = [];
  if (props.activities !== undefined) {
    if (props.activities.length !== 0) {
      props.activities.forEach((element) => {
        taskList.push(element);
      });
    }

    const ntaskList = taskList.length;

    for (let i = 0; i < ntaskList; i++) {
      rows.push(
        <TableRowUI
          activities={props.activities}
          key={taskList[i]._id}
          teamId={props.team_id}
          taskId={taskList[i]._id}
          taskName={taskList[i].name}
          editTaskState={props.editTaskState}
          functionEditTaskState={props.functionEditTaskState}
          eliminateTaskState={props.eliminateTaskState}
          functionEliminateTaskState={props.functionEliminateTaskState}
          points={taskList[i].point}
          deleteHandle={props.deleteHandle}
          saveHandler_onEdit={props.saveHandler_onEdit}
        />
      );
    }
  }
  return <tbody>{rows}</tbody>;
}

export default GetTaskList;
