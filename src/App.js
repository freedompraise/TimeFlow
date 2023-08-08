import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
       <Header className="App-header" />
       <Footer className="App-footer" />
       <p className="break-label" id='break-label'  >Break Length</p>
       <p className="break-length" id='break-length'>5</p>
       <p className="session-label" id='session-label'>Session Length</p>
       <p className="session-length" id='session-length'>25</p>
       <button className="break-decrement" id='break-decrement' >-</button>
        <button className="break-increment" id='break-increment' >+</button>
        <button className="session-decrement" id='session-decrement' >-</button>  
        <button className="session-increment" id='session-increment' >+</button>     
        <p className="timer-label" id='timer-label'>Session</p>
        <p className="time-left" id='time-left'>25:00</p> 
        <button className="start_stop" id='start_stop' >Start/Stop</button>
        <button className="reset" id='reset' >Reset</button>


    </div>
  );
}

export default App;
