import React, { Component } from "react";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import "./components/pages/pages.css";

class TodoStore extends Component {
  constructor() {
    super();
    extendObservable(this, {
      counter: 0
    });
  }
  onIncrement = () => {
    this.counter++;
  };
  onDecrement = () => {
    this.counter--;
  };
  render() {
    return (
      <div className="bgImage">
      <div >
        {this.counter}
        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
      </div>
    );
  }
}
export default observer(TodoStore);
