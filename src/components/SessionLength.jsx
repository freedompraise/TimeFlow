const Session = ({ sessionLength, setSessionLength, isTimerRunning }) => {
  const incrementSession = () => {
    if (sessionLength < 40) {
      if (!isTimerRunning) {
        setSessionLength(sessionLength + 1);
      }
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1) {
      // TO DO: revert min sessionLength to 5. It's set to 1 for testing purposes
      if (!isTimerRunning) {
        setSessionLength(sessionLength - 1);
      }
    }
  };

  return (
    <div className="p-4 rounded-md shadow-md text-center">
      <p className="text-lg font-semibold" id="session-label">
        Session Length
      </p>
      <div className="flex justify-center items-center mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-l"
          id="session-decrement"
          data-testid="session-decrement"
          onClick={decrementSession}
        >
          -
        </button>
        <p
          className="text-xl mx-4"
          id="session-length"
          data-testid="session-length"
        >
          {sessionLength}
        </p>
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-r"
          id="session-increment"
          data-testid="session-increment"
          onClick={incrementSession}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Session;
