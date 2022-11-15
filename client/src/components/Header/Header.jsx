import React from 'react'
import './Header.scss'
import homeButton from '../../assets/images/buttonHome.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Head'>
        <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
        <Link to="/"><img src={homeButton} alt="img" srcSet="" /></Link>
    </div>
  )
}

export default Header
