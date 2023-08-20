import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }
  addTask = () => {
    // add the new task to the tasks array
    if (this.state.newTask.trim() !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: "",
      });
    }
  };
  markTaskCompleted(index) {
    const updatedTasks = [...this.state.tasks];
    if (updatedTasks[index].startsWith("✅")) {
      // Task is already marked as completed, unmark it
      updatedTasks[index] = updatedTasks[index].substring(1); // Remove the "✅"
    } else {
      // Task is not completed, mark it
      updatedTasks[index] = "✅" + updatedTasks[index];
    }
    this.setState({ tasks: updatedTasks });
  }

  removeTask = (index) => {
    // remove the task from the tasks array
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  clearCompletedTasks = () => {
    // remove all tasks that have been marked as completed
    const updatedTasks = this.state.tasks.filter(
      (task) => !task.startsWith("✅")
    );
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const hasCompletedTasks = this.state.tasks.some((task) =>
      task.startsWith("✅")
    );
    return (
      <div className="rounded-lg p-8 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Task List</h2>
        <div className="task-list__input mb-2 flex items-center">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={(e) => this.setState({ newTask: e.target.value })}
            value={this.state.newTask}
            className="rounded-md py-2 px-2 w-40 text-black"
          />
          <button
            onClick={this.addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-md ml-2"
          >
            Add Task
          </button>
        </div>
        <ul className="task-list__list">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="mb-0 flex items-center">
              <input
                type="checkbox"
                onChange={() => this.markTaskCompleted(index)}
                checked={task.startsWith("✅")}
                className="mr-2"
              />
              <span className="text-lg">{task.replace("✅", "")}</span>
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
            onClick={hasCompletedTasks && this.clearCompletedTasks}
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
