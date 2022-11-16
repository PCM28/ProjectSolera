import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import logo from "../../assets/images/trophy.png";
import "./Home.scss";
function Home() {
  // Master
  let propsvalue = 0;
  let propsmaxValue = 0;
  const baseURL = "http://localhost:5000/team";
  let color = "";
  let progress;
  const [teams, setTeams] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeams(response.data);
    });
  }, []);

  if (!teams) return null;
  const nTeams = teams.length;
  const cards = [];
  for (let i = 0; i < nTeams; i++) {
    let link = `/listTeam/${i}`;
    propsvalue = 0;
    if (teams[i].activities.length !== 0) {
      teams[i].activities.forEach((element) => {
        propsvalue += element.point;
      });
      propsmaxValue = teams[i].activities.length * 15;
    } else {
      propsvalue = 0;
      propsmaxValue = teams[i].activities.length * 15;
    }
    progress = (propsvalue / propsmaxValue) * 100;
    if (progress < 33) color = "red";
    else if (propsvalue == 0) color = "red";
    else if (progress < 66) color = "orange";
    else if (progress > 66) color = "green";
    cards.push(
      <Link to={link} className="linkTeamCard">
        <div className="cardPosition">
          <h3 className="teamName">{teams[i].name}</h3>
          {/* Development */}
          <div className="circular">
            <CircularProgressbarWithChildren
              value={propsvalue}
              maxValue={propsmaxValue}
              styles={{
                path: {
                  stroke: `${color}`,
                  strokeLinecap: "round",
                },
                trail: {
                  stroke: "#d6d6d6",
                },
              }}
            >
              <img
                style={{ width: 30, marginTop: -5 }}
                src={logo}
                alt="trophy"
                className="trophy"
              />
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

  return <div className="MainContainer">{cards}</div>;
}

export default Home;
