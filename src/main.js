import { player } from './js/player';
import { table } from './js/table';


table.drawTable([])

// TODO remove after test
// add player
document.querySelector('.test-add-player').addEventListener('click', () => { player.addPlayer() })
// remove player
document.querySelector('#dynamicpockertable').addEventListener('click', e => {
    if (e.target.classList.contains('player__delete')) {
        const id = e.target.closest('.player').getAttribute('id')
        player.removePlayer(id)
        console.log(id);
    }
})