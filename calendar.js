window.addEventListener('load', renderCalender);

/** Start of program*/
function renderCalender() {
    monthOfDecember()
}

/** Renders dates in the calender */
function monthOfDecember() {
    let datesOfDecember = new Array(31);
    let calendar = document.querySelector('.calendar');
    calendar.innerHTML = "";

    for (let i = -5; i <= datesOfDecember.length; i++) {
        let numberOfTodos = 0;
        let calendarBox = createDate(i);
        let todoNumber = document.createElement("p");
        todoNumber.className = "todoNumber";

        todos.forEach((todo) => {
            if (todo.date == i) {
                numberOfTodos++;
                todoNumber.innerHTML = numberOfTodos;
                calendarBox.appendChild(todoNumber);
            }
        })

        calendar.appendChild(calendarBox);
    }
}

/**
 * Creates a new div where the date is rendered
 * @param {HTMLDivElement} date the current index
 */
function createDate(date) {
    let newDivElement = document.createElement("div")
    let printedDate = document.createElement("h4")
    printedDate.innerHTML += (date)
    newDivElement.className = "calendarBoxes"
    printedDate.className = "printedDate"
    newDivElement.appendChild(printedDate)
    return newDivElement
}

