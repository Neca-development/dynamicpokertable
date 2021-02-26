export const table = {
    drawTable(players) {
        var $tablewrapper = document.getElementById('dynamicpockertable');
        $tablewrapper.innerHTML = `
    <div class="table-wrapper">
    <div class="table" id="table"></div>
    </div>
    <div class="message-box" id="message-box"></div>
    <div class="players-grid"></div >
    `;
        this.applyColorsToTable('#076B94', '#666');
        this.sendMessageToTable(`Hello from container!!!`);
    },

    applyColorsToTable(tableColor, borderColor) {
        var $table = document.getElementById('table');

        $table.style.backgroundColor = tableColor;
        $table.style.borderColor = borderColor;
    },

    sendMessageToTable(message) {
        var $tablecontainer = document.getElementById('message-box');
        $tablecontainer.innerHTML = message;
    }
}