document.addEventListener('DOMContentLoaded', function () {
    console.log("hello")
    function main() {

        // add three todos
        addTodo(todos, "Walk the dog", 5);
        addTodo(todos, "Clean the room", 3);
        addTodo(todos, "Pay the bill", 2);
    }

    function renderTodos(todos) {
        const todoList = document.querySelector("#todoList");
        todoList.innerHTML = ""
        for (let todo of todos) {
            const li = document.createElement("li")
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                                ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>               
                                <button class="btn edit-btn btn-success btn-sm">Edit</button>
                                `;
            todoList.appendChild(li)

            li.querySelector(".edit-btn").addEventListener('click', function () {
                // alert("Editing: " + todo.name)
                const newName = prompt("Enter the new task name: ", todo.name);
                const newUrgency = prompt("Enter the new urgency: ", todo.urgency)
                modifyTask(todos, todo.id, newName, newUrgency)
                renderTodos(todos);
            })
        }
    }

    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener('click', function () {
        const taskNameInput = document.querySelector("#taskName")
        const taskName = taskNameInput.value;

        const taskUrgencySelect = document.querySelector("#taskUrgency");
        const taskUrgency = taskUrgencySelect.value;

        if (taskName) {
            addTodo(todos, taskName, taskUrgency);
            renderTodos(todos);
            taskNameInput.value = '';
        }
    });


    main();
    renderTodos(todos)
});