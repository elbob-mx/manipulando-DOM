// tarea completada icon interactivo

const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};

// IIFE: Immediately Invoked Function Expression
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  console.log("check id", id);
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex(item => item.id === id);
  console.log(index);
  tasks[index]["completed"] = !tasks[index]["completed"];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
};

export default checkComplete;
