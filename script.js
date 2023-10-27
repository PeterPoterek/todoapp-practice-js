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

const handleTextInput = (e) => {
  newTask = e.target.value;
};

newTaskInput.addEventListener("change", handleTextInput);

const addTask = () => {
  console.log(newTask);
  taskList.push({ taskDesc: newTask, completed: false });
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
