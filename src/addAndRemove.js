import renderList from './renderList.js';

const addInput = document.getElementById('add-input');

export const addTask = (desc) => {
  let list = JSON.parse(localStorage.getItem('tasks-list'));
  if (list === null) {
    list = [];
  }
  const newTask = {
    id: list.length + 1,
    desc,
    completed: false,
  };
  list.push(newTask);
  localStorage.setItem('tasks-list', JSON.stringify(list));
  addInput.value = '';
  renderList(list);
};

export const removeTask = (id) => {
  let list = JSON.parse(localStorage.getItem('tasks-list'));
  if (list === null) {
    list = [];
  }
  const remove = list.findIndex((task) => task.id === id);
  list.splice(remove, 1);
  for (let i = id-1; i < list.length; i += 1) {
    list[i].id = i + 1;
  }
  localStorage.setItem('tasks-list', JSON.stringify(list));
  renderList(list);
};

export const editTask = (id) => {
  const list = JSON.parse(localStorage.getItem('tasks-list'));
  const textArea = document.getElementById(`text-area-${id}`);
  const toggleImgMore = document.getElementById(`toggle-more-${id}`);
  const toggleImgTrash = document.getElementById(`toggle-trash-${id}`);

  toggleImgMore.classList.add('hide');
  toggleImgTrash.classList.remove('hide');

  textArea.parentElement.classList.add('on-change');

  const edit = list.findIndex((task) => task.id === id);
  textArea.addEventListener('change', () => {
    list[edit].desc = textArea.value;
    textArea.innerText = list[edit].desc;
    localStorage.setItem('tasks-list', JSON.stringify(list));
  });
  textArea.addEventListener('blur', () => {
    localStorage.setItem('tasks-list', JSON.stringify(list));
    setTimeout(() => {
      toggleImgMore.classList.remove('hide');
      toggleImgTrash.classList.add('hide');
      textArea.parentElement.classList.remove('on-change');
    }, 200);
  });
  textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('tasks-list', JSON.stringify(list));
      textArea.innerText = list[edit].desc;
      textArea.blur();
    }
  });
};

export const deleteAllCompleted = () => {
  const list = JSON.parse(localStorage.getItem('tasks-list'));
  const newList = list.filter((task) => task.completed === false);
  localStorage.setItem('tasks-list', JSON.stringify(newList));
  renderList();
};