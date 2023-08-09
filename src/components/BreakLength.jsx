const Break = () => {
    return (
        <div>
        <p className="break-label" id='break-label'  >Break Length</p>
        <p className="break-length" id='break-length'>5</p>
        <button className="break-decrement" id='break-decrement' >-</button>
        <button className="break-increment" id='break-increment' >+</button>
        </div>
    )
}

export default Break;