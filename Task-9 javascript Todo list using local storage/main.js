let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// empty the array to store the tasks
let arrayOfTasks = [];

// check if theres tasks in local storage
if (window.localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

// delete button functionality
tasksDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    // remove element from local storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // remove element from page
    e.target.parentElement.remove();
  }
});

mydel.addEventListener("click", function (e) {
  for (let i = 0; i < close.length; i++) {
    this.parentElement.remove();
  }
});

function addTaskToArray(taskText) {
  // task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // push Task to Array of Tasks
  arrayOfTasks.push(task);
  // add tasks to page
  addElementsToPageFrom(arrayOfTasks);
  // add tasks to local storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty the tasks div
  tasksDiv.innerHTML = ""; // #
  // looping on array of tasks
  arrayOfTasks.forEach((task) => {
    // create main div
    let div = document.createElement("div");
    div.className = "task";
    // check if task is Done
    if (task.completed) {
      div.className = "task done";
    }

    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    // delete button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // append the span to the main div
    div.appendChild(span);
    // add task div to taks container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}
