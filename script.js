const todoList = document.getElementById('todo-list');
const addItemButton = document.getElementById('add-item');

addItemButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.innerHTML = '<input type="addLine">';
  todoList.appendChild(newItem);
});


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

  function addTask(taskText) {
      const taskItem = createTaskElement(taskText);
      taskList.appendChild(taskItem);
  }

  function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
  }

  taskForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          addTask(taskText);
          taskInput.value = "";
      }
  });

  taskList.addEventListener("click", function(e) {
      if (e.target.classList.contains("deleteBtn")) {
          const taskItem = e.target.parentElement;
          deleteTask(taskItem);
      } else if (e.target.classList.contains("checkbox")) {
          const taskItem = e.target.parentElement;
          const taskText = taskItem.querySelector("span");
          taskText.classList.toggle("completed");
      }
  });
});







