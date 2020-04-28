import React, { Component } from 'react';
import "./pages.css";
import Pdf from "./Pdf"
import Multidropdown from "./Mulitdropdown";

export class PigGame extends Component {
  render() {
    return (
      <div>
        	<body className="loadingBody">
	  	<div class="loader">
			<span>L</span>
			<span>A</span>
			<span>D</span>
			<span>D</span>
			<span>A</span>
			<span>R</span>
      <span>...</span>
		</div>
    <Pdf/>
	<Multidropdown/>
 
	</body>
      </div>
    )
  }
}

export default PigGame
