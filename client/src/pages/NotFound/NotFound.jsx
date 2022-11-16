import React from 'react'
import './NotFound.scss'
import sound from '../../assets/audio/grilleison.mp3';

function NotFound() {
  const audio = new Audio(sound);
  let isPlayed = false;

  function PlaySound() {
    if(!isPlayed) {
      audio.play();
      isPlayed = true;
    }
  };

  return (
    <div onMouseEnter={PlaySound}>
      <div className='image'></div>
      <div className='notFound'>
        <h1>Not Found</h1>
      </div>
      
    </div>
  )
}

export default NotFound