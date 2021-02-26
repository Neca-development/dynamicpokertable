import { playersGrid } from './playersGrid';

export const player = {
    addPlayer(name, color, country, coins) {
        const grid = document.querySelector('.players-grid'),
            player = document.createElement('div'),
            id = Date.now()

        player.setAttribute('id', id)
        player.classList.add('player')

        grid.append(player)
        playersGrid.refreshGrid()
    }
}


