import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  HomePage from "./components/pages/HomePage";
import NavBar from "./NavBar";



function App() {
  return (
    <Router>
      <NavBar />

      <div >
        <Route exact path="/myresume/" component={HomePage} />
        
        
      </div>
    </Router>
    
  );
}

export default App;
