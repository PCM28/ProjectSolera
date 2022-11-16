import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";

function AxiosGetTaskList(props) {
  const [teams, setTeams] = useState(null);

  const baseURL = "http://localhost:5000/team";
  const teamNumber = window.location.href.slice(-1);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeams(response.data[teamNumber]);
    });
  }, []);

  if (!teams) return null;

  const taskList = [];
  teams.activities.forEach((element) => {
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
