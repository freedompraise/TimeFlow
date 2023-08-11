import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Session from "./components/SessionLength";
import Break from "./components/BreakLength";
import Timer from "./components/Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isTimerRunning: false, // check if timer is running

      setIsTimerRunning: (newIsTimerRunning) =>
        this.setState({
          isTimerRunning: newIsTimerRunning,
        }),
      setSessionLength: (newLength) =>
        this.setState({
          sessionLength: newLength,
        }),
      setBreakLength: (newLength) =>
        this.setState({
          breakLength: newLength,
        }),
    };
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Break
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          setBreakLength={(newLength) =>
            this.setState({ breakLength: newLength })
          }
        />
        <Session
          sessionLength={this.state.sessionLength}
          setSessionLength={(newLength) =>
            this.setState({ sessionLength: newLength })
          }
          isTimerRunning={this.state.isTimerRunning}
        />
        <Timer
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          isTimerRunning={this.state.isTimerRunning}
          setIsTimerRunning={(newIsTimerRunning) =>
            this.setState({ isTimerRunning: newIsTimerRunning })
          }
        />
        <Footer className="App-footer" />
      </div>
    );
  }
}
export default App;
