import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import logo from "../../assets/images/trophy.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import EditDeleteTeam from "../Home/SwitchButton/EditDeleteTeam/EditDeleteTeam";
import "./Card.scss";
import AddCard from "../AddCard/AddCard";
import axios from "axios";

function Card(props) {
  const [editTeam, setEditTeam] = useState(false);
  const [onHoverCard, setOnHoverCard] = useState(false);
  const editable = props.editable;

  function saveHandler_onEdit(TeamId, TeamName, points, id_team) {
    const numeroTeam = props.link.slice(-1);
    const id = props.teams[numeroTeam - 1]._id;
    const link = "http://localhost:5000/teams/" + id;
    
    axios.get(link).then((response) => {
      const teamActivities = response.data.activities;
      let newTeam = { name: TeamName, activities: teamActivities};
      var isNewName = true;

      props.teams.forEach(team => {
        if (team.name == TeamName){
          isNewName = false;
        }
      });

      if (isNewName) {
        axios.put(link, newTeam )
          .then((response) => { window.location.reload(false); })
          .catch((e) => {console.log(e)});
    
        setEditTeam(false);
      }
      else
        alert("The name is already in use!");
    });
  }

  return (
    <div id="cont">
      {editTeam && (
        <EditDeleteTeam
          id=""
          teamName=""
          onClick={saveHandler_onEdit}
          onDiscard={() => {
            setEditTeam(false);
          }}
        />
      )}
      <Link
        id=""
        onMouseEnter={() => {
          setOnHoverCard(true);
        }}
        onMouseLeave={() => {
          setOnHoverCard(false);
        }}
        to={!editable && props.link}
        className={editable ? "linkTeamCard-editable" : "linkTeamCard"}
        onClick={
          editable
            ? () => {
                setEditTeam(true);
              }
            : ""
        }
      >
        <div className="cardPosition">
          <h3 className="teamName">{props.teams[props.i].name}</h3>
          {/* Development */}
          <div className="circular">
            <CircularProgressbarWithChildren
              value={props.propsValue}
              maxValue={props.propsMaxValue}
              styles={{
                path: {
                  stroke: `${props.color}`,
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
                <strong>{`${props.propsValue}/${props.propsMaxValue}`}</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          {/* Development */}
        </div>
      </Link>
      <AddCard></AddCard>
    </div>
  );
}

export default Card;
