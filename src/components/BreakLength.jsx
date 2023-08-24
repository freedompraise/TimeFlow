import React from "react";

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.breakLength.toString(), // for controlled input
    };
    this.handleLengthChange = this.handleLengthChange.bind(this);
  }

  incrementBreak = () => {
    const { isTimerRunning, breakLength, sessionLength, setBreakLength } =
      this.props;

    if (breakLength < 10 && breakLength < sessionLength && !isTimerRunning) {
      // add condition to prevent breakLength from going above 10 minutes or sessionLength
      setBreakLength(+breakLength + 1);
    }
  };
  decrementBreak = () => {
    const { isTimerRunning, breakLength, setBreakLength } = this.props;

    if (!isTimerRunning) {
      if (breakLength > 1) {
        // add condition to prevent breakLength from going below 1 minute
        setBreakLength(breakLength - 1);
      }
    }
  };

  componentDidUpdate(prevProps) {
    // Check if the breakLength prop has changed
    if (prevProps.breakLength !== this.props.breakLength) {
      // Update inputValue with the new breakLength as a string
      this.setState({ inputValue: this.props.breakLength.toString() });
    }
  }

  handleUnfocusChange = (e) => {
    let newValue = e.target.value;
    //Set to default break length value
    if (+newValue === 0) {
      newValue = 1;
      this.props.setBreakLength(newValue);
    }
  };

  handleLengthChange = (e) => {
    let newValue = e.target.value;
    if (newValue === "") newValue = 0;
    const notANumber = parseInt(newValue, 10);
    //Only update state if the value is a valid number within the specified range
    if (
      newValue === 0 ||
      (!isNaN(notANumber) && newValue >= 1 && newValue <= 10)
    ) {
      // this.setState({ inputValue: newValue });
      this.props.setBreakLength(notANumber);
    }
  };
  render() {
    return (
      <div className="p-4 rounded-md shadow-md text-center">
        <p className="text-lg font-semibold" id="break-label">
          Break Length
        </p>
        <div className="flex justify-center items-center mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-l"
            onClick={this.decrementBreak}
            id="break-decrement"
            data-testid="break-decrement"
          >
            -
          </button>
          <input
            id="break-length"
            data-testid="break-length"
            value={this.state.inputValue}
            onChange={this.handleLengthChange}
            onBlur={this.handleUnfocusChange}
            className="rounded-md py-2 px-2 mx-0 w-12 text-center"
            style={{ backgroundColor: "transparent" }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r"
            onClick={this.incrementBreak}
            id="break-increment"
            data-testid="break-increment"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default Break;
