import React, { Component } from "react";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.sessionLength.toString(), // for controlled input
    };
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

  componentDidUpdate(prevProps) {
    // Check if the sessionLength prop has changed
    if (prevProps.sessionLength !== this.props.sessionLength) {
      // Update inputValue with the new sessionLength as a string
      this.setState({ inputValue: this.props.sessionLength.toString() });
    }
  }

  handleLengthChange = (e) => {
    const newValue = e.target.value;

    // Only update state if the value is a valid number within the specified range
    if (!isNaN(newValue) && newValue >= 5 && newValue <= 40) {
      this.setState({ inputValue: newValue });
      this.props.setSessionLength(parseInt(newValue, 10));
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
            value={this.state.inputValue}
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
