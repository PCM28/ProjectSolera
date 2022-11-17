import React from "react";

import TableRow from "./TableRow/TableRow";

function AxiosGetTaskList(props) {
  const taskList = [];
  props.team.activities.forEach((element) => {
    taskList.push(element);
  });

  const ntaskList = taskList.length;
  const rows = [];
  for (let i = 0; i < ntaskList; i++) {
    rows.push(
      <TableRow
        teamId={props.team._id}
        taskId={taskList[i]._id}
        taskName={taskList[i].name}
        points={taskList[i].point}
      ></TableRow>
    );
  }

  return <tbody>{rows}</tbody>;
}

export default AxiosGetTaskList;
