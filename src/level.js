import { gameStatus, goToPage } from '../script.js';
import { renderLevelPage } from '../rendering/level-page.js';
import { GAME_PAGE } from './const.js';

export function chooseLevel() {
    renderLevelPage(); //Заполнение HTML

    document.querySelector('.radio-group').addEventListener('click', () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        for (let radioButton of radioButtons) {
            if (radioButton.checked) {
                gameStatus.level = radioButton.value;
                const startButtonClasslist =
                    document.querySelector('.start-button').classList;
                if (!startButtonClasslist.contains('pointer'))
                    startButtonClasslist.add('pointer');
                return;
            }
        }
    });

    document.querySelector('.start-button').addEventListener('click', () => {
        if (gameStatus.level !== 0) {
            gameStatus.timeStart = new Date();
            goToPage(GAME_PAGE);
        }
    });
}
