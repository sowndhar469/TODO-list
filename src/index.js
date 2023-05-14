// Get references to HTML elements
const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Add event listener to the "Add" button
addButton.addEventListener("click", function () {
  const task = todoInput.value;
  if (task !== "") {
    // Create a new todo item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoItem.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.textContent = task;
    todoItem.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    todoItem.appendChild(deleteButton);

    // Add the new todo item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = "";

    // Add event listener to the "Delete" button
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(todoItem);
    });
  }
});
