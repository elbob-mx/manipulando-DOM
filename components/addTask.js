// importar funciones
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
//---------------->

export const addTask = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);
  };
  
  const taskList = [];
  
  // función agregar tarea en lista de tareas
  const createTask = (evento) => {
    evento.preventDefault(); /* no recargar página */
  
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const value = input.value; // valor agregado por usuario
    const date = calendar.value; // valor del input calendario
    const dateFormat = moment(date).format("DD/MM/YYYY"); //formato fecha en el momento actual
    
    const task = document.createElement("li"); // tarea como elemento de la lista
    task.classList.add("card"); // agregar a la lista
    input.value = ""; // valor inicial
  
    // contenido / descripcion de tarea
    const taskContent = document.createElement("div");
    const taskObj = {
      value,
      dateFormat
    };
  
    taskList.push(taskObj);
  
    localStorage.setItem("tasks", JSON.stringify(taskList)); // localStorage solo admite 'strings'
  
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
  
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
  };