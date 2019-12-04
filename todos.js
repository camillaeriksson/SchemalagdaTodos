window.addEventListener('load', loadSite);

//Array for todos
let todos = []

/** Start of program */
function loadSite() {
    addButtonListener();
    addEnterListener();
}

/**
 * Applies keyup event on input fields
 */
function addEnterListener() {
    document.querySelector('.todo_input').addEventListener("keyup", handleKeyUp);
    document.querySelector('.date_input').addEventListener("keyup", handleKeyUp);
}

/**
 * Handles keyup on enter and runs addToDoListener if enter is pushed
 * @param {KeyboardEvent} event Built in event in Java Script
 */
function handleKeyUp(event) {
    if (event.key === "Enter") {
        addTodoListener();
    }



}

/** Handles mouse click on button */
function addButtonListener() {
    const button = document.querySelector('button');
    button.addEventListener('click', addTodoListener);
}

/** Adds todo to list */
function addTodoListener() {
    const inputToDo = document.querySelector(".todo_input");
    const inputDate = document.querySelector(".date_input");
    const wrongInput = document.querySelector(".wronginput");

    // Handles wrong input from user
    if (isNaN(inputDate.value) || inputDate.value < 1 || inputDate.value > 31) {
        wrongInput.innerHTML = "Ange ett nummer, 1 - 31"
        inputDate.value = "";
        return;
    }

    else {
        wrongInput.innerHTML = "";
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
        todoElement = createTodoElement(todo.text + " - " + todo.date + "e", index);
        document.querySelector('ul').append(todoElement);
    })
    monthOfDecember()
}


/**
 * Removes todos from array when clicking on them
 * @param {MouseEvent} event Built in event in JavaScript
 */
function removeTodoListener(event) {
    const indexToRemove = event.target.data;

    todos.splice(indexToRemove, 1)

    //Prints updated list
    printTodoList()
}

/**
 * Creates li element with todo and checkbox
 * @param {string} todoText Text from todo input field
 * @param {number} index The index of the todo in the array
 */
function createTodoElement(todoText, index) {
    //Creates li
    const li = document.createElement('li');

    // Creates checkbox
    const cross = document.createElement('i');
    cross.data = index;
    cross.innerHTML = 'x'
    cross.addEventListener('click', removeTodoListener);

    // Adds checkbox and todo in li
    li.append(cross, todoText);

    return li;
}


