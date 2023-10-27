const taskForm = document.querySelector("#taskForm");
const newTaskInput = document.querySelector("#newTaskInput");
const newTaskButton = document.querySelector("#newTaskButton");
const taskListUI = document.querySelector("#taskList");
const taskList = [];

let newTask = "";
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addTask();
  renderTaskList();
});

newTaskInput.addEventListener("change", (e) => {
  newTask = e.target.value;
  console.log(newTask);

  console.log(taskList);
});

const addTask = () => {
  console.log(newTask);
  taskList.push({ taskDesc: newTask, completed: false });
  newTask = "";
};

const renderTaskList = () => {
  taskListUI.innerHTML = "";
  taskList.map((task) => {
    const taskUI = document.createElement("li");
    const completeTaskButton = document.createElement("button");

    taskUI.innerHTML = task.taskDesc;
    completeTaskButton.innerHTML = "Completed";
    taskUI.append(completeTaskButton);

    taskListUI.append(taskUI);
  });
};
