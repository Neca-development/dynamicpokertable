import { helpers } from './helpers';
export const playersGrid = {
    playersLimit: 10,
    countPlayers() {
        return document.querySelectorAll('.players-grid .player').length
    },
    refreshGrid(playersCount) {
        const grid = document.querySelector('.players-grid');

        grid.classList.remove(grid.classList.item(1))
        grid.classList.add(`players-grid_${this.countPlayers()}-players`)
        // helpers.aspectRatio()
    }
}