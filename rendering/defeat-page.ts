import { cards, gameStatus } from '../script'
import { renderGamePage } from './game-page'
import { CARDS } from '../src/const'
import { fillStatus } from '../src/game'

export function renderDefeatPage() {
    fillStatus(cards, CARDS)
    renderGamePage(cards)
    const appEl = document.getElementById('wrapper')
    if (appEl) {
        const appHtml =
            appEl.innerHTML +
            `
            <div class="win-main">
                <div class="win-smile"> <img src="./assets/images/lose.png" alt="win" class='win-mark'></div>
                    <h3 class="win-title">Вы проиграли</h3>
                    <h4 class="spended-time-title">Затраченное время:</h4>

                    <div class="spended-time">
                        <section><span id="timerid" class="game-timer">${gameStatus.timeString}</span></section>
                    </div>
                    <button class="restart-button pointer">Играть снова</button>
            </div>
        `
        appEl.innerHTML = appHtml
    }
}
