import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Head'>
        <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
        <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="img" srcSet="" /></Link>
      </div>
  )
}

export default Header
