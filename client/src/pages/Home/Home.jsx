import React from 'react'
import { Link } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import logo from '../../assets/images/trophy.png';
import './Home.scss'
function Home() {
  // Master
  const propsvalue = 15;
  const propsmaxValue = 75;
  const progress = propsvalue / propsmaxValue * 100;
  let color = '';
  if (progress < 33) color = 'red';
  else if (progress < 66) color = 'orange';
  else color = 'green';
  
  const nTeams = 10;
  const cards=[];
  for (let i = 1; i <= nTeams; i++) {
      let link = `/listTeam/${i}`
      cards.push(
      <Link to={link} className="linkTeamCard">
      <div className='cardPosition'>     
        <h3 className='teamName'>Team {i}</h3>
        {/* Development */}
        <div className="circular">
          <CircularProgressbarWithChildren
              value={propsvalue}
              maxValue={propsmaxValue}
              styles={{
                  path: {
                      stroke: `${color}`,
                      strokeLinecap: 'round',
                  },
                  trail: {
                      stroke: '#d6d6d6'
                  },
              }}>
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" className='trophy'/>
              <div style={{ fontSize: 18, marginTop: -5 }} className="words">
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
        </div>
        {/* Development */}
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