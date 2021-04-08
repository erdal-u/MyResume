import React, { Component } from "react";
import ErdalCv from "../../assets/ErdalCv.jpg";

export class HomePage extends Component {
  render() {
    return (
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
    );
  }
}
export default HomePage;
