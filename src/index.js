import './style.css';
import reload from './reload.svg';
import enter from './enter.svg';
import renderList from './renderList.js';
import {
  addTask, removeTask, editTask
} from './addAndRemove.js';
import {deleteAllCompleted, toggleComplete} from './toggleCompleteAndDeleteCompleted.js';

const addForm = document.getElementById('add-form');
const addInput = document.getElementById('add-input');

const reloadIcon = document.getElementById('reload-img');
const enterIcon = document.getElementById('enter-icon');
enterIcon.src = enter;
reloadIcon.src = reload;

window.onload = renderList();
window.removeTask = removeTask;
window.editTask = editTask;
window.toggleComplete = toggleComplete;
window.deleteAllCompleted = deleteAllCompleted;

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(addInput.value);
});