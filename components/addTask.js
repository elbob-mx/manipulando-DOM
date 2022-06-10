// importar funciones
import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";
//---------------->

export const addTask = (event) => {
  event.preventDefault(); /* no recargar página */

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value; // tarea, texto agregado por el usuario
  const date = calendar.value; // fecha establecida por usuario
  const dateFormat = moment(date).format("DD/MM/YYYY"); //formato fecha en el momento actual

  if( value === "" || date === ""){
    alert("Proporciona tarea y fecha correctos.");
    return
  };

  input.value = ""; // valor inicial
  calendar.value = "";

  const completed = false;

  const taskObj = {
    value,
    dateFormat,
    completed,
    id: uuid.v4()
  };
  
  list.innerText = "";
  
  const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //si hay 'tareas', si no, array vacío
  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList)); // localStorage solo admite 'strings'
  
  displayTasks();
};

// función agregar tarea en lista de tareas
export const createTask = ({ value, dateFormat, completed, id }) => {
  const task = document.createElement("li"); // tarea como elemento de la lista
  task.classList.add("card"); // agregar a la lista

  // contenido / descripcion de tarea
  const taskContent = document.createElement("div");

  const check = checkComplete(id);

  if (completed) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  };

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};
