// Vid = 43:15
//localStorage.clear();

//  === Selectors ===

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//const filterOption = document.querySelector('.filter-todo');
const filterAll = document.querySelector('.allFilter');
const filterActive = document.querySelector('.activeFilter');
const filterCompleted = document.querySelector('.completedFilter');

// === Event Listeners ===
filterAll.addEventListener('click',allFilter);
filterActive.addEventListener('click', activeFilter)
filterCompleted.addEventListener('click', completedFilter)

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//filterOption.addEventListener('click', filterTodo)

// === Functions ====

function addTodo(event) {
    // dont reload page => prevent form from submitting
    event.preventDefault();
    // Create Todo li
    const todoDiv = document.createElement('li');
    todoDiv.classList.add('todo');

    // Check mark button
    const completedButton = document.createElement('button');
    // completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Create Li
    const newTodo = document.createElement('span');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);
    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-times"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    // Clear Todo Input
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    // Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();

    }
    // Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;

        done(todo);
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";

                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "active":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }

                break;
        }
    });
}

function allFilter(e) {
    filterAll.classList.toggle("bold")
    filterActive.classList.remove("bold")
    filterCompleted.classList.remove("bold")
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        todo.style.display = "flex";
    });
}
function activeFilter(e) {
    filterAll.classList.remove("bold")
    filterActive.classList.toggle("bold")
    filterCompleted.classList.remove("bold")
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (!todo.classList.contains('completed')) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}
function completedFilter(e) {
    filterAll.classList.remove("bold")
    filterActive.classList.remove("bold")
    filterCompleted.classList.toggle("bold")
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (todo.classList.contains('completed')) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}
function saveLocalTodos(todo) {
    // CHECK IS IT ON LOCAL ANYTHING?
    let todos = checkLocalStorage();
    todos.push([todo, false]);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos = checkLocalStorage();
    let counter = -1;
    todos.forEach(function (todo) {
        counter++;
        //console.log(todo[counter]);
        // Create Todo Div
        const todoDiv = document.createElement('li');
        todoDiv.classList.add('todo');
        if (todos[counter][1] === true) {
            todoDiv.classList.add('completed');
        }
        // Check mark button
        const completedButton = document.createElement('button');
        // completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // Create Li
        const newTodo = document.createElement('span');
        newTodo.innerText = todo[0];
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-times"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // append to list
        todoList.appendChild(todoDiv);

    })
}

function removeLocalTodos(todo) {
    let todos = checkLocalStorage();
    let indx;
    for (let i=0;i<todos.length;i++){
        if (todos[i][0]===todo.children[1].innerText){
            indx=i;
        }
    }
    // const todoIndex = todo.children[0].innerText;
    todos.splice(indx,1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function checkLocalStorage(todos) {
    if (localStorage.getItem('todos') === null) {
        return todos = [];
    } else {
        return todos = JSON.parse(localStorage.getItem('todos'));
    }
}

function done(todo) {
    todo.classList.toggle("completed");
    let todos = checkLocalStorage();
    const todoIndex = todo.children[1].innerText;
    let fIndex;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i][0] === todo.children[1].innerText) {
            fIndex = i;
        }
    }
    console.log(fIndex)
    if (!todos[fIndex][1] === true) {
        todos[fIndex][1] = true;
    } else {
        todos[fIndex][1] = false;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}