import React, {Component} from "react";

export default class TimerTool extends Component {
  increment = () => {
    this.props.change("increment" + this.props.label);
  };
  decrement = () => {
    this.props.change("decrement" + this.props.label);
  };

  render() {
    const {label, minutes} = this.props;
    const upperCaseLabel =
      label.substring(0, 1).toUpperCase() + label.substring(1);
    return (
      <div id={`${label}-stuff`} className="timer-tool">
        <h2 id={`${label}-label`}>{upperCaseLabel} Length</h2>
        <button id={`${label}-increment`} onClick={this.increment}>
          &uarr;
        </button>
        <p id={`${this.props.label}-length`}>{minutes}</p>
        <button id={`${label}-decrement`} onClick={this.decrement}>
          &darr;
        </button>
      </div>
    );
  }
}
