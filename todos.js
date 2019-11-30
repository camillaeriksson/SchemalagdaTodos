window.addEventListener('load', loadSite);

//Array for todos
let todos = []

/** Start of program */
function loadSite() {
    addButtonListener();
}

/** Handles mouse click on button */
function addButtonListener() {
    const button = document.querySelector('button');
    button.addEventListener('click', addTodoListener);
}

/** Adds todo to list */
function addTodoListener(event) {
    const inputToDo = document.querySelector(".todo_input");
    const inputDate = document.querySelector(".date_input");

    // Handles wrong input from user
    if (isNaN(inputDate.value) || inputDate.value < 1 || inputDate.value > 31) {
        alert("Ange ett nummer, 1 - 31.");
        return;
    }
    // Adds todo and date to array
    todos.push({
        text: inputToDo.value,
        date: inputDate.value
    })

    // Empties the input fields
    inputToDo.value = "";
    inputDate.value = "";

    // Prints todo-list
    printTodoList()
}

/** Prints todo-list on DOM */
function printTodoList() {
    const listOfTodos = document.querySelector("ul")
    //Empties the whole list of todos before printing the updated one
    listOfTodos.innerHTML = ""

    // Adds listitem (li) to list (ul)
    todos.forEach((todo, index) => {
        todoElement = createTodoElement(todo.text + " " + todo.date + "e", index);
        document.querySelector('ul').append(todoElement);
    })
}

/** Removes todos from array when clicking on them */
function removeTodoListener(event) {
    const indexToRemove = event.target.data;
    todos.splice(indexToRemove, 1)

    //Prints updated list
    printTodoList()
}

/** Creates li element with todo and checkbox*/
function createTodoElement(todoText, index) {
    //Creates li
    const li = document.createElement('li');

    // Creates checkbox
    const checkbox = document.createElement('input');
    checkbox.data = index
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', removeTodoListener);

    // Adds checkbox and todo in li
    li.append(checkbox, todoText);

    return li;
}


