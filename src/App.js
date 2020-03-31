import React from "react";
import ErdalCv from "./assets/ErdalCv.jpg";
import "./App.css";

import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <header className="App-header">
          <p>
            <h1>Mitt CV </h1>
          </p>
          <img src={ErdalCv} className="App-logo" alt="ErdalCv" />
          <a href="https://erdal-u.github.io/myresume/">
            erdal.ustalar@gmail.com
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
