import React from "react";

export default function Timer(props) {
  let seconds = props.timeLeft;
  let minutes = 0;

  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  if (seconds < 10) seconds = "0" + seconds;

  const colonFormattedTime = `${minutes}:${seconds}`;
  return (
    <div id="timer">
      <h2 id="timer-label">Session/Break</h2>
      <div id="time-left">{colonFormattedTime}</div>
    </div>
  );
}
