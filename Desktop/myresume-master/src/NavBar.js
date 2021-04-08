import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ErdalCv from "../src/assets/ErdalCv.jpg";


class NavBar extends Component {
  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Mr Erdal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="todostore">Projekt</Nav.Link>
            <Nav.Link href="lotto">Lotto</Nav.Link>
            <Nav.Link href="piggame">Pig Game</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
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

export default NavBar;
