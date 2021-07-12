const tasksKey = 'tasks';

export const getCourseByUuid= (uuid) => {
  let tasks = localStorage.getItem(tasksKey);
  tasks = JSON.parse(tasks);
  return tasks.find(t => t.uuid === uuid);
}

export const setTasksList = (tasks) => {
  localStorage.setItem(tasksKey, JSON.stringify(tasks));
}