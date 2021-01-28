function createCurrentClock(pLocation) {
    let date = new Date();
    let time = date.toLocaleTimeString("ch-CH", {
        timeZone: `${pLocation}`
    });
    return time
}

function startClock(pLocation) {
    clock = setInterval(function () {
        renderCurrentClock(pLocation)
    }, 1000);
}

function stopClock() {
    clearInterval(clock);
}

function viewCurrentUI() {
    optionsElement.addEventListener("click", (event) => {
        stopClock();
        landes.map(land => {
            if (event.target.id === land) {
                startClock(land);
                locationElement.innerHTML = land;
            }
        })
    })
}