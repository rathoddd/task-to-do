class TodoItem {
    constructor(taskText, onDelete) {
        this.taskText = taskText;
        this.onDelete = onDelete;
    }

    render() {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${this.taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;

        const deleteBtn = taskItem.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            this.onDelete(taskItem);
        });

        return taskItem;
    }
}

export default TodoItem;
