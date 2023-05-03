import renderList from './renderList.js';

const toggleComplete = (id) => {
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

export default toggleComplete;
