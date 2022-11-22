import React from "react";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";
import "./Home.scss";
import CardsList from "../../components/CardsList/CardsList";
function Home() {
  // Master
  const baseURL = "http://localhost:5000/teams";
  const [teams, setTeams] = React.useState(null);
  let teamPoints = [];

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const arrayTeams = response.data;
      let points;

      arrayTeams.forEach((team) => {
        //console.log(team)
        //console.log("=>" + team.activities[0].point)
        points = 0;
        for (let i = 0; i < team.activities.length; i++) {
          points += team.activities[i].point;
        }
        teamPoints.push(points);
      });
      const sortNum = (a, b) => a - b;
      teamPoints.sort(sortNum).reverse();
      if (response.data !== undefined) {
        arrayTeams.forEach((team) => {
          points = 0;
          for (let i = 0; i < team.activities.length; i++) {
            points += team.activities[i].point;
          }
          teamPoints.push(points);
        });
        arrayTeams.forEach((team) => {
          points = 0;
          for (let i = 0; i < team.activities.length; i++) {
            points += team.activities[i].point;
          }
          if (points === teamPoints[0]) {
            team.name = <span className="leader">{team.name}</span>;
          }
        });
      }
      setTeams(arrayTeams);
    });
  }, []);

  return <CardsList teams={teams}></CardsList>;
}

export default Home;
