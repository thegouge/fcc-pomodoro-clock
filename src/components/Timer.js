import React, {Component} from "react";

import "../css/timer.css";

export default class Timer extends Component {
  formatTime = (seconds) => {
    let minutes = 0;

    while (seconds >= 60) {
      seconds -= 60;
      ++minutes;
    }

    if (seconds < 0) seconds = "0";
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;

    return `${minutes}:${seconds}`;
  };

  render() {
    const {start, stop, breakTime, counting} = this.props;

    return (
      <div id="timer">
        <h2 id="timer-label">{breakTime ? "Break" : "Session"}</h2>
        <div id="time-left">{this.formatTime(this.props.timeLeft)}</div>
        <div id="timer-buttons">
          <button id="start_stop" onClick={counting ? stop : start}>
            {counting ? "Stop" : "Start"}
          </button>
          <button id="reset" onClick={this.props.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
