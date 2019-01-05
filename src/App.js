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
      appClassNames: "App",
      timerID: "",
      breakTime: false,
      counting: false
    };
  }

  tick = () => {
    const timeLeftBefore = this.state.timeLeft;
    if (timeLeftBefore <= 0) {
      this.stopCountDown();
    } else {
      this.setState({
        timeLeft: timeLeftBefore - 1
      });
    }
  };
  startCountdown = () => {
    this.setState({
      appClassNames: "App counting",
      timerID: setInterval(this.tick, 1000),
      counting: true
    });
  };
  stopCountDown = () => {
    clearInterval(this.state.timerID);
    this.setState({
      counting: false,
      appClassNames: "App"
    });
  };

  increment = (flag) => {
    if (flag === "session") {
      this.setState({
        sessionMinutes: this.state.sessionMinutes + 1
      });
    } else {
      this.setState({
        breakMinutes: this.state.breakMinutes + 1
      });
    }
    this.updateTimeLeft();
  };

  decrement = (flag) => {
    if (flag === "session") {
      if (parseInt(this.state.sessionMinutes) > 1) {
        this.setState({
          sessionMinutes: this.state.sessionMinutes - 1
        });
      }
    } else {
      if (parseInt(this.state.breakMinutes) > 1) {
        this.setState({
          breakMinutes: this.state.breakMinutes - 1
        });
      }
    }
    this.updateTimeLeft();
  };

  updateTimeLeft = () => {
    if (this.state.breakTime) {
      this.setState({timeLeft: this.state.breakMinutes * 60});
    } else {
      this.setState({timeLeft: this.state.sessionMinutes * 60});
    }
  };

  render() {
    return (
      <div className={this.state.appClassNames}>
        <Timer
          start={this.startCountdown}
          stop={this.stopCountDown}
          timeLeft={this.state.timeLeft}
          breakTime={this.state.breakTime}
          counting={this.state.counting}
        />
        <div id="tool-bar">
          <TimerTool
            inc={this.increment}
            dec={this.decrement}
            label="session"
            minutes={this.state.sessionMinutes}
          />

          <TimerTool
            inc={this.increment}
            dec={this.decrement}
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
