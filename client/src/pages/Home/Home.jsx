import React from 'react'
import Team from '../Team/Team'
import './Home.scss'
function Home() {
  const teams=[
    "Team 1",
    "Team 2",
    "Team 3",
    "Team 4",
    "Team 5",
    "Team 6",
    "Team 7",
    "Team 8",
    "Team 9",
    "Team 10"
  ]
  return (
    <div>
      <div className='mainContainer'>
        <div className='container'>
           {teams.map((element)=>(
            <Team
              team={element}
            />
           ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home