import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
console.log(btn);

// función agregar tarea en lista de tareas
const createTask = (evento) => {
  evento.preventDefault(); /* no recargar página */

  const input = document.querySelector("[data-form-input]");
  const value = input.value; // valor agregado por usuario
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li"); // tarea como elemento de la lista
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

// arrow functions
btn.addEventListener("click", createTask);
