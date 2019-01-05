import React from "react";

import TimerTool from "./TimerTool";

import "../css/toolbar.css";

export default function Toolbar(props) {
  return (
    <div id="tool-bar">
      <TimerTool
        inc={props.inc}
        dec={props.dec}
        label="session"
        minutes={props.sessionMinutes}
      />

      <TimerTool
        inc={props.inc}
        dec={props.dec}
        label="break"
        minutes={props.breakMinutes}
      />
    </div>
  );
}
