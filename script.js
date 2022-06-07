import { addTask } from "./components/addTask.js";

const btn = document.querySelector("[data-form-btn]");

// arrow functions
btn.addEventListener("click", addTask);
