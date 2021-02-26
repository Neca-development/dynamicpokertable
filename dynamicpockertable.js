function drawTable(players) {
  var $tablewrapper = document.getElementById('dynamicpockertable');

  $tablewrapper.innerHTML = `
    <div class="table-wrapper">
      <div class="table" id="table"></div>
    </div>
    <div class="message-box" id="message-box"></div>
    <div class="players-grid"></div >
`;
  sendMessageToTable(`Hello from container!!!`);
}

function addPlayer(name, color, country, coins) {
  const grid = document.querySelector('.players-grid'),
    player = document.createElement('div')
  id = Date.now()

  player.setAttribute('id', id)
  player.classList.add('player')

  grid.append(player)
  refreshPlayersGrid()
}

function refreshPlayersGrid() {
  const grid = document.querySelector('.players-grid'),
    playersCount = document.querySelectorAll('.players-grid .player').length;

  grid.classList.remove(grid.classList.item(1))
  grid.classList.add(`players-grid_${playersCount}-players`)
}

function applyColorsToTable(tableColor, borderColor) {
  var $table = document.getElementById('table');

  $table.style.backgroundColor = tableColor;
  $table.style.borderColor = borderColor;
}

function sendMessageToTable(message) {
  var $tablecontainer = document.getElementById('message-box');
  $tablecontainer.innerHTML = message;
}

drawTable([]);
applyColorsToTable('#076B94', '#666');