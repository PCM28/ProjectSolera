import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'
function Home() {
  const nTeams = 10;

  const cards=[];
  for (let i = 1; i <= nTeams; i++) {
    let link = `/listTeam/${i}`
    cards.push(
    <Link to={link} className="linkTeamCard">
    <div className='cardPosition'>     
      <h3 className='teamName'>Team {i}</h3>
      <h3 className='points'>0</h3>
    </div>
    </Link>
  );

}
  return (
    <div className='MainContainer'>
      {cards}
    </div>
  )
}

export default Home