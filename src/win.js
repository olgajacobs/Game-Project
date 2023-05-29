import { gameStatus, goToPage } from '../script.js'
import { renderWinPage } from '../rendering/win-page.js'
import { START_PAGE } from './const.js'

export function winPage() {
    renderWinPage()

    document.querySelector('.restart-button').addEventListener('click', () => {
        gameStatus.level = 0
        gameStatus.timeStart = null
        goToPage(START_PAGE)
    })
}