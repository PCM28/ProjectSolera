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
        taskName={taskList[i].name}
        points={taskList[i].point}
        onClickSave={props.onClickSave}
        onClickDelete={props.onClickDelete}
      ></TableRow>
    );
  }

  return <tbody>{rows}</tbody>;
}

export default AxiosGetTaskList;
