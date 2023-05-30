import { cards, gameStatus } from '../script'
import { renderGamePage } from './game-page'
import { CARDS } from '../src/const'
import { fillStatus } from '../src/game'


export function renderWinPage() {
    fillStatus(cards, CARDS)
    renderGamePage(cards)
    const appEl = document.getElementById('wrapper')
if (appEl) {
    let appHtml =
        appEl.innerHTML +
        `
            <div class="win-main">
                <div class="win-smile"> <img src="./assets/images/win.png" alt="win" class='win-mark'></div>
                    <h3 class="win-title">Вы выиграли</h3>
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