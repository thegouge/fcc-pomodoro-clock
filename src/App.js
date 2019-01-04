import React, {Component} from "react";

import Toolbar from "./components/Toolbar";
import Timer from "./components/Timer";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 1500,
      countingDown: false,
      timerID: "",
      breakTime: false
    };
  }

  tick = () => {
    const timeLeftBeforeTick = this.state.timeLeft;
    if (timeLeftBeforeTick <= 0) {
      this.endCountDown();
    } else {
      this.setState({
        timeLeft: timeLeftBeforeTick - 1
      });
    }
  };
  startCountdown = () => {
    this.setState({
      countingDown: true,
      timerID: setInterval(this.tick, 1000)
    });
  };
  endCountDown = () => {
    clearInterval(this.state.timerID);
  };

  render() {
    return (
      <div className="App">
        <Toolbar start={this.startCountdown} />
        <Timer timeLeft={this.state.timeLeft} />
        <audio id="beep" src="#" />
      </div>
    );
  }
}

export default App;
