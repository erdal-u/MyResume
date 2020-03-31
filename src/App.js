import React from "react";
import ErdalCv from "./assets/ErdalCv.jpg";
import "./App.css";

import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <header>
          <img src={ErdalCv} className="App-logo" alt="ErdalCv" />
          <p>
            <h1> Mitt CV</h1>
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
