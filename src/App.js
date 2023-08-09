import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Session from './components/SessionLength';
import Break from './components/BreakLength';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
       <Header className="App-header" />
       <Footer className="App-footer" />
       <Break />    
       <Session />
       <Timer />

    </div>
  );
}

export default App;
