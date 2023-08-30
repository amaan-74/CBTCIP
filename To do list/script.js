const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerText = taskText;

        const deleteButton = document.createElement("span");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-button";

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function handleTaskClick(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "LI") {
        clickedElement.classList.toggle("completed");
    } else if (clickedElement.classList.contains("delete-button")) {
        const taskItem = clickedElement.parentElement;
        taskList.removeChild(taskItem);
    }
}
