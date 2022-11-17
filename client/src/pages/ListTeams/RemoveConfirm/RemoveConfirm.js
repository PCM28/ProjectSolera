import React from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import axios from "axios";
import './RemoveConfirm.css'

function RemoveConfirm(props) {
    const activityURL = "http://localhost:5000/activities";
    const deleteHandler = () => {
        const deleteActivityURL = activityURL + "/" + props.id;
        axios
          .delete(deleteActivityURL)
          .then(window.location.reload());
        console.log("Delete Pressed");
        //put delete method here
      };
  return (
    <div>
        <div className="backdrop"></div>
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
                <p>{props.taskName}</p>
            </div>
            <footer className="actions">
                <Button onClick={deleteHandler}>Delete</Button>
                <Button onClick={props.onCancel}>Cancel</Button>
            </footer>
        </Card>
    </div>
  )
}

export default RemoveConfirm;