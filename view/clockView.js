function renderHeader() {
    return`
    <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">World Clock</span>
          </nav>
    `
}

function renderEmptyClock() {
    return `  <div id="clock">Please Select a Region</div>`
}

function renderCurrentClock(pLocation) {
    clockElement.innerHTML = `<div id="clock">${createCurrentClock(pLocation)}</div>`
}

function renderButtons() {
    return `
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Location
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      ${addButton()}
    </div>
  </div>`
}