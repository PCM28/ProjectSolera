import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import logo from "../../assets/images/trophy.png";
import { Link } from "react-router-dom";
import React from "react";

function Card(props) {
  return (
    <Link
      to={props.link}
      className={props.editable ? "linkTeamCard-editable" : "linkTeamCard"}
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
  );
}

export default Card;
