const newTaskInput = document.querySelector("#newTaskInput");
const newTaskButton = document.querySelector("#newTaskButton");

newTaskInput.addEventListener("change", (e) => {
  let newTask = e.target.value;
  console.log(newTask.length);
  if (newTask === " " || newTask.length === 0) {
    newTaskButton.setAttribute("disabled", true);
  } else {
    newTaskButton.removeAttribute("disabled");
  }
});
