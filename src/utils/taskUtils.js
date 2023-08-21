// Add a task to the list
export function addTask(tasks, newTask, pomodoros) {
  return [...tasks, { text: newTask, completed: false, pomodoros: pomodoros }];
}

// Mark a task as completed
export function markTaskCompleted(tasks, taskIndex) {
  const updatedTasks = [...tasks];
  updatedTasks[taskIndex].completed = true;
  return updatedTasks;
}

// Mark a completed task as uncompleted
export function markTaskUncompleted(tasks, taskIndex) {
  const updatedTasks = [...tasks];
  updatedTasks[taskIndex].completed = false;
  return updatedTasks;
}

// Remove a task from the list
export function removeTask(tasks, taskIndex) {
  return tasks.filter((_, index) => index !== taskIndex);
}

// Clear completed tasks
export function clearCompletedTasks(tasks) {
  return tasks.filter((task) => !task.completed);
}

// Manage tasks based on action
export function manageTasks(action, tasks, taskIndex, taskInput, pomodoros) {
  const updatedTasks = [...tasks];

  switch (action) {
    case "add":
      if (taskInput.trim() !== "") {
        updatedTasks.push({ text: taskInput, completed: false, pomodoros });
      }
      break;
    case "complete":
      if (!updatedTasks[taskIndex].completed) {
        updatedTasks[taskIndex].completed = true;
      }
      break;
    case "remove":
      updatedTasks.splice(taskIndex, 1);
      break;
    case "clear":
      return updatedTasks.filter((task) => !task.completed);
    default:
      break;
  }

  return updatedTasks;
}
