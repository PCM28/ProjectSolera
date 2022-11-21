import React from "react";

function AddEditTeam() {
  const [enteredId, setEnteredId] = useState(props.id);
  const [enteredTeam, setEnteredTeam] = useState(props.taskName);
  const [isTeamValid, setTeamIsValid] = useState(true);
  const [teamExist, setTeamExist] = useState(false);

  const teams = [];

  const teamChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTeamIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTeam.trim().length === 0) {
      setTaskIsValid(false);
      return;
    } else if (teams.includes(enteredTeam)) {
      setTeamExist(true);
      return;
    }
    props.onSave(enteredId, enteredTeam);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <Card className="modal">
        <header className="header">
          <h2>{props.action} Task</h2>
        </header>
        <form onSubmit={addTaskHandler}>
          <div className={!isTaskValid ? "invalid" : "input"}>
            <label htmlFor="task">Task Name</label>
            <input
              type="text"
              id="taskName"
              defaultValue={props.taskName}
              onChange={taskChangeHandler}
            ></input>
            {!isTaskValid ? (
              <div className="alert">
                <img
                  style={{ width: 25, marginTop: -5 }}
                  src={alertLogo}
                  alt="alert"
                />
                <label htmlFor="alert">Enter a valid Task Name</label>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={!isPointValid ? "invalid" : "input"}>
            <label htmlFor="points">Points</label>
            <input
              type="number"
              id="points"
              defaultValue={props.points}
              onChange={pointsChangeHandler}
            ></input>
            {!isPointValid ? (
              <div className="alert">
                <img
                  style={{ width: 25, marginTop: -5 }}
                  src={alertLogo}
                  alt="alert"
                />
                <label htmlFor="alert">Enter valid Points</label>
              </div>
            ) : (
              ""
            )}
          </div>
          <footer className="actions" name="Save">
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
