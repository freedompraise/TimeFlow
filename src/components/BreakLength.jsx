import React from "react";

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
  }

  incrementBreak() {
    if (
      this.props.breakLength < 10 &&
      this.props.breakLength < this.props.sessionLength
    ) {
      // add condition to prevent breakLength from going above 10 minutes or sessionLength
      this.props.setBreakLength(this.props.breakLength + 1);
    }
  }
  decrementBreak() {
    if (this.props.breakLength > 1) {
      // add condition to prevent breakLength from going below 1 minute
      this.props.setBreakLength(this.props.breakLength - 1);
    }
  }

  render() {
    return (
      <div>
        <p className="break-label" id="break-label">
          Break Length
        </p>
        <p className="break-length" id="break-length">
          {this.props.breakLength}
        </p>
        <button
          className="break-decrement"
          id="break-decrement"
          onClick={this.decrementBreak}
        >
          -
        </button>
        <button
          className="break-increment"
          id="break-increment"
          onClick={this.incrementBreak}
        >
          +
        </button>
      </div>
    );
  }
}

export default Break;
