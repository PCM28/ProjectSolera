import axios from "axios";
import React, { useState } from "react";
import GetTaskList from "../GetTaskList/GetTaskList";
function GetTaskListUI(props) {
  const [editTask, setEditTask] = useState(false);
  const [eliminateTask, setEliminateTask] = useState(false);
  const activityURL = "http://localhost:5000/activities";

  const editActivity = (editActivityURL, activity) => {
    axios.put(editActivityURL, activity).then(() => {
      console.log("Save Pressed");
      setEditTask(false);
    });
  };

  function saveHandler_onEdit(taskId, taskName, taskPoints, teamId) {
    let activity = { name: taskName, point: taskPoints };
    const editActivityURL = activityURL + "/" + taskId;
    editActivity(editActivityURL, activity);
  }

  function deleteHandler(taskId) {
    console.log("Delete Pressed");
    const deleteActivityURL = activityURL + "/" + taskId;
    axios.delete(deleteActivityURL).then(setEliminateTask(false));
  }

  return (
    <GetTaskList
      activities={props.team.activities}
      team_id={props.team._id}
      editTaskState={editTask}
      functionEditTaskState={setEditTask}
      eliminateTaskState={eliminateTask}
      functionEliminateTaskState={setEliminateTask}
      deleteHandle={deleteHandler}
      saveHandler_onEdit={saveHandler_onEdit}
    />
  );
}

export default GetTaskListUI;
