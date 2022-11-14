import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import logo from '../../images/trophy.jpg';

function ProgressCircle(props) {
  const propsvalue = 15;
  const propsmaxValue = 75;
  const progress = propsvalue / propsmaxValue * 100;
  let color = '';
  if (progress < 33) {
      color = 'red';
  } else if (progress < 66) {
      color = 'orange';
  } else {
      color = 'green';
  }

  return (

      <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
  )
}

function Home() {
  const propsvalue = 15;
  const propsmaxValue = 75;
  const progress = propsvalue / propsmaxValue * 100;
  let color = '';
  if (progress < 33) {
      color = 'red';
  } else if (progress < 66) {
      color = 'orange';
  } else {
      color = 'green';
  }
  return (
    <div className='MainContainer'>
      <Link to="/listTeam01" className="linkTeamCard">
        <div className='cardPosition'>     
          <h3 className='teamName'>Team 1</h3>
          <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
        </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 2</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 3</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 4</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 5</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 6</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 7</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 8</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 9</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      <Link to="/listTeam01" className="linkTeamCard">
          <div className='cardPosition'>     
              <h3 className='teamName'>Team 10</h3>
              <div style={{ width: 85, height: 85 }}>
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
              <img style={{ width: 30, marginTop: -5 }} src={logo} alt="trophy" />
              <div style={{ fontSize: 18, marginTop: -5 }}>
                  <strong>{`${propsvalue}/${propsmaxValue}`}</strong>
              </div>
          </CircularProgressbarWithChildren>
      </div>
            </div>
      </Link>
      

    </div>
  )
}

export default Home;