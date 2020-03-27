import React from "react";
import ErdalCv from "./assets/ErdalCv.jpg";
import "./App.css";

import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <img src={ErdalCv} className="App-logo" alt="ErdalCv" />
          <p>
            <h1> detta är ett test för att se att det funkar</h1>
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
