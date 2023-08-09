import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Session from './components/SessionLength';
import Break from './components/BreakLength';

function App() {
  return (
    <div className="App">
       <Header className="App-header" />
       <Footer className="App-footer" />
       <Session />
       <Break />    
        <p className="timer-label" id='timer-label'>Session</p>
        <p className="time-left" id='time-left'>25:00</p> 
        <button className="start_stop" id='start_stop' >Start/Stop</button>
        <button className="reset" id='reset' >Reset</button>


    </div>
  );
}

export default App;
