import { addTask, removeTask } from "./functionTests.js";

const localStorageMock = (() => {
  let store = {};

  return {
    store: store,
    getItem: ((key) => store[key] || []),
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

describe("addTask", () => {
  it("should add a new task to the list in localStorage", () => {
    const mockDescription = "New task";
    const expectedList = [
      {
        id: 1,
        desc: "New task",
        completed: false,
      },
    ];

    addTask(mockDescription);
    expect(JSON.parse(localStorage.store["tasks-list"])).toStrictEqual(
      expectedList
    );
  });
});

describe("removeTask", () => {
  it("should remove a task from the list in localStorage", () => {
    const removeId = 1;
    const removeList = [
      {
        id: 1,
        desc: "New task",
        completed: false,
      },
    ];

    addTask(mockDescription);
    expect(JSON.parse(localStorage.store["tasks-list"])).toStrictEqual(
      expectedList
    );
  });
});
