const Session = () => {
        const sessionLength = 25;
        return (
        <div>
        <p className="session-label" id='session-label'>Session Length</p>
        <p className="session-length" id='session-length'>{sessionLength}</p>
        <button className="session-decrement" id='session-decrement' >-</button>  
        <button className="session-increment" id='session-increment' >+</button> 
       </div>
        );
};

export default Session;