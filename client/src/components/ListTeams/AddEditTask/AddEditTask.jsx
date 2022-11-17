import React, { useState } from 'react';
import Button from '../RemoveConfirm/UI/Button';
import Card from '../RemoveConfirm/UI/Card';
import './AddEditTask.scss';
import alertLogo from '../../../assets/images/alertLogo.jpg';

function AddEditTask(props) {
  const [enteredId, setEnteredId] = useState(props.id);
  const [enteredTask, setEnteredTask] = useState(props.taskName);
  const [enteredPoints, setEnteredPoints] = useState(props.points);
  const [isTaskValid, setTaskIsValid] = useState(true);
  const [isPointValid, setPointIsValid] = useState(true);

  //Eddit Method Task
  const taskChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTaskIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  // Eddit Method Points
  const pointsChangeHandler = (event) => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      if (value % 5 == 0 && value <= 15) {
        setPointIsValid(true);
        setEnteredPoints(event.target.value);
      }
    }
  };

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (
      enteredTask.trim().length === 0 &&
      (enteredPoints.trim().length === 0 || +enteredPoints < 0)
    ) {
      setTaskIsValid(false);
      setPointIsValid(false);
      return;
    } else if (enteredTask.trim().length === 0) {
      setTaskIsValid(false);
      return;
    } else if (enteredPoints.trim().length === 0 || +enteredPoints < 0) {
      setPointIsValid(false);
      return;
    } else if (enteredPoints % 5 != 0 || enteredPoints > 15) {
      setPointIsValid(false);
      return;
    }
    props.onSave(enteredId, enteredTask, enteredPoints, props.teamId);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <Card className="modal">
        <header className="header">
          <h2>{props.action} Task</h2>
        </header>
        <form onSubmit={addTaskHandler}>
          <div className={!isTaskValid ? 'invalid' : 'input'}>
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
              ''
            )}
          </div>
          <div className={!isPointValid ? 'invalid' : 'input'}>
            <label htmlFor="points">Points</label>
            <select
              type="number"
              id="points"
              defaultValue={props.points}
              onChange={pointsChangeHandler}
            >
              <option value={0}>0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
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
              ''
            )}
          </div>
          <footer
            className="actions"
            name="Save"
          >
            <Button
              key="1"
              type="submit"
            >
              Save
            </Button>
            <Button
              key="2"
              type="discard"
              onClick={props.onDiscard}
            >
              Discard
            </Button>
          </footer>
        </form>
      </Card>
    </div>
  );
}

export default AddEditTask;
