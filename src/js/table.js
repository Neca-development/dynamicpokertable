export const table = {
    drawTable(players) {
        const tablewrapper = document.getElementById('dynamicpockertable');
        tablewrapper.innerHTML = `
            <div class="table-wrapper">
                <div class="table" id="table">
                    <div class="message-box" id="message-box"></div>
                </div>
            </div>
            <div class="players-grid"></div >
        `;
        this.applyColorsToTable('#076B94', '#666');
        this.sendMessageToTable(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Quo vero sint dolorem ab dignissimos, officiis impedit obcaecati id non explicabo nemo! Odio voluptatem magni in rerum nam aliquam recusandae inventore?`);
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
