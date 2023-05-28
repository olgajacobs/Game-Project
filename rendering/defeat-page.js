import { cards, gameStatus } from '../script.js'
import { renderGamePage } from './game-page.js'
import { CARDS } from '../src/const.js'
import { fillStatus } from '../src/game.js'

export function renderDefeatPage() {
    fillStatus(cards, CARDS)
    renderGamePage(cards)
    const appEl = document.getElementById('wrapper')

    let appHtml =
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