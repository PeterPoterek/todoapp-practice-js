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

  console.log(taskList);
});

const handleTextInput = (e) => {
  newTask = e.target.value;
};

newTaskInput.addEventListener("change", handleTextInput);

const addTask = () => {
  if (newTask.trim() !== "") {
    taskList.push({ taskDesc: newTask, completed: false });
    newTask = "";
  }
  newTaskInput.value = "";
};

const removeTask = (index) => {
  taskList.splice(index, 1);

  renderTaskList();
};
const completeTask = (index) => {
  taskList[index].completed = true;

  renderTaskList();
};
const renderTaskList = () => {
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
};
