export function startStopTimer(timer, setIsTimerRunning, tick) {
  if (timer) {
    clearInterval(timer); // stop the timer
    setIsTimerRunning(false);
  } else {
    timer = setInterval(tick, 1000); // start the timer
    setIsTimerRunning(true);
  }
}

export function startPomodoroForTask(
  task,
  timer,
  setIsTimerRunning,
  tick,
  setState
) {
  if (task) {
    setState({
      currentTask: task,
    });
    timer = setInterval(tick, 1000); // start the timer
    setIsTimerRunning(true);
  } else {
  }
  resetTimer();
}

export function resetTimer(timer, setIsTimerRunning, setState, sessionLength) {
  clearInterval(timer); // stop the timer
  setState({
    timeLeft: sessionLength * 60,
    isSession: true,
    currentTask: null,
    // isPlayingAlarm: false,
  });
  setIsTimerRunning(false);
}

export function tick(
  timeLeft,
  isSession,
  isPlayingAlarm,
  timer,
  setState,
  setBreakLength,
  breakLength,
  sessionLength,
  pomodorosCompleted,
  isTimerRunning
) {
  if (timeLeft > 0) {
    setState({
      timeLeft: timeLeft - 1,
      // play the alarm if the timer is at :1
      isPlayingAlarm: timeLeft === 2 && !isPlayingAlarm ? true : false,
      isAlerted: timeLeft <= 10 ? true : false,
    });
  } else {
    clearInterval(timer); // stop the timer

    setState({
      timeLeft: isSession
        ? pomodorosCompleted % 3 === 0 // specify the break length based on the number of pomodoros completed
          ? setBreakLength(3 * breakLength)
          : breakLength * 60 // switch time left to break length in seconds if the timer was in session mode
        : sessionLength * 60, //
      pomodorosCompleted: !isSession
        ? pomodorosCompleted + 1 // increase the number of pomodoros completed if the timer was in break mode
        : pomodorosCompleted,
      isSession: !isSession, // switch to break mode if the timer was in session mode, or vice versa
      isPlayingAlarm: false,
      isAlerted: false,
    });
    // restart the timer if the auto switch is enabled
    if (isTimerRunning) {
      timer = setInterval(tick, 1000);
    }
  }
}

export function formatTime(timeInseconds) {
  const minutes = Math.floor(timeInseconds / 60);
  const remainingSeconds = Math.floor(timeInseconds % 60);
  return `${minutes < 10 ? 0 : ""}${minutes}:${
    remainingSeconds < 10 ? 0 : ""
  }${remainingSeconds}`;
}
