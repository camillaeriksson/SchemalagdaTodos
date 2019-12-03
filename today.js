window.onload = loadPage;

/** Start of program */
function loadPage() {
    weekday()
    date()
    time()
    setInterval(time, 1000)
}

/** Contains array for weekdays and prints the current day */
function weekday() {
    // Array for weekdays
    let day = new Date();
    weekday[0] = "Söndag";
    weekday[1] = "Måndag";
    weekday[2] = "Tisdag";
    weekday[3] = "Onsdag";
    weekday[4] = "Torsdag";
    weekday[5] = "Fredag";
    weekday[6] = "Lördag";

    // Prints current day
    let lista = weekday[day.getDay()];
    document.querySelector(".weekday").innerText = lista;
}

/** Prints todays date */
function date() {
    // Fetches date, month and year
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    // Prints date
    today = dd + '/' + mm + '/' + yyyy;
    document.querySelector(".date").innerText = today;
}

/** Prints current time */
function time() {
    // Fetches hours, minutes and seconds
    let time = new Date();
    let currentTime =
        String(time.getHours()).padStart(2, '0') + ":" +
        String(time.getMinutes()).padStart(2, '0') + ":" +
        String(time.getSeconds()).padStart(2, '0');

    // Prints time
    document.querySelector(".time").innerText = currentTime;
}