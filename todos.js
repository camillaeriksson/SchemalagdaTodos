window.addEventListener('load', loadSite);

let todos = []

/** Starta programmet */
function loadSite() {
    addButtonListener()
}


/** Kör function vid knapptryck */
function addButtonListener() {
    const button = document.querySelector('button');
    button.addEventListener('click', addTodoListener);
}

/** Lägger till todo i listan */
function addTodoListener(event) {
    const inputToDo = document.querySelector(".todo_input");
    const inputDate = document.querySelector(".date_input");


    if (isNaN(inputDate.value) || inputDate.value < 1 || inputDate.value > 31) {
        alert("Ange ett nummer, 1 - 31.");
        return;
    }

    todos.push({
        text: inputToDo.value,
        date: inputDate.value
    })

    // Tömmer input-fältet
    inputToDo.value = "";
    inputDate.value = "";

    printTodoList()
}

function printTodoList() {
    const listOfTodos = document.querySelector("ul")
    listOfTodos.innerHTML = ""

    todos.forEach((todo, index) => {
        // Lägger till listitem (li) i list (ul)
        todoElement = createTodoElement(todo.text + " " + todo.date + "e", index);
        document.querySelector('ul').append(todoElement);
    })

    monthOfDecember()
}

/** Tar bort todo från listan */
function removeTodoListener(event) {
    const indexToRemove = event.target.data;
    todos.splice(indexToRemove, 1)
    printTodoList()
}

/** Skapar li element med todo samt checkbox*/
function createTodoElement(todoText, index) {
    //Skapar li

    const li = document.createElement('li');

    // Skapar checkbox
    const checkbox = document.createElement('input');
    checkbox.data = index
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', removeTodoListener);

    // Lägger till checkbox och todo i li
    li.append(checkbox, todoText);

    return li;
}


