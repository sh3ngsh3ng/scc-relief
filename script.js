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
        for (let todo of todos) {
            const li = document.createElement("li")
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                                ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>               
                            `;
            todoList.appendChild(li)
        }
    }


    main();
    renderTodos(todos)
});