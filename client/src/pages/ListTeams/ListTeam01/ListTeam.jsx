import React from 'react'
import './ListTeam.scss'
function ListTeam01() {
  const rows=[];
  for (let index = 0; index < 10; index++) {
    rows.push(<tr>
    <td>Trabajo en equipo 1</td>
    <td>0 puntos</td>
    <td><button className='edit'><img src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png" height="40" width="40px"/></button><button className='delete'><img src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" height="40" width="40px"/></button></td>
</tr>);
    
  }
  return (
    <table>
      <thead>
        <tr>
            <th className='title'>TEAM1</th>
            <th className='title'>10 puntos total</th>
            <th><button className='add' type='button'> <img className='addButton' src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" height="43" width="40px"/></button></th>
        </tr>
      </thead>
      <tbody>
          {rows}
      </tbody>
      

    </table>
  )
}
      

export default ListTeam01