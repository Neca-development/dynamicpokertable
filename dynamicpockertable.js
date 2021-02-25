function drawTable (players, tableColor, borderColor){
  var $tablewrapper = document.getElementById('dynamicpockertable');

  $tablewrapper.innerHTML = `
    <div class="table-wrapper">
      <div class="table" id="table"></div>
    </div>
    <div class="message-box" id="message-box"></div>
  `;

  applyStyleToTable(tableColor, borderColor);
  sendMessageToTable(`Hello from container!!!`);
}

function applyStyleToTable(tableColor, borderColor){
  var $table = document.getElementById('table');
  
  $table.style.backgroundColor = tableColor;
  $table.style.borderColor = borderColor;
}

function sendMessageToTable(message){
  var $tablecontainer = document.getElementById('message-box');
  $tablecontainer.innerHTML = message;
}

drawTable([], '#076B94', '#666');