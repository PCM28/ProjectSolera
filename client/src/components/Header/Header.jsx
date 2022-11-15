import React from 'react'
import './Header.scss'
import homeButton from '../../assets/images/buttonHome.png'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../assets/audio/SUIII.mp3'

function Header() {

  return (
    <div className='Head'>
      <h1 className='mainTitle'>SOLERA TEAMS. BOOTCAMP 4</h1>
      <Link to="/"><img src={homeButton} alt="img" srcSet="" /></Link>
      <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        type="audio/mp3"
      />
    </div>
  )
}

export default Header
