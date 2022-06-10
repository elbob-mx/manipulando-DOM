import { displayTasks } from "./readTasks.js";

// eliminar tarea

const deleteIcon = (id) => {
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "Icon");
  i.addEventListener("click", () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
const tasks = JSON.parse(localStorage.getItem("tasks"));
const index = tasks.findIndex((item) => item.id === id);
console.log(index);
tasks.splice(index, 1);
console.log(tasks);
localStorage.setItem("tasks", JSON.stringify(tasks));
displayTasks();
};

export default deleteIcon;
