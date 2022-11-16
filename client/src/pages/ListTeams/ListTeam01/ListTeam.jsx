import React, { useState, useEffect } from "react";
import "./ListTeam.scss";
import AddTask from "./AddTask/AddTask";
import RemoveConfirm from "../RemoveConfirm/RemoveConfirm";
import addLogo from "../../../assets/icons/add-icon/add96.png";
import sound from "../../../assets/audio/SUIII.mp3";
import AxiosGetTaskList from "./AxiosGetTaskList/AxiosGetTaskList";
import axios from "axios";

function ListTeam01() {
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [eliminateTask, setEliminateTask] = useState(false);
  const [teams, setTeams] = useState(null);

  let points = 0;
  const audio = new Audio(sound);

  const baseURL = "http://localhost:5000/team";
  const teamNumber = window.location.href.split("/")[4] - 1;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeams(response.data[teamNumber]);
    });
  }, []);
  if (!teams) return null;

  if (teams.activities.length !== 0) {
    teams.activities.forEach((element) => {
      points += element.point;
    });
  } else {
    points = 0;
  }

  function saveHandler_onAdd(returnValue) {
    console.log("Save Pressed");
    audio.play();
    //put save method here
    setNewTask(false);
  }

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
    <table>
      {newTask && (
        <AddTask
          action="Add"
          taskName=""
          points=""
          onSave={saveHandler_onAdd}
          onDiscard={() => {
            setNewTask(false);
          }}
        ></AddTask>
      )}
      {editTask && (
        <AddTask
          action="Edit"
          taskName=""
          points=""
          onSave={saveHandler_onEdit}
          onDiscard={() => {
            setEditTask(false);
          }}
        ></AddTask>
      )}
      {eliminateTask && (
        <RemoveConfirm
          title="Confirm Delete"
          message="The following Task will be deleted:"
          taskName=""
          onDelete={deleteHandler}
          onCancel={() => {
            setEliminateTask(false);
          }}
        ></RemoveConfirm>
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
      <AxiosGetTaskList
        team={teams}
        onClickSave={() => setEditTask(true)}
        onClickDelete={() => setEliminateTask(true)}
      ></AxiosGetTaskList>
    </table>
  );
}

export default ListTeam01;
