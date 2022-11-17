import React from 'react'
import "./CardsList.scss";
import Card from '../Card/Card';

function CardsList(props) {
  let propsValue = 0;
  let propsMaxValue = 0;
  let color = "";
  let progress;
  let teams = props.teams;
    if (!teams) return null;
    const nTeams = teams.length;
    const cards = [];
    for (let i = 0; i < nTeams; i++) {
      let link = `/listTeam/${i + 1}`;
      propsValue = 0;
      if (teams[i].activities.length !== 0) {
        teams[i].activities.forEach((element) => {
          propsValue += element.point;
        });
        propsMaxValue = teams[i].activities.length * 15;
      } else {
        propsValue = 0;
        propsMaxValue = teams[i].activities.length * 15;
      }
      progress = (propsValue / propsMaxValue) * 100;
      if (progress < 33) color = "red";
      else if (propsValue == 0) color = "red";
      else if (progress < 66) color = "orange";
      else if (progress > 66) color = "green";
      cards.push(
        <Card link={link} color={color} propsValue={propsValue} teams={teams} i={i} propsMaxValue={propsMaxValue}></Card>
      );
    }
    return <div className='MainContainer'>{cards}</div>;
}

export default CardsList;