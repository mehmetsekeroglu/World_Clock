function createUI() {
    headerElement.innerHTML = renderHeader();
    clockElement.innerHTML = renderEmptyClock();
    optionsElement.innerHTML = renderButtons();
}

function addButton() {
    return landes.map(land => {
        return `<button id="${land}" class="dropdown-item" type="button">${land}</button>`
    }).join("")
}