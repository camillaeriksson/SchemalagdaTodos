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

    for (let i = 0; i < datesOfDecember.length; i++) {
        let calendarBox = createDate(i + 1)
        let calendar = document.querySelector('.calendar')
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

