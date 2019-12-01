window.addEventListener('load', renderCalender)

/** Start of program*/
function renderCalender() {
    monthOfDecember()
}

/** Renders dates in the calender */
function monthOfDecember() {
    let datesOfDecember = new Array(31)
    let calendar = document.querySelector('.calendar')
    calendar.innerHTML = ""

    for (let i = 1; i <= datesOfDecember.length; i++) {
        let numberOfTodos = 0
        let calendarBox = createDate(i)
        let todoNumber = document.createElement("p")
        todoNumber.className = "todoNumber"

        todos.forEach((todo) => {
            if (todo.date == i) {
                numberOfTodos++
                todoNumber.innerHTML = numberOfTodos
                calendarBox.appendChild(todoNumber)
            }
        })

        calendar.appendChild(calendarBox)
    }
}

/**
 * Creates a new div where the date is rendered
 * @param {HTMLDivElement} date the current index
 */
function createDate(date) {
    let newDivElement = document.createElement("div")
    newDivElement.innerHTML += (date)
    newDivElement.className = "calendarBoxes"
    return newDivElement
}

function renderArrayInDate(dateOfInput) {
    console.log(dateOfInput)

    console.log(array)
}
