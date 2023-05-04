import renderList from './renderList.js';

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
  localStorage.setItem('tasks-list', JSON.stringify(list));
  renderList();
};

export const deleteAllCompleted = () => {
  const list = JSON.parse(localStorage.getItem('tasks-list'));
  let newList = list.filter((task) => task.completed === false);
  for (let i = 0; i < newList.length; i += 1) {
    newList[i].id = i + 1;
    console.log('im in')
  }
  localStorage.setItem('tasks-list', JSON.stringify(newList));
  renderList();
};
