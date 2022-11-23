import React, { useState } from "react";
import Button from "../../../ListTeams/RemoveConfirm/UI/Button";
import Card from "../../../ListTeams/RemoveConfirm/UI/Card";
import "./EditDeleteTeam.scss";
import alertLogo from "../../../../assets/images/alertLogo.jpg";

function AddEditTeam(props) {
  const [enteredId, setEnteredId] = useState(props.id);
  const [enteredTeam, setEnteredTeam] = useState(props.teamName);
  const [isTeamValid, setTeamIsValid] = useState(true);

  const TeamChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTeamIsValid(true);
    }
    setEnteredTeam(event.target.value);
  };

  const addTeamHandler = (event) => {
    event.preventDefault();

    if (enteredTeam.trim().length === 0) {
      setTeamIsValid(false);
      return;
    }
    props.onSave(enteredId, enteredTeam);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <Card className="modal">
        <header className="header">
          <h2>Edit Team</h2>
        </header>
        <form onSubmit={addTeamHandler}>
          <div className={!isTeamValid ? "invalid" : "input"}>
            <label htmlFor="Team">Team Name</label>
            <input
              type="text"
              id="TeamName"
              defaultValue={props.TeamName}
              onChange={TeamChangeHandler}
            ></input>
            {!isTeamValid && (
              <div className="alert">
                <img
                  style={{ width: 25, marginTop: -5 }}
                  src={alertLogo}
                  alt="alert"
                />
                <label htmlFor="alert">Enter a valid Team Name</label>
              </div>
            )}
          </div>
          <footer className="actions" name="Save">
            <Button key="0" type="delete">
              Delete Team
            </Button>
            <Button key="1" type="submit">
              Save
            </Button>
            <Button key="2" type="discard" onClick={props.onDiscard}>
              Discard
            </Button>
          </footer>
        </form>
      </Card>
    </div>
  );
}

export default AddEditTeam;
