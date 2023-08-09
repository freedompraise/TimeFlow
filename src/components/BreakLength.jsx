import React from 'react';

class Break extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5
        }
    }
        render () {
        return (
        <div>
        <p className="break-label" id='break-label'  >Break Length</p>
        <p className="break-length" id='break-length'>{this.state.breakLength}</p>
        <button className="break-decrement" id='break-decrement' >-</button>
        <button className="break-increment" id='break-increment' >+</button>
        </div>
    );
}
};

export default Break;