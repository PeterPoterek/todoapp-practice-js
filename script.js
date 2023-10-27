const taskForm = document.querySelector("#taskForm");
const newTaskInput = document.querySelector("#newTaskInput");
const newTaskButton = document.querySelector("#newTaskButton");
const taskListUI = document.querySelector("#taskList");
const taskList = [];

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderTaskList();
});

newTaskInput.addEventListener("change", (e) => {
  e.preventDefault();
  let newTask = e.target.value;
  if (newTask === " " || newTask.length === 0) {
    newTaskButton.setAttribute("disabled", true);
  } else {
    newTaskButton.removeAttribute("disabled");
  }

  taskList.push({ taskDesc: newTask, completed: false });
  console.log(taskList);
});

const renderTaskList = () => {
  taskList.map((task) => {
    console.log(task);
    const taskUI = document.createElement("li");
    const completeTaskButton = document.createElement("button");

    taskUI.innerHTML = task.taskDesc;
    completeTaskButton.innerHTML = "Completed";
    taskUI.append(completeTaskButton);

    taskListUI.append(taskUI);
  });
};
