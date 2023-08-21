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

// Manage tasks based on action ('add', 'complete', 'uncomplete', 'remove')
export function manageTasks(action, tasks, taskIndex, newTask, pomodoros) {
  switch (action) {
    case "add":
      return addTask(tasks, newTask, pomodoros);
    case "complete":
      return markTaskCompleted(tasks, taskIndex);
    case "uncomplete":
      return markTaskUncompleted(tasks, taskIndex);
    case "remove":
      return removeTask(tasks, taskIndex);
    default:
      return tasks;
  }
}
