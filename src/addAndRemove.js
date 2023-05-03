import renderList from "./renderList.js";
import trashCan from "./trash.svg";
import moreImg from "./more.svg";
const addInput = document.getElementById("add-input");

export const addTask = (desc) => {
  let list = JSON.parse(localStorage.getItem("tasks-list"));
  if (list === null) {
    list = [];
  }
  const newTask = {
    id: list.length,
    desc: desc,
    completed: false,
  };
  list.push(newTask);
  localStorage.setItem("tasks-list", JSON.stringify(list));
  addInput.value = "";
  renderList(list);
};

export const removeTask = (id) => {
  let list = JSON.parse(localStorage.getItem("tasks-list"));
  if (list === null) {
    list = [];
  }
  const remove = list.findIndex((task) => task.id === id);
  list.splice(remove, 1);
  for (let i = id; i < list.length; i++) {
    list[i].id = i;
  }
  localStorage.setItem("tasks-list", JSON.stringify(list));
  renderList(list);
};

export const editTask = (id) => {
  let list = JSON.parse(localStorage.getItem("tasks-list"));
  const textArea = document.getElementById(`text-area-${id}`);
  const toggleImgMore = document.getElementById(`toggle-more-${id}`);
  const toggleImgTrash = document.getElementById(`toggle-trash-${id}`);

  toggleImgMore.classList.add("hide");
  toggleImgTrash.classList.remove("hide");

  textArea.parentElement.classList.add("on-change");

  const edit = list.findIndex((task) => task.id === id);
  textArea.addEventListener("change", () => {
    list[edit].desc = textArea.value;
    textArea.innerText = list[edit].desc;
    localStorage.setItem("tasks-list", JSON.stringify(list));
  });
  textArea.addEventListener("blur", () => {
    localStorage.setItem("tasks-list", JSON.stringify(list));
    setTimeout(() => {
      toggleImgMore.classList.remove("hide");
      toggleImgTrash.classList.add("hide");
      textArea.parentElement.classList.remove("on-change");
    }, 110);
  });
  textArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("tasks-list", JSON.stringify(list));
      textArea.innerText = list[edit].desc;
      textArea.blur();
    }
  });
};
