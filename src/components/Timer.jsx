import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.sessionLength * 60, // in seconds
      pomodorosCompleted: 0,
      isSession: true, // track whether the timer is in session or break mode
      isPlayingAlarm: false, // track whether the alarm is playing
    };
    this.timer = null;
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Update timer when the sessionLength prop changes
    if (this.props.sessionLength !== prevProps.sessionLength) {
      this.resetTimer();
    }
  }

  startStopTimer = () => {
    if (this.props.isTimerRunning) {
      clearInterval(this.timer); // stop the timer
      this.props.setIsTimerRunning(false);
    } else {
      this.timer = setInterval(this.tick, 1000); // start the timer
      this.props.setIsTimerRunning(true);
    }
  };

  resetTimer = () => {
    clearInterval(this.timer); // stop the timer
    this.setState({
      timeLeft: this.props.sessionLength * 60,
      isSession: true,
    });
    this.props.setIsTimerRunning(false);
  };

  tick = () => {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
        // play the alarm if the timer is at :10
        isPlayingAlarm:
          this.state.timeLeft == 10 && !this.state.isPlayingAlarm
            ? true
            : false,
      });
    } else {
      clearInterval(this.timer); // stop the timer

      this.setState({
        timeLeft: this.state.isSession
          ? this.pomodorosCompleted % 3 == 0
            ? this.props.setBreakLength(3 * this.props.breakLength)
            : this.props.breakLength * 60
          : this.props.sessionLength * 60,
        pomodorosCompleted: !this.state.isSession
          ? this.state.pomodorosCompleted + 1 // increase the number of pomodoros completed if the timer was in break mode
          : this.state.pomodorosCompleted,
        isSession: !this.state.isSession, // switch to break mode if the timer was in session mode, or vice versa
      });
      // restart the timer if the auto switch is enabled
      if (this.props.isTimerRunning) {
        this.timer = setInterval(this.tick, 1000);
      }
    }
  };

  formatTime = (timeInseconds) => {
    const minutes = Math.floor(timeInseconds / 60);
    const remainingSeconds = Math.floor(timeInseconds % 60);
    return `${minutes < 10 ? 0 : ""}${minutes}:${
      remainingSeconds < 10 ? 0 : ""
    }${remainingSeconds}`;
  };

  render() {
    return (
      <div>
        <p className="timer-label" id="timer-label">
          Session
        </p>
        <p className="time-left" id="time-left">
          {this.formatTime(this.state.timeLeft)}
        </p>
        <button
          className="start_stop"
          id="start_stop"
          onClick={this.startStopTimer}
        >
          Start/Stop
        </button>
        <button className="reset" id="reset" onClick={this.resetTimer}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
