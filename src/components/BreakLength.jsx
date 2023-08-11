import React from "react";

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
  }

  incrementBreak() {
    this.props.setBreakLength(this.props.breakLength + 1);
  }
  decrementBreak() {
    if (this.props.breakLength > 1) {
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
