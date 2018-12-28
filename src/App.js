import React, {Component} from "react";

import Toolbar from "./components/Toolbar";
import Timer from "./components/Timer";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Timer />
      </div>
    );
  }
}

export default App;
