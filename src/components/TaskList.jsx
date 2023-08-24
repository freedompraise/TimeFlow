import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import { removeTask, clearCompletedTasks } from "../utils/taskUtils";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      pomodorosInput: 1, // default number of pomodoros
      isAddingTask: false, // Track whether the user is adding a task
    };
  }

  addTask = () => {
    const { taskInput, pomodorosInput } = this.state;
    if (taskInput.trim() === "") {
      return;
    }
    const newTask = {
      text: taskInput,
      completed: false,
      pomodoros: pomodorosInput,
      pomodorosCompleted: 0, // Initialize pomodorosCompleted
    };
    this.props.onUpdateTasks("add", null, newTask, null, null, null);
    this.setState({ taskInput: "", pomodorosInput: 1 });
  };

  markTaskCompleted = (index) => {
    const updatedTasks = [...this.props.tasks];
    updatedTasks[index].completed = true;

    // Increment pomodorosCompleted
    updatedTasks[index].pomodorosCompleted += 1;

    this.props.onUpdateTasks(updatedTasks);
  };

  toggleTaskCompleted = (index) => {
    const updatedTasks = [...this.props.tasks];
    if (updatedTasks[index]) {
      updatedTasks[index].completed = !updatedTasks[index].completed;
      this.setState({ tasks: updatedTasks });
    }
  };

  toggleInputForm = () => {
    this.setState({ isAddingTask: !this.state.isAddingTask });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({ tasks: this.props.tasks || [] });
    }
  }

  removeTask = (index) => {
    const updatedTasks = removeTask(this.props.tasks, index);
    this.props.onUpdateTasks("remove", null, null, null, null, updatedTasks);
    // this.props.setActiveTask(null);
  };

  clearCompletedTasks = () => {
    const updatedTasks = clearCompletedTasks(this.props.tasks);
    this.props.onUpdateTasks("clear", null, null, null, null, updatedTasks);
  };

  handleTaskClick = (index) => {
    const { tasks, setActiveTask } = this.props;
    const selectedTask = tasks[index];

    // Trigger the Timer component to start the task timer
    setActiveTask(selectedTask);
  };

  render() {
    const { isAddingTask, taskInput, pomodorosInput } = this.state;
    const hasCompletedTasks = this.props.tasks.some((task) => task.completed);

    return (
      <div className="rounded-lg p-8 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Task List</h2>
        {/* Task list */}
        <ul className="task-list__list">
          {this.props.tasks.map((task, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  onChange={() => this.toggleTaskCompleted(index)}
                  checked={task.completed}
                  className="mr-2"
                />
                <span
                  className={
                    task.completed ? "line-through text-lg" : "text-lg"
                  }
                  title={task.text}
                >
                  {task.text.length > 20
                    ? task.text.substring(0, 16) + "..."
                    : task.text}
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md ml-auto"
                  onClick={() => this.handleTaskClick(index)}
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
                {/* Display the pomodoro fraction */}
                <span className="text-sm ml-auto">
                  {task.completed
                    ? "Pomodoros Completed"
                    : `${task.pomodorosCompleted}/${task.pomodoros}`}
                </span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md ml-auto"
                  onClick={() => this.removeTask(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {hasCompletedTasks && (
          <button
            onClick={this.clearCompletedTasks}
            className="text-white hover:bg-red-800 hover:text-white te bg-blue-500 font-semibold py-2 px-2 rounded-md mx-auto block mt-4"
          >
            Clear Completed Tasks
          </button>
        )}

        {/* Toggle input form */}
        <button
          onClick={this.toggleInputForm}
          className="text-white hover:bg-blue-800 hover:text-white bg-blue-500 font-semibold py-2 px-2 rounded-md mx-auto block"
        >
          {isAddingTask ? "Cancel" : "Add Task"}
        </button>

        {/* Input form */}
        {isAddingTask && (
          <div className="task-list__input mt-2 ">
            <input
              type="text"
              placeholder="Enter a task ..."
              onChange={(e) => this.setState({ taskInput: e.target.value })}
              value={taskInput}
              className="rounded-md py-2 px-2 w-full mb-2 text-white"
              style={{ backgroundColor: "transparent" }}
            />
            <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
              <label className="mr-2 text-gray-600">Number of Pomodoros:</label>
              <input
                type="number"
                placeholder="Pomodoros"
                onChange={(e) =>
                  this.setState({ pomodorosInput: e.target.value })
                }
                value={pomodorosInput}
                className="rounded-md py-2 px-4 w-16 text-white"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            <button
              onClick={this.addTask}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-md mt-2 w-full md:w-auto"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TaskList;
