import React from 'react';

class Session extends React.Component {
        constructor(props) {
           super(props);
           this.state = {
              sessionLength: 25
            }
            this.incrementSession = this.incrementSession.bind(this);
            this.decrementSession = this.decrementSession.bind(this);
        }

        incrementSession() {
                this.setState({
                        sessionLength: this.state.sessionLength + 1
                })
        }
        decrementSession() {
                this.setState({
                        sessionLength: this.state.sessionLength - 1
                })
        }

        render () {
        return (
        <div>
        <p className="session-label" id='session-label'>Session Length</p>
        <p className="session-length" id='session-length'>{this.state.sessionLength}</p>
        <button className="session-decrement" id='session-decrement' onClick={this.decrementSession} >-</button>  
        <button className="session-increment" id='session-increment' onClick={this.incrementSession}>+</button> 
       </div>
        );
        }
};

export default Session;