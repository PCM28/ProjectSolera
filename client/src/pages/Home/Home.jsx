import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
function Home() {
  return (
    <div className='MainContainer'>
      <Link to="/listTeam01" className="linkTeamCard">
        <div className='cardPosition'>     
          <h3 className='teamName'>Team 1</h3>
          <h3 className='points'>0</h3>
        </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 2</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 3</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 4</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 5</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 6</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 7</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 8</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 9</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 10</h3>
              <h3 className='points'>0</h3>
            </div>
      </Link>
      

    </div>
  )
}

export default Home