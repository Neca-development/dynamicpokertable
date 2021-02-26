import { playersGrid } from './playersGrid';

export const player = {
    addPlayer(name, color, country, coins) {
        const grid = document.querySelector('.players-grid'),
            playersCount = document.querySelectorAll('.players-grid .player').length,
            player = document.createElement('div'),
            id = Date.now();

        player.setAttribute('id', id)
        player.classList.add('player')

        // Создаем аватар
        const avatar = document.createElement('div')
        avatar.classList.add('player__avatar')
        avatar.style.backgroundColor = (color);
        player.append(avatar)

        if (playersCount === playersGrid.playersLimit) return alert('Лимит превывшен')
        grid.append(player)
        playersGrid.refreshGrid(playersCount + 1)
    }
}


