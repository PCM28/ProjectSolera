import React from 'react'
import Button from '../ListTeam01/UI/Button'
import Card from '../ListTeam01/UI/Card'
import './RemoveConfirm.css'

function WindowAlert(props) {
  return (
    <div>
        <div className="backdrop" onClick={props.onConfirm}></div>
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    </div>
  )
}

export default WindowAlert;