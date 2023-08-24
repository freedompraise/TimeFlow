// Add a task to the list
export function addTask(tasks, newTask, pomodoros) {
  return [...tasks, { text: newTask, completed: false, pomodoros: pomodoros }];
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
export function manageTasks(action, tasks, taskIndex, newTask) {
  const updatedTasks = [...tasks];

  switch (action) {
    case "add":
      updatedTasks.push(newTask);
      break;
    case "toggle":
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
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
