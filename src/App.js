import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage, Lotto } from "./components/pages/index";
import NavBar from "./NavBar";
import TodoStore from "./TodoStore";
import PigGame from "./components/pages/PigGame";

function App() {
  return (
    <Router>
      <NavBar />

      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/todostore" component={TodoStore} />
        <Route path="/lotto" component={Lotto} />
        <Route path="/piggame" component={PigGame}/>
      </div>
    </Router>
  );
}

export default App;
