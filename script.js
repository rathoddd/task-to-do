document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        return taskItem;
    }

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("deleteBtn")) {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        } else if (e.target.classList.contains("checkbox")) {
            const taskItem = e.target.parentElement;
            const taskText = taskItem.querySelector("span");
            taskText.classList.toggle("completed");
        }
    });
});
