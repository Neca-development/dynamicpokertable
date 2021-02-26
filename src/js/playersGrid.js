export const playersGrid = {
    playersLimit: 10,
    refreshGrid(playersCount) {
        const grid = document.querySelector('.players-grid');

        grid.classList.remove(grid.classList.item(1))
        grid.classList.add(`players-grid_${playersCount}-players`)
    }
}