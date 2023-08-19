import React, { Component } from "react";

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
  markTaskCompleted = (index) => {
    // mark the task as completed by adding a checkmark
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index] = "✅ " + updatedTasks[index];
    this.setState({ tasks: updatedTasks });
  };

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
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <div className="task-list__input">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={(e) => this.setState({ newTask: e.target.value })}
            value={this.state.newTask}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <ul className="task-list__list">
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <span onClick={() => this.markTaskCompleted(index)}>{task}</span>
              <button onClick={() => this.removeTask(index)}>Remove</button>/
            </li>
          ))}
        </ul>
        <button onClick={this.clearCompletedTasks}>
          Clear Completed Tasks
        </button>
      </div>
    );
  }
}

export default TaskList;
