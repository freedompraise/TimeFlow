import React, { Component } from "react";
// import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Session from "./components/SessionLength";
import Break from "./components/BreakLength";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList.jsx";
import { manageTasks } from "./utils/taskUtils.js";
import "tailwindcss/tailwind.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25, //
      isTimerRunning: false, // check if timer is running
      tasks: [],
      newTask: "",
      pomodoros: 1, // default number of pomodoros for a task

      setIsTimerRunning: (newIsTimerRunning) =>
        this.setState({
          isTimerRunning: newIsTimerRunning,
        }),
      setBreakLength: (newLength) =>
        this.setState({
          breakLength: newLength,
        }),
    };
    this.setSessionLength = this.setSessionLength.bind(this);
    this.handleManageTasks = this.handleManageTasks.bind(this);
  }

  setSessionLength(value) {
    this.setState({ sessionLength: value });
  }

  handleManageTasks = (action, taskIndex, taskInput, pomodorosInput) => {
    const { tasks, pomodoros } = this.state;
    const updatedTasks = manageTasks(
      action,
      tasks,
      taskIndex,
      taskInput,
      pomodorosInput || pomodoros
    );
    this.setState({
      tasks: updatedTasks,
      newTask: action === "add" ? "" : taskInput,
    });
  };

  render() {
    return (
      <div
        className="min-h-screen text-white flex flex-col items-center justify-center p-16"
        style={{ backgroundColor: "#121d3a" }}
      >
        <Header className="App-header" />
        <div className="flex flex-row space-x-8 mb-8">
          <Break
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            setBreakLength={(newLength) =>
              this.setState({ breakLength: newLength })
            }
            isTimerRunning={this.state.isTimerRunning}
          />
          <Session
            sessionLength={this.state.sessionLength}
            setSessionLength={(newLength) =>
              this.setState({ sessionLength: newLength })
            }
            isTimerRunning={this.state.isTimerRunning}
          />
        </div>

        <Timer
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          setBreakLength={(newLength) =>
            this.setState({ breakLength: newLength })
          }
          isTimerRunning={this.state.isTimerRunning}
          setIsTimerRunning={(newIsTimerRunning) =>
            this.setState({ isTimerRunning: newIsTimerRunning })
          }
        />
        <div className="w-full">
          <TaskList
            tasks={this.state.tasks}
            newTask={this.state.newTask}
            pomodoros={this.state.pomodoros}
            onUpdateTasks={this.handleManageTasks}
            onAddTask={() => this.handleManageTasks("add")}
          />
        </div>
        <Footer className="App-footer mt-8" />
      </div>
    );
  }
}
export default App;
