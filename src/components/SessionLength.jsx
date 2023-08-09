import React from 'react';

class Session extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        sessionLength: 25
        }
        }
        render () {
        return (
        <div>
        <p className="session-label" id='session-label'>Session Length</p>
        <p className="session-length" id='session-length'>{this.state.sessionLength}</p>
        <button className="session-decrement" id='session-decrement' >-</button>  
        <button className="session-increment" id='session-increment' >+</button> 
       </div>
        );
        }
};

export default Session;