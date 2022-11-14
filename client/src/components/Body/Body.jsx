import React from 'react'
import './Body.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import ListTeam01 from '../../pages/ListTeams/ListTeam01/ListTeam01'
import NotFound from '../../pages/NotFound/NotFound'

function Body() {
  return (
    <div className='MainContainerBody'>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/listTeam01" element={<ListTeam01/>} exact></Route>
          <Route path="*" element={<NotFound/>} exact></Route>
        </Routes>
      </div>
  )
}

export default Body
