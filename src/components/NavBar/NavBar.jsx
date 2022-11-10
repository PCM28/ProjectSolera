import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
function NavBar() {
  return (
    <div className='navBar'>
      <Link to="/">Home</Link>
      <Link to="/team01">Team01</Link>
      <Link to="/listTeam01">List Team</Link>
      <Link to="/random">Random</Link>
    </div>
  )
}

export default NavBar