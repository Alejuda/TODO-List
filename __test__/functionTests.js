export const addTask = (desc) => {
  let list = localStorage.getItem('tasks-list');
  if (list === null) {
    list = [];
  }
  const newTask = {
    id: list.length + 1,
    desc,
    completed: false,
  };
  list.push(newTask);
  localStorage.setItem('tasks-list', list);
};

export const removeTask = (id) => {
  let list = JSON.parse(localStorage.getItem('tasks-list'));
  if (list === null) {
    list = [];
  }
  const remove = list.findIndex((task) => task.id === id);
  list.splice(remove, 1);
  for (let i = id - 1; i < list.length; i += 1) {
    list[i].id = i + 1;
  }
  localStorage.setItem('tasks-list', JSON.stringify(list));
};

export const toggleComplete = (id) => {
  let list = JSON.parse(localStorage.getItem('tasks-list'));
  if (list === null) {
    list = [];
  }
  const toggle = list.findIndex((task) => task.id === id);
  if (!list[toggle].completed) {
    list[toggle].completed = true;
  } else {
    list[toggle].completed = false;
  }
  localStorage.setItem('tasks-list', (list));
};

export const deleteAllCompleted = () => {
  const list = JSON.parse(localStorage.getItem('tasks-list'));
  const newList = list.filter((task) => task.completed === false);
  for (let i = 0; i < newList.length; i += 1) {
    newList[i].id = i + 1;
  }
  localStorage.setItem('tasks-list', JSON.stringify(newList));
};