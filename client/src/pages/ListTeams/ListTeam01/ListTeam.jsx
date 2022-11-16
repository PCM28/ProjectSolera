import React, { useState } from "react";
import "./ListTeam.scss";
import AddTask from "./AddTask/AddTask";
import RemoveConfirm from "../RemoveConfirm/RemoveConfirm";
import editLogo from "../../../assets/icons/edit-icon/edit96.png";
import deleteLogo from "../../../assets/icons/delete-icon/del96.png";
import addLogo from "../../../assets/icons/add-icon/add96.png";
import sound from "../../../assets/audio/SUIII.mp3";
import AxiosGetTaskList from "./AxiosGetTaskList/AxiosGetTaskList";

function ListTeam01() {
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [eliminateTask, setEliminateTask] = useState(false);
  const audio = new Audio(sound);
  // const rows = [];

  // for (let index = 0; index < 10; index++) {
  //   rows.push(
  //     <tr>
  //       <td>Trabajo en equipo 1</td>
  //       <td>0 puntos</td>
  //       <td>
  //         <button className="edit" onClick={() => setEditTask(true)}>
  //           <img src={editLogo} height="40px" width="40px" alt="editLogo" />
  //         </button>
  //         <button className="delete" onClick={() => setEliminateTask(true)}>
  //           <img src={deleteLogo} height="40px" width="40px" alt="deleteLogo" />
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // }

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
        onClickSave={() => setEditTask(true)}
        onClickDelete={() => setEliminateTask(true)}
      ></AxiosGetTaskList>
    </table>
  );
}

export default ListTeam01;
