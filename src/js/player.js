import { playersGrid } from './playersGrid';

export const player = {
    addPlayer(name, country, coins) {
        const grid = document.querySelector('.players-grid'),
            player = document.createElement('span'),
            id = Date.now();

        // create player
        player.setAttribute('id', id)
        player.classList.add('player')

        // create avatar
        const avatar = document.createElement('div')
        avatar.classList.add('player__avatar')
        player.append(avatar)

        // Remove after test
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('player__delete')
        deleteBtn.textContent = 'delete'
        player.append(deleteBtn)


        const textField = document.createElement('div')
        textField.classList.add('player__info')
        textField.textContent = 'Some text.....'
        player.append(textField)

        if (playersGrid.countPlayers() === playersGrid.playersLimit) return alert('Limit is out')
        grid.prepend(player)
        playersGrid.refreshGrid()
    },
    removePlayer(id) {
        document.getElementById(id).remove()
        playersGrid.refreshGrid()
    }
}


