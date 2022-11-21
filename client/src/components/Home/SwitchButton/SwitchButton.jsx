import React, { useState, useCallback } from "react";
import "./SwitchButton.scss";
import Body from "../../../pages/Body/Body";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../Home";

function SwitchButton() {
  const [isEditable, setIsEditable] = useState(false);
  const [link, setLink] = useState("/editTeams");

  const navigate = useNavigate();

  const editHandler = () => {
    console.log("funziona sempre");
    if (link == "/") {
      setLink("/editTeams");
    } else {
      setLink("/");
    }
    navigate(link);
  };

  return (
    <div class="btn-container">
      <i class="fa fa-sun-o" aria-hidden="true"></i>
      <label class="switch btn-color-mode-switch">
        <input
          type="checkbox"
          name="color_mode"
          id="color_mode"
          value="1"
          onClick={editHandler}
        />
        <label
          for="color_mode"
          data-on="Edit"
          data-off="View"
          class="btn-color-mode-switch-inner"
        ></label>
      </label>
      <i class="fa fa-moon-o" aria-hidden="true"></i>
    </div>
  );
}

export default SwitchButton;
