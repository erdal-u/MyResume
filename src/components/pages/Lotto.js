import React, { Component } from "react";
import { observer } from "mobx-react";
import ProgressBar from 'react-bootstrap/ProgressBar'


export class Lotto extends Component {
  onChange() {}
  render() {
    return (
      <div>
        <label>1</label>
        <input></input>
        <br />
        <label>2</label>
        <input></input>
        <br />
        <label>3</label>
        <input></input>
        <br />
        <label>4</label>
        <input></input>
        <br />
        <label>5</label>
        <input></input>
        <br />
        <label>6</label>
        <input></input>
        <br />
        <label>7</label>
        <input></input>
        <br />
        <label>8</label>
        <input></input>
        <br />
        <label>9</label>
        <input></input>
        <br />
        <label>10</label>
        <input></input>
        <button onClick={() => this.onChange()}>Play</button>
        <div>
      <ProgressBar striped variant="success" animated now={45}/>
        </div>
      </div>
    );
  }
}

export default observer(Lotto);
