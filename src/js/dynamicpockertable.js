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