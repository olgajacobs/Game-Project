import { gameStatus, goToPage } from '../script'
import { renderWinPage } from '../rendering/win-page'
import { START_PAGE } from './const'

export function winPage() {
    renderWinPage()

    document.querySelector('.restart-button')?.addEventListener('click', () => {
        gameStatus.level = 0
        gameStatus.timeStart = 0
        goToPage(START_PAGE)
    })
}
