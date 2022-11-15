import React, { useState } from "react";
import "./ListTeam.scss";
import AddTask from "./AddTask/AddTask";
import WindowAlert from "../RemoveConfirm/RemoveConfirm";

function ListTeam01() {
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const rows = [];
  for (let index = 0; index < 10; index++) {
    rows.push(
      <tr>
        <td>Trabajo en equipo 1</td>
        <td>0 puntos</td>
        <td>
          <button className="edit" onClick={() => setEditTask(true)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
              height="40"
              width="40px"
              alt="editLogo"
            />
          </button>
          <button className="delete">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
              height="40"
              width="40px"
              alt="deleteLogo"
            />
          </button>
        </td>
      </tr>
    );
  }

  function saveHandler_onAdd(returnValue) {
    console.log("Save Pressed");
    //put save method here
    setNewTask(false);
  }

  const discardHandler_onAdd = () => {
    setNewTask(false);
  };

  function saveHandler_onEdit(returnValue) {
    console.log("Save Pressed");
    //put save method here
    setEditTask(false);
  }

  const discardHandler_onEdit = () => {
    setEditTask(false);
  };

  return (
    <table>
      {newTask && (
        <AddTask
          action="Add"
          taskName=""
          points=""
          onSave={saveHandler_onAdd}
          onDiscard={discardHandler_onAdd}
        ></AddTask>
      )}
      {editTask && (
        <AddTask
          action="Edit"
          taskName=""
          points=""
          onSave={saveHandler_onEdit}
          onDiscard={discardHandler_onEdit}
        ></AddTask>
      )}
      <thead>
        <tr>
          <th className="title" id="left">
            TEAM1
          </th>
          <th className="title">10 puntos total</th>
          <th id="right">
            <button
              className="add"
              type="button"
              onClick={() => setNewTask(true)}
            >
              {" "}
              <img
                className="addButton"
                src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
                height="43"
                width="40px"
                alt="addLogo"
              />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ListTeam01;