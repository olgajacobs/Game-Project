import { gameStatus, goToPage } from '../script.js'
import { renderDefeatPage } from '../rendering/defeat-page.js'
import { START_PAGE } from './const.js'

export function defeatPage() {
    renderDefeatPage()
    document.querySelector('.restart-button').addEventListener('click', () => {
        gameStatus.level = 0
        gameStatus.timeStart = null
        goToPage(START_PAGE)
    })
}