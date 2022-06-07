export const readTasks = () => {

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    consoles.log(tasksList);
};