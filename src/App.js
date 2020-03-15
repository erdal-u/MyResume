import React from 'react';
import ErdalCv from './assets/ErdalCv.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ErdalCv} className="App-logo" alt="ErdalCv" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1> detta är ett test för att se att det funkar</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
