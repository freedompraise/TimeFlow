import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Session from './components/SessionLength';
import Break from './components/BreakLength';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      setSessionLength : (newLength) => this.setState({ sessionLength: newLength })
    }
  }
  render() {
      return (
    <div className="App">
       <Header className="App-header" />
       <Footer className="App-footer" />
       <Break breakLength={this.state.breakLength} />    
       <Session sessionLength={this.state.sessionLength} setSessionLength={newLength => this.setState({ sessionLength: newLength })} />
       <Timer sessionLength={this.state.sessionLength} />
    </div>
  );
}
};
export default App;
