import React from 'react'
import './ListTeam.scss'
import { useParams } from "react-router-dom"
function ListTeam01() {
  const params = useParams();
  return (
    <div className='mainContainer'>
      <div className='title'>
        <h1>TEAM{params.id}</h1>
      </div>
      <div className='list'>{/*  Aquí irá el CRUD (BACK-END)*/}
        <div className='left'>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
          <h3>Trabajo en equipo {params.id}</h3>
        </div>
        <div className='right'>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
          <h3>0 puntos</h3>
        </div>
      </div>
    </div>
  )
}

export default ListTeam01