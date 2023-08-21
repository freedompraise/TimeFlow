import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeTask, clearCompletedTasks } from "../utils/taskUtils";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      pomodorosInput: 1, // default number of pomodoros
      tasks: this.props.tasks || [], // tasks from props
    };
  }
  addTask = () => {
    const { taskInput, pomodorosInput } = this.state;
    if (taskInput.trim() === "") {
      return;
    }
    this.props.onUpdateTasks("add", null, taskInput, pomodorosInput);
    this.setState({ taskInput: "", pomodorosInput: 1 });
  };

  toggleTaskCompleted = (index) => {
    const updatedTasks = [...this.state.tasks];
    if (updatedTasks[index]) {
      updatedTasks[index].completed = !updatedTasks[index].completed;
      this.setState({ tasks: updatedTasks });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({ tasks: this.props.tasks || [] });
    }
  }

  removeTask = (index) => {
    const updatedTasks = removeTask(this.props.tasks, index);
    this.props.onUpdateTasks("remove", null, null, null, null, updatedTasks);
  };

  clearCompletedTasks = () => {
    const updatedTasks = clearCompletedTasks(this.props.tasks);
    this.props.onUpdateTasks("clear", null, null, null, null, updatedTasks);
  };

  render() {
    const hasCompletedTasks = this.props.tasks.some((task) => task.completed);

    return (
      <div className="rounded-lg p-8 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Task List</h2>
        <div className="task-list__input mb-2 flex items-center">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={(e) => this.setState({ taskInput: e.target.value })}
            value={this.state.taskInput}
            className="rounded-md py-2 px-2 w-40 text-white"
            style={{ backgroundColor: "transparent" }}
          />
          <input
            type="number"
            placeholder="Pomodoros"
            onChange={(e) => this.setState({ pomodorosInput: e.target.value })}
            value={this.state.pomodorosInput}
            className="rounded-md py-2 px-4 w-16 text-white"
            style={{ backgroundColor: "transparent" }}
          />
          <button
            onClick={this.addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-md ml-2"
          >
            Add Task
          </button>
        </div>
        <ul className="task-list__list">
          {this.props.tasks.map((task, index) => (
            <li key={index} className="mb-0 flex items-center">
              <input
                type="checkbox"
                onChange={() => this.toggleTaskCompleted(index)}
                checked={task.completed}
                className="mr-2"
              />
              <span
                className={task.completed ? "line-through text-lg" : "text-lg"}
              >
                {task.text}
              </span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md ml-auto"
                onClick={() => this.removeTask(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
        {hasCompletedTasks && (
          <button
            onClick={this.clearCompletedTasks}
            className="text-red-800 hover:bg-red-600 hover:text-white te bg-blue-500 font-semibold py-4 px-4 rounded-md mx-auto block mt-4"
          >
            Clear Completed Tasks
          </button>
        )}
      </div>
    );
  }
}

export default TaskList;
