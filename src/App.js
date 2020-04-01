import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import NavBar from "./NavBar";
import TodoStore from "./TodoStore";

function App() {
  return (
    <Router>
      <NavBar />

      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/todostore" component={TodoStore} />
      </div>
    </Router>
  );
}

export default App;
