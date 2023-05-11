import { addTask, removeTask, toggleComplete, deleteAllCompleted } from './functionTests.js';

const localStorageMock = (() => {
  let store = {};

  return {
    store,
    getItem: ((key) => (store[key]) || []),
    setItem: ((key, value) => {
      store[key] = JSON.stringify(value);
    }),
    removeItem: ((key) => {
      delete store[key];
    }),
    clear: (() => {
      store = {};
    }),
  };
})();

global.localStorage = localStorageMock;

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
  it('should toggle completed atribute of a task in the localStorage', () => {
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
})