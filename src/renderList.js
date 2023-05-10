import moreLogo from './more.svg';
import trashCan from './trash.svg';

const htmlList = document.getElementById('todo-list');

const renderList = () => {
  let list = JSON.parse(localStorage.getItem('tasks-list'));
  if (list === null) {
    list = [];
  }
  let innerList = '';
  const sortedList = list.sort((a, b) => a.id - b.id);
  sortedList.forEach((task) => {
    innerList += `
            <li class="list-task" id="list-item-${task.id}">
              <div onclick="toggleComplete(${task.id})" class="finished-cap ${
  task.completed ? 'completed' : ''
}">${task.completed ? '✔' : ''}</div>
              <textarea desable id="text-area-${task.id}" onclick="editTask(${
  task.id
})" class="task-description ${task.completed ? 'line-through' : ''}">${
  task.desc
}</textarea>
<img class="more-logo" id="toggle-more-${
  task.id
}" alt="move" src="${moreLogo}"/>
              <img class="trash-logo hide" id="toggle-trash-${
  task.id
}" alt="move" src="${trashCan}" onClick="removeTask(${task.id})"/>
            </li>
            `;
  });
  htmlList.innerHTML = innerList;
};

export default renderList;
