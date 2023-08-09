import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
        <p className="timer-label" id='timer-label'>Session</p>
        <p className="time-left" id='time-left'>25:00</p>
        <button className="start_stop" id='start_stop' >Start/Stop</button>
        <button className="reset" id='reset' >Reset</button>
        </div>
        );
    };
};

export default Timer;