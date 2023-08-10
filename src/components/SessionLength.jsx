
const Session = ({ sessionLength, setSessionLength }) => {

  const incrementSession = () => {
     if (sessionLength < 40){
        setSessionLength(sessionLength + 1);
     }
  };

  const decrementSession = () => {
    if (sessionLength > 5){
        setSessionLength(sessionLength - 1);
    }
  };

  return (
    <div>
      <p className="session-label" id="session-label">
        Session Length
      </p>
      <p className="session-length" id="session-length">
        {sessionLength}
      </p>
      <button className="session-decrement" id="session-decrement" onClick={decrementSession}>
        -
      </button>
      <button className="session-increment" id="session-increment" onClick={incrementSession}>
        +
      </button>
    </div>
  );
};

export default Session;
