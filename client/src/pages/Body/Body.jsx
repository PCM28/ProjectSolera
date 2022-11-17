import React from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import ListTeam from "../../components/ListTeams/ListTeam";
import NotFound from "../../components/NotFound/NotFound";

function Body() {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        {/* <Route path="/listTeam/1" element={<ListTeam01/>} exact></Route> */}
        <Route path="*" element={<NotFound />} exact></Route>
        <Route path="/listTeam/:id" element={<ListTeam />} exact></Route>
      </Routes>
    </div>
  );
}

export default Body;
