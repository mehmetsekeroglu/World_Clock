/**
 * Bölgeye göre saati ayarlar
 * @param {*} pLocation 
 */
function createCurrentClock(pLocation) {
    let date = new Date();
    let time = date.toLocaleTimeString("ch-CH", {
        timeZone: `${pLocation}`
    });
    return time
}

/**
 * Saatin her saniyede güncellenmesini saglar
 * @param {*} pLocation 
 */
function startClock(pLocation) {
    clock = setInterval(function () {
        renderCurrentClock(pLocation)
    }, 1000);
}

/**
 * Saat güncelleme islemini durdurur
 */
function stopClock() {
    clearInterval(clock);
}

/**
 * secilen bölgeye göre saatin calismasini baslatir
 */
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