import { player } from "./player";

export const helpers = {
    aspectRatio() {
        const players = document.querySelectorAll('.player');

        players.forEach(element => {
            const maw = element.offsetWidth / 2,
                mah = element.offsetHeight / 2,
                ava = element.querySelector('.player__avatar');

            if (maw > mah) {
                ava.style.minWidth = mah + 'px';
                ava.style.minHeight = mah + 'px';
            } else {
                ava.style.minWidth = maw + 'px';
                ava.style.minHeight = maw + 'px';
            }
        });
    }
}