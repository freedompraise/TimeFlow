import React from "react";
import Sound from "./Sound";
import alarmSound from "../assets/sounds/sound.mp3";
import { formatTime } from "../utils/timerUtils";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.sessionLength * 60, // in seconds
      pomodorosCompleted: 0,
      isAlerted: false, // track whether the timer has few seconds left, then set alert
      isSession: true, // track whether the timer is in session or break mode
      isPlayingAlarm: false, // track whether the alarm is playing
    };
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    const { sessionLength, activeTask, setIsTimerRunning, isTimerRunning } =
      this.props;
    // Update timer when the sessionLength prop changes
    if (sessionLength !== prevProps.sessionLength) {
      this.resetTimer();
    }
    // Check if the activeTask prop has changed
    if (activeTask !== prevProps.activeTask) {
      if (isTimerRunning === false) {
        // If there's an active task, set it as the current task
        this.timer = setInterval(this.tick, 1000);
        setIsTimerRunning(true);
      } else {
        // If there's no active task, reset the timer
        this.resetTimer();
        setIsTimerRunning(false);
      }
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

  startPomodoroForTask = (task) => {
    if (task) {
      this.setState({
        currentTask: task,
      });
      this.timer = setInterval(this.tick, 1000); // start the timer
      this.props.setIsTimerRunning(true);
    } else {
    }
    this.resetTimer();
  };

  resetTimer = () => {
    clearInterval(this.timer); // stop the timer
    this.setState({
      timeLeft: this.props.sessionLength * 60,
      isSession: true,
      currentTask: null,
      // isPlayingAlarm: false,
    });
    this.props.setIsTimerRunning(false);
  };

  tick = () => {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
        isPlayingAlarm:
          this.state.timeLeft === 2 && !this.state.isPlayingAlarm
            ? true
            : false,
        // start the alert mode if 10 seconds are left in the timer
        isAlerted: this.state.timeLeft <= 10 ? true : false,
      });
    } else {
      clearInterval(this.timer); // stop the timer

      this.setState({
        timeLeft: this.state.isSession
          ? this.pomodorosCompleted % 3 === 0 // specify the break length based on the number of pomodoros completed
            ? this.props.setBreakLength(3 * this.props.breakLength)
            : this.props.breakLength * 60 // switch time left to break length in seconds if the timer was in session mode
          : this.props.sessionLength * 60, //
        pomodorosCompleted: !this.state.isSession
          ? this.state.pomodorosCompleted + 1 // increase the number of pomodoros completed if the timer was in break mode
          : this.state.pomodorosCompleted,
        isSession: !this.state.isSession,
        isPlayingAlarm: false,
        isAlerted: false,
      });
      // restart the timer if the auto switch is enabled
      if (this.props.isTimerRunning) {
        this.timer = setInterval(this.tick, 1000);
      }
    }
  };

  render() {
    const startStopButtonContent = this.props.isTimerRunning ? "Stop" : "Start";
    const sessionContent = this.props.activeTask
      ? this.props.activeTask.text.length > 18
        ? this.props.activeTask.text.substring(0, 14) + "..."
        : this.props.activeTask.text
      : "Session";
    const sessionBreakContent = this.state.isSession ? sessionContent : "Break";
    return (
      <div className="rounded-lg border-4 border-gray-800 p-4 text-center">
        <p className="text-2xl font-semibold mb-4" id="timer-label">
          {sessionBreakContent}
        </p>
        <p
          className={`text-4xl mb-4 ${this.state.isAlerted && "text-red-500"}`}
          id="time-left"
          data-testid="time-left"
        >
          {formatTime(this.state.timeLeft)}
        </p>
        <div className="mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2"
            id="start_stop-button"
            data-testid="start_stop-button"
            onClick={this.startStopTimer}
          >
            {startStopButtonContent}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            id="reset-button"
            data-testid="reset-button"
            onClick={this.resetTimer}
          >
            Reset
          </button>
        </div>
        {/* Play the alarm sound when isPlayingAlarm is true */}
        {this.state.isPlayingAlarm &&
          (console.log("Rendering Sound component...") || (
            <Sound src={alarmSound} autoplay={true} />
          ))}
      </div>
    );
  }
}

export default Timer;
