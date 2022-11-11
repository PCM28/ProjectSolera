import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.scss'
function NavBar() {
  return (
    <div className='navBar'>
      <Link to="/team">Team</Link>
      <Link to="/listTeam01">List</Link>
      <Link to="/random"></Link>
    </div>
  )
}

export default NavBar