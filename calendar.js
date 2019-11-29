window.addEventListener('load', renderCalender)

/**
 * Starts the functions
 */
function renderCalender() {
    monthOfDecember()
}

/**
 * Renders dates in the calender 
 */
function monthOfDecember() {
    let datesOfDecember = new Array(31)
    let calendar = document.querySelector('.calendar')
    calendar.innerHTML = ""

    for (let i = 1; i <= datesOfDecember.length; i++) {
        let numberOfTodos = 0
        todos.forEach((todo) => {
            if (todo.date == i) { numberOfTodos++ }
        })

        let calendarBox = createDate(i)
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
//Hur kommer jag åt indexet i array? Utan global variabel
// Är det bättre med ett objekt?
