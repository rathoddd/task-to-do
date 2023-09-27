class TodoList {
    constructor() {
        this.taskList = document.getElementById("taskList");
    }

    createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        return taskItem;
    }

    addTask(taskText) {
        const taskItem = this.createTaskElement(taskText);
        this.taskList.appendChild(taskItem);

        console.log("taskText");
    }

  
   

    deleteTask(taskItem) {
        this.taskList.removeChild(taskItem);
    }
}

// Export the TodoList class
export default TodoList;
