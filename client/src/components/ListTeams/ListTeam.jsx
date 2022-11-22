import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./ListTeam.scss";
import addLogo from "../../assets/icons/add-icon/add96.png";
import AddEditTask from "./AddEditTask/AddEditTask";
import GetTaskListUI from "./GetTaskListUI/GetTaskListUI";
import axios from "axios";

function ListTeam() {
  const [newTask, setNewTask] = useState(false);
  const [teams, setTeams] = useState(null);

  let points = 0;
  const POSITION_ID_URL = 4;
  const baseURL = "http://localhost:5000/teams";
  const activityURL = "http://localhost:5000/activities";
  const teamNumber = window.location.href.split("/")[POSITION_ID_URL] - 1;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeams(response.data[teamNumber]);
    });
  });

  if (teams === null) return null;
  if (teams === undefined) return <Navigate to="/404" />;

  if (teams.activities.length !== 0) {
    teams.activities.forEach((element) => {
      points += element.point;
    });
  } else {
    points = 0;
  }

  function putActivity(activityURL, activity, baseURL, id_team) {
    axios.post(activityURL, activity).then((response) => {
      const activityID = response.data._id;
      const teamURL = baseURL + "/" + id_team;
      axios.get(teamURL).then((response) => {
        const team = response.data;
        team.activities.push(activityID);
        axios.put(teamURL, team).then(setNewTask(false));
      });
    });
  }

  function saveHandler_onAdd(TaskId, Taskname, points, id_team) {
    console.log("Save Pressed", Taskname, points, id_team);
    let activity = { name: Taskname, point: points };
    console.log(activity);
    putActivity(activityURL, activity, baseURL, id_team);
    //audio.play();
    //put save method here
  }

  return (
    <table>
      {newTask && (
        <AddEditTask
          id=""
          action="Add"
          teamId={teams._id}
          activities={teams.activities}
          taskName=""
          points="0"
          onSave={saveHandler_onAdd}
          onDiscard={() => {
            setNewTask(false);
          }}
        ></AddEditTask>
      )}
      <thead>
        <tr>
          <th className="title" id="left">
            {teams.name}
          </th>
          <th className="title">Total pts: {points}</th>
          <th id="right">
            <button
              className="add"
              type="button"
              onClick={() => setNewTask(true)}
            >
              {" "}
              <img
                className="addButton"
                src={addLogo}
                height="43"
                width="40px"
                alt="addLogo"
              />
            </button>
          </th>
        </tr>
      </thead>
      <GetTaskListUI team={teams} />
    </table>
  );
}

export default ListTeam;
