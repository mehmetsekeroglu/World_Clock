/**
 * Baslangic sayfasini UI'da görüntüler
 */
function createUI() {
    headerElement.innerHTML = renderHeader();
    clockElement.innerHTML = renderEmptyClock();
    optionsElement.innerHTML = renderButtons();
}

/**
 * Bölge listesini kullanarak button olusturur
 */
function addButton() {
    return landes.map(land => {
        return `<button id="${land}" class="dropdown-item" type="button">${land}</button>`
    }).join("")
}