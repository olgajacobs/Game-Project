import { gameStatus, goToPage } from '../script';
import { renderLevelPage } from '../rendering/level-page';
import { GAME_PAGE } from './const';

export function chooseLevel() {
    renderLevelPage(); //Заполнение HTML
    document.querySelector('.radio-group')?.addEventListener('click', () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons?.forEach((radioButton) => {
            if ((radioButton as HTMLInputElement).checked) {
                gameStatus.level = Number(
                    (radioButton as HTMLInputElement).value
                );
                const startButtonClasslist =
                    document.querySelector('.start-button')?.classList;
                if (!startButtonClasslist?.contains('pointer'))
                    startButtonClasslist?.add('pointer');
                return;
            }
        });
    });

    document.querySelector('.start-button')?.addEventListener('click', () => {
        if (gameStatus.level !== 0) {
            goToPage(GAME_PAGE);
        }
    });
}
