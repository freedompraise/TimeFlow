import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: this.props.sessionLength * 60, // in seconds
            isRunning: false,
        };
        this.timer = null;
    }

    startStopTimer = () => {
        if (this.state.isRunning) {
            clearInterval(this.timer); // stop the timer
            this.setState({
                isRunning: false,
            });
        } else {
            this.timer = setInterval(this.tick, 1000); // start the timer
            this.setState({
                isRunning: true,
            });
        }
    }

    resetTimer = () => {
        clearInterval(this.timer); // stop the timer
        this.setState({
            timeleft: this.props.sessionLength * 60,
            isRunning: false,
        })
    }

    tick = () => {
        if (this.state.timeLeft > 0){
            this.setState({
                timeLeft: this.state.timeLeft - 1,
            });
        } else {
            clearInterval(this.timer); // stop the timer when it reaches 0
            this.setState({
                isRunning: false,
            });
        }
    }

    formatTime = (timeInseconds) => {
        const minutes = Math.floor(timeInseconds / 60);
        const remainingSeconds = Math.floor(timeInseconds % 60);
        return (
            `${minutes < 10 ? 0 : ''}${minutes}:${remainingSeconds < 10 ? 0 : ''}${remainingSeconds}` 
        );
    }

    render() {
        return (
            <div>
                <p 
                    className="timer-label" 
                    id='timer-label'>
                        Session
                </p>     
                <p 
                    className="time-left" 
                    id='time-left'>
                    {this.formatTime(this.state.timeLeft)}
                </p>
                <button 
                    className="start_stop" 
                    id='start_stop' 
                    onClick={this.startStopTimer}>
                    Start/Stop
                </button>
                <button 
                    className="reset" 
                    id='reset' 
                    onClick={this.resetTimer}>Reset
                </button>
            </div>
        );
    };
};

export default Timer;