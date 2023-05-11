import { JSDOM } from 'jsdom';
import {
  addTask, removeTask, toggleComplete, deleteAllCompleted, editTask,
} from './functionTests.js';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = window.document;

describe('addTask', () => {
  it('should add a new task to the list in localStorage', () => {
    const mockDescription = 'New task';
    const expectedList = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
    ];

    addTask(mockDescription);
    expect(JSON.parse(localStorage.store['tasks-list'])).toStrictEqual(
      expectedList,
    );
  });
});

describe('removeTask', () => {
  it('should remove a task from the list in localStorage', () => {
    const removeId = 1;
    const removeList = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
    ];

    localStorage.setItem('tasks-list', removeList);

    removeTask(removeId);
    expect(JSON.parse(localStorage.store['tasks-list'])).toStrictEqual('[]');
  });
});

describe('toggleCmplete', () => {
  it('should toggle completed attribute of a task in the localStorage', () => {
    const toggleId = 1;
    const toggleList = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
    ];
    const localExpected = [
      {
        id: 1,
        desc: 'New task',
        completed: true,
      },
    ];

    localStorage.setItem('tasks-list', toggleList);

    toggleComplete(toggleId);
    expect(JSON.parse(localStorage.store['tasks-list'])).toStrictEqual(localExpected);
  });
});

describe('removeCompleted task', () => {
  it('should remove the task marked as completed', () => {
    const deleteContents = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
      {
        id: 2,
        desc: 'New task',
        completed: true,
      },
    ];
    const localExpected = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
    ];

    localStorage.setItem('tasks-list', deleteContents);

    deleteAllCompleted(deleteContents);
    expect(JSON.parse(localStorage.store['tasks-list'])).toStrictEqual(localExpected);
  });
  it('should not remove the task not marked as completed', () => {
    const deleteContents = [
      {
        id: 1,
        desc: 'New task',
        completed: false,
      },
      {
        id: 2,
        desc: 'New task',
        completed: false,
      },
    ];

    localStorage.setItem('tasks-list', deleteContents);

    deleteAllCompleted(deleteContents);
    expect(JSON.parse(localStorage.store['tasks-list'])).toStrictEqual(deleteContents);
  });
});

describe('editTask', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <textarea id="text-area-1"></textarea>
      <textarea id="text-area-2"></textarea>
    `;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should edit the description of the task with the parameter id', () => {
    const deleteContents = [
      {
        id: 1,
        desc: 'EDIT TASK',
        completed: false,
      },
    ];

    localStorage.setItem('tasks-list', deleteContents);

    editTask(1);
  });
});