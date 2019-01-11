import React, {Component} from "react";

import TimerTool from "./components/TimerTool";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionMinutes: 25,
      breakMinutes: 5,
      timeLeft: 1500,
      timerID: "",
      breakTime: false,
      counting: false
    };
  }

  startCountdown = () => {
    this.setState({
      timerID: setInterval(this.tick(this.state.timeLeft), 1000),
      counting: true
    });
  };

  tick = (timeLeftBefore) => {
    if (timeLeftBefore <= 0) {
      this.stopCountDown();
      setTimeout(this.moveToNextTimer(), 1000);
    } else {
      this.setState({
        timeLeft: timeLeftBefore - 1
      });
    }
  };

  moveToNextTimer = () => {
    const {breakTime, breakMinutes, sessionMinutes} = this.state;
    this.setState({
      breakTime: !breakTime,
      timeLeft: !breakTime ? breakMinutes * 60 : sessionMinutes * 60
    });
    this.startCountdown();
  };

  stopCountDown = () => {
    clearInterval(this.state.timerID);
    this.setState({
      counting: false
    });
  };

  resetState = () => {
    this.stopCountDown();
    this.setState({
      sessionMinutes: 25,
      breakMinutes: 5,
      timeLeft: 1500,
      timerID: "",
      breakTime: false,
      counting: false
    });
  };

  changeMinutes = (flag) => {
    let {sessionMinutes, breakMinutes} = this.state;
    switch (flag) {
      case "incrementsession":
        if (sessionMinutes < 60) ++sessionMinutes;
        break;

      case "decrementsession":
        if (parseInt(this.state.sessionMinutes) > 1) --sessionMinutes;
        break;

      case "incrementbreak":
        if (breakMinutes < 60) ++breakMinutes;
        break;

      case "decrementbreak":
        if (parseInt(this.state.breakMinutes) > 1) --breakMinutes;
        break;

      default:
        break;
    }

    this.setState({
      sessionMinutes: sessionMinutes,
      breakMinutes: breakMinutes,
      timeLeft: this.state.breakTime ? breakMinutes * 60 : sessionMinutes * 60
    });
  };

  render() {
    return (
      <div className={this.state.counting ? "App counting" : "App"}>
        <Timer
          start={this.startCountdown}
          stop={this.stopCountDown}
          timeLeft={this.state.timeLeft}
          breakTime={this.state.breakTime}
          counting={this.state.counting}
          resetState={this.resetState}
        />
        <div id="tool-bar">
          <TimerTool
            change={this.changeMinutes}
            label="session"
            minutes={this.state.sessionMinutes}
          />

          <TimerTool
            change={this.changeMinutes}
            label="break"
            minutes={this.state.breakMinutes}
          />
        </div>
        <audio id="beep" src="#" />
        <Footer />
      </div>
    );
  }
}

export default App;
