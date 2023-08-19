import React, { Component } from "react";

class Session extends Component {
  constructor(props) {
    super(props);
    this.handleLengthChange = this.handleLengthChange.bind(this);
  }

  incrementSession = () => {
    const { isTimerRunning, sessionLength, setSessionLength } = this.props;

    if (sessionLength < 40 && !isTimerRunning) {
      this.setState({ sessionLength: sessionLength + 1 });
      setSessionLength(sessionLength + 1);
    }
  };

  decrementSession = () => {
    const { isTimerRunning, sessionLength, setSessionLength } = this.props;

    if (sessionLength > 5 && !isTimerRunning) {
      this.setState({ sessionLength: sessionLength - 1 });
      setSessionLength(sessionLength - 1);
    }
  };

  handleLengthChange = (e) => {
    const value = e.target.value;
    if (value >= 5 && value <= 40) {
      this.props.setSessionLength(value);
    }
  };

  render() {
    const { sessionLength } = this.props;

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
            onClick={this.decrementSession}
          >
            -
          </button>
          <input
            id="session-length"
            data-testid="session-length"
            value={sessionLength}
            onChange={this.handleLengthChange}
            className="rounded-md py-2 px-2 mx-0 w-12 text-center"
            style={{ backgroundColor: "transparent" }}
          />
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-r"
            id="session-increment"
            data-testid="session-increment"
            onClick={this.incrementSession}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Session;
