import React from 'react'
import './ListTeam.scss'
import ListElement from './listElement';

function ListTeam() {
  let teamName = "TEAM1"
  let jobs = [
    "Trabajo en equipo 1",
    "Trabajo en equipo 2",
    "Trabajo en equipo 3",
    "Trabajo en equipo 4",
    "Trabajo en equipo 5",
    "Trabajo en equipo 6",
    "Trabajo en equipo 7",
    "Trabajo en equipo 8",
    "Trabajo en equipo 9",
    "Trabajo en equipo 10"
  ];

  let points = [1, 0, 0, 3, 0, 0, 15, 0, 5, 0];

  let totalPoints = 0;
  points.forEach(jobPuntuation => {
    totalPoints += jobPuntuation;
  });

  return (
    <div className='whiteColor backgroundColor'>
      <div className='center'>
        <div className='left'>
          <h1>{teamName}</h1>
          {jobs.map((element, index) => (
            <ListElement
                key = {index}
                elementList = {element}
            />
          ))}
        </div>
        <div className='right'>
          <h1 class>{totalPoints} puntos</h1>
          {points.map((element, index) => (
            <ListElement
                key = {index}
                elementList = {element}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListTeam