import React from 'react'
import { useState } from 'react'

import './Team.scss'
function Team(props) {
  let [team, setTeam] = useState(props.team)
 
  return (
    <div className='teamCard'>
      <h3 className='teamName'>{team}</h3>
      <h3 className='points'>0</h3>
    </div>
  )
}

export default Team