import React from 'react'
import Button from '../ListTeam01/UI/Button'
import Card from '../ListTeam01/UI/Card'
import './RemoveConfirm.css'

function RemoveConfirm(props) {
  return (
    <div>
        <div className="backdrop"></div>
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onDelete}>Delete</Button>
                <Button onClick={props.onCancel}>Cancel</Button>
            </footer>
        </Card>
    </div>
  )
}

export default RemoveConfirm;