import React, { Component } from 'react'
import "./Spinner.css"

export class Pdf extends Component {
    render() {
        return (
            <div class="container">
            <div class="dash squareOne"></div>
            <div class="dash squareTwo"></div>
            <div class="dash squareThree"></div>
            <div class="dash squareFour"></div>
          </div>
        )
    }
}

export default Pdf;
