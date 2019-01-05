import React from "react";

import "../css/timer.css";

export default function Timer(props) {
  const {start, stop, timeLeft, breakTime, counting} = props;

  let seconds = timeLeft;
  let minutes = 0;

  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  if (seconds < 10) seconds = "0" + seconds;

  const colonFormattedTime = `${minutes}:${seconds}`;
  return (
    <div id="timer">
      <h2 id="timer-label">{breakTime ? "Break" : "Session"}</h2>
      <div id="time-left">{colonFormattedTime}</div>
      <div id="timer-buttons">
        <button onClick={counting ? stop : start}>
          {counting ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}
