import React from 'react'
import { Link } from 'react-router-dom'
import ListTeam01 from '../../pages/ListTeam01/ListTeam01'
import Team from '../../pages/Team01/Team01'
import './NavBar.scss'
function NavBar() {
  return (
    <div className='navBar'>
      <Link to="/"><img width='50px' src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" srcset="" /></Link>
      <Link to="/team01">Team</Link>
      <Link to="/listTeam01">List</Link>
      <Link to="/random"></Link>
    </div>
  )
}

export default NavBar