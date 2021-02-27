export const table = {
    drawTable(players) {
        const tablewrapper = document.getElementById('dynamicpockertable');
        tablewrapper.innerHTML = `
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
        const table = document.getElementById('table');

        table.style.backgroundColor = tableColor;
        table.style.borderColor = borderColor;
    },

    sendMessageToTable(message) {
        const tablecontainer = document.getElementById('message-box');
        tablecontainer.innerHTML = message;
    }
}
