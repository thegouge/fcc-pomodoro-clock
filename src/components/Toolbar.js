import React from "react";

export default function Toolbar(props) {
  return (
    <div>
      <div id="session-stuff" />
      <div id="break-stuff" />
      <div id="buttons">
        <button onClick={props.start}>Start</button>
      </div>
    </div>
  );
}
