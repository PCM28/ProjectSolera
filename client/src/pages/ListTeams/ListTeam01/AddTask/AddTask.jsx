import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './AddTask.scss';
import alertLogo from '../../../../assets/images/alertLogo.jpg';

function AddTask(props) {
  const [enteredTask, setEnteredTask] = useState(props.taskName);
  const [enteredPoints, setEnteredPoints] = useState(props.points);
  const [isTaskValid, setTaskIsValid] = useState(true);
  const [isPointValid, setPointIsValid] = useState(true);

  const taskChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTaskIsValid(true);
      setPointIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const pointsChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTaskIsValid(true);
      setPointIsValid(true);
    }
    setEnteredPoints(event.target.value);
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
    }
    props.onSave();
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

export default AddTask;
