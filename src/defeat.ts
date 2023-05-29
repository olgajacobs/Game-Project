import { gameStatus, goToPage } from '../script'
import { renderDefeatPage } from '../rendering/defeat-page'
import { START_PAGE } from './const'

export function defeatPage() {
    renderDefeatPage()
    document.querySelector('.restart-button')?.addEventListener('click', () => {
        gameStatus.level = 0
        gameStatus.timeStart = 0
        goToPage(START_PAGE)
    })
}