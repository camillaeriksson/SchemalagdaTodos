window.addEventListener('load', loadSite);

let todos = []

/** Starta programmet */
function loadSite() {
    addButtonListener();
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

    printTodoList(inputToDo, inputDate)


}

function printTodoList(inputToDo, inputDate) {
    const listOfTodos = document.querySelector("ul")

    for (let i = 1; i <= todos.length; i++) {

        listOfTodos.innerHTML = ""
        console.log(todos)
        todos.forEach((todo) => {
            // Lägger till listitem (li) i list (ul)
            todo = createTodoElement(inputToDo.value + " " + inputDate.value + "e");
            document.querySelector('ul').append(todo);

            // Tömmer input-fältet
        })


        inputToDo.value = "";
        inputDate.value = "";
    }


    /** Tar bort todo från listan */
    function removeTodoListener(event) {
        const li = event.target.parentElement;
        li.remove();
    }

    /** Skapar li element med todo samt checkbox*/
    function createTodoElement(todoText) {
        //Skapar li

        const li = document.createElement('li');

        // Skapar checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', removeTodoListener);

        // Lägger till checkbox och todo i li
        li.append(checkbox, todoText);

        return li;
    }
}

