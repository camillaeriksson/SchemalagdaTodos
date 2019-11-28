window.onload = loadPage

function loadPage() {
    weekday()
    date()
    time()
    setInterval(time, 1000)
}

function weekday() {
    let day = new Date()
    weekday[0] = "Söndag"
    weekday[1] = "Måndag"
    weekday[2] = "Tisdag"
    weekday[3] = "Onsdag"
    weekday[4] = "Torsdag"
    weekday[5] = "Fredag"
    weekday[6] = "Lördag"

    let lista = weekday[day.getDay()]
    document.querySelector(".weekday").innerText = lista
}

function date() {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()

    today = dd + '/' + mm + '/' + yyyy
    document.querySelector(".date").innerText = today
}

function time() {
    let time = new Date()
    let currentTime = 
    String(time.getHours()).padStart(2, '0') + ":" + 
    String(time.getMinutes()).padStart(2, '0') + ":" + 
    String(time.getSeconds()).padStart(2, '0')

    document.querySelector(".time").innerText = currentTime
}