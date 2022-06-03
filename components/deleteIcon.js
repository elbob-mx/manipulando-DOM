const deleteIcon = () => {
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "Icon");
  i.addEventListener("click", deleteTask);
  return i;
};

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};

export default deleteIcon;
