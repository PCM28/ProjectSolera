import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./ListTeam.scss";
import addLogo from "../../assets/icons/add-icon/add96.png";
import sound from "../../assets/audio/SUIII.mp3";
import AddEditTask from "./AddEditTask/AddEditTask";
import AxiosGetTaskList from "./AxiosGetTaskList/AxiosGetTaskList";
import axios from "axios";

function ListTeam() {
  const [newTask, setNewTask] = useState(false);
  const [teams, setTeams] = useState(null);
  const [activityDB, setActivityDB] = useState(null);

  let points = 0;
  const audio = new Audio(sound);
  const POSITION_ID_URL = 4;
  const baseURL = "http://localhost:5000/teams";
  const activityURL = "http://localhost:5000/activities";
  const teamNumber = window.location.href.split("/")[POSITION_ID_URL] - 1;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeams(response.data[teamNumber]);
    });
  }, []);
  if (teams === null) return null;
  if (teams === undefined) return <Navigate to="/404" />;

  console.log(teams);
  console.log(activityDB);
  if (teams.activities.length !== 0) {
    teams.activities.forEach((element) => {
      points += element.point;
    });
  } else {
    points = 0;
  }

  function saveHandler_onAdd(Taskname, points, id_team) {
    console.log("Save Pressed", Taskname, points, id_team);
    let activity = { name: Taskname, point: points };
    axios
      .post(activityURL, activity)
      .then((response) => setActivityDB(response.data));
    console.log(activityDB);
    audio.play();
    //put save method here
    setNewTask(false);
  }

  return (
    <table>
      {newTask && (
        <AddEditTask
          action="Add"
          teamId={teams._id}
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
      <AxiosGetTaskList team={teams}></AxiosGetTaskList>
    </table>
  );
}

export default ListTeam;
