const taskForm = document.querySelector("#taskForm");
const newTaskInput = document.querySelector("#newTaskInput");
const newTaskButton = document.querySelector("#newTaskButton");
const taskListUI = document.querySelector("#taskList");
const removeAllButton = document.querySelector("#removeAllButton");
const taskList = [];

let newTask = "";
taskForm.addEventListener("submit", handleTaskSubmit);

function handleTaskSubmit(e) {
  e.preventDefault();

  addTask();
  renderTaskList();
}

function handleTextInput(e) {
  newTask = e.target.value;
}

newTaskInput.addEventListener("change", handleTextInput);

function addTask() {
  if (newTask.trim() !== "") {
    taskList.push({ taskDesc: newTask, completed: false });
    newTask = "";
  }
  newTaskInput.value = "";
}

function removeTask(index) {
  taskList.splice(index, 1);

  renderTaskList();
}
function completeTask(index) {
  taskList[index].completed = !taskList[index].completed;

  renderTaskList();
}
function renderTaskList() {
  taskListUI.innerHTML = "";
  taskList.map((task, index) => {
    const taskUI = document.createElement("li");
    const removeTaskButton = document.createElement("button");
    const completeTaskButton = document.createElement("button");

    removeTaskButton.innerHTML = "Remove";
    removeTaskButton.addEventListener("click", () => removeTask(index));

    completeTaskButton.innerHTML = "Complete";
    completeTaskButton.addEventListener("click", () => completeTask(index));

    if (task.completed) {
      taskUI.style.textDecoration = "line-through";
    }
    taskUI.innerHTML = task.taskDesc;
    taskUI.append(removeTaskButton, completeTaskButton);

    taskListUI.append(taskUI);
  });
}

function removeAllTasks() {
  taskList.length = 0;
  console.log(taskList);
  renderTaskList();
}

removeAllButton.addEventListener("click", removeAllTasks);
