import "./App.scss";
import Header from "./pages/Header/Header";
import Body from "./pages/Body/Body";
import React, { useState } from "react";

function App(props) {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Body className="body"></Body>
    </div>
  );
}

export default App;
