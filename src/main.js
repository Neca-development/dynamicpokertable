import { player } from './js/player';
import { table } from './js/table';


table.drawTable([])


// Тест добавления игрока
document.querySelector('.test-add-player').addEventListener('click', () => { player.addPlayer() })