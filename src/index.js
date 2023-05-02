import './style.css';
import moreLogo from './more.svg';
import reload from './reload.svg';
import enter from './enter.svg';

const htmlList = document.getElementById('todo-list');
const reloadIcon = document.getElementById('reload-img');
const enterIcon = document.getElementById('enter-icon');
enterIcon.src = enter;
reloadIcon.src = reload;
const todoList = [
  {
    id: 1,
    desc: 'Go to the market id1',
    completed: false,
  },
  {
    id: 3,
    desc: 'task number 2 id3',
    completed: false,
  },
  {
    id: 2,
    desc: 'task number 3 id2',
    completed: true,
  },
];

const renderList = (list) => {
  let innerList = '';
  if (list.length === 0) {
    innerList = '<h3 class="list-placeholder">Add your first task!</h3>';
  } else {
    const sortedList = list.sort((a, b) => a.id - b.id);
    sortedList.forEach((task) => {
      innerList += `
          <li class="list-task">
            <div class="finished-cap ${task.completed ? 'completed' : ''}">${task.completed ? '✓' : ''}</div>
            <p class="task-description ${task.completed ? 'line-through' : ''}">${task.desc}</p>
            <img class="more-logo" src="${moreLogo}"/>
          </li>
          `;
    });
  }
  htmlList.innerHTML = innerList;
};

window.onload = renderList(todoList);