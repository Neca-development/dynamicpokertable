export const playersGrid = {
    refreshGrid() {
        const grid = document.querySelector('.players-grid'),
            playersCount = document.querySelectorAll('.players-grid .player').length;

        grid.classList.remove(grid.classList.item(1))
        grid.classList.add(`players-grid_${playersCount}-players`)
    }
}