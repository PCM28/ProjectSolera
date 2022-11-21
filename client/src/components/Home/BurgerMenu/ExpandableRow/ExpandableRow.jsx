import React, { useState } from "react";
import "./ExpandableRow.scss";
import Collapsible from "react-collapsible";
import AddEditTask from "../../../ListTeams/AddEditTask/AddEditTask";

function ExpandablePopulator(props) {
  const [newTask, setNewTask] = useState(false);
  const populate = [];

  props.teams.forEach((element) => {
    populate.push(
      <p>
        <a
          onClick={() => {
            setNewTask(true);
          }}
        >
          {element}
        </a>
      </p>
    );
  });

  return (
    <div>
      {newTask && (
        <AddEditTask
          id=""
          action={props.action}
          //   teamId={teams._id}
          taskName=""
          points="0"
          //   onSave={saveHandler_onAdd}
          onDiscard={() => {
            setNewTask(false);
          }}
        ></AddEditTask>
      )}
      <Collapsible trigger={props.action} className="bm-item">
        {populate}
      </Collapsible>
    </div>
  );
}

export default ExpandablePopulator;
