window.addEventListener('load', loadSite);

//Array for todos
let todos = []

/** Start of program */
function loadSite() {
    addButtonListener()
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
        todoElement = createTodoElement(todo.text + " " + todo.date + "e", index);
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
    console.log(indexToRemove);
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
    cross.innerHTML = '<i class="fas fa-times"></i>'
    cross.addEventListener('click', removeTodoListener);

    // Adds checkbox and todo in li
    li.append(cross, todoText);

    return li;
}


