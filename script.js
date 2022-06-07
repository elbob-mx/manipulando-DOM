import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js"

const btn = document.querySelector("[data-form-btn]");

// arrow functions =>
btn.addEventListener("click", addTask);

readTasks();