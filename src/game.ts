import { cards, gameStatus, goToPage } from '../script'
import { renderGamePage } from '../rendering/game-page'
import { Cards } from '../script'
import {
    WIN_PAGE,
    DEFEAT_PAGE,
    CLOSED,
    OPENED,
    BEGIN,
    CARDS,
    GAME,
} from './const'

let gameTimer: NodeJS.Timer

export function playGame(status: string) {
    switch (status) {
        case BEGIN:
            renderGamePage(cards)
            activateStartButton()
            break
        case CARDS:
            fillStatus(cards, CARDS)
            renderGamePage(cards)
            timer(5) // Показываем играющие карты на 5 секунд
            break
        case GAME:
            fillStatus(cards, GAME)
            renderGamePage(cards)
            activateCards(cards) // Активируем "Клик" на играющих картах
            timer(0) //Запускаем таймер игры
            break
        default:
            alert('Ошибка в playGame')
            break
    }
}

export function fillStatus(cards: Cards, status: string) {
    if (status === CARDS) {
        cards.forEach((element) =>
            element.id === 99
                ? (element.status = CLOSED)
                : (element.status = OPENED)
        )
    } else {
        cards.forEach((element) => (element.status = CLOSED))
    }
}

const timer = (deadline: number) => {
    const timerString = document.getElementById('timerid')
    if (deadline) {
        //Если задан параметр то ведем обратный отсчет
        if (timerString) timerString.innerHTML = `00:0${deadline}`
        let time = deadline
        const reverseTimer = setInterval(() => {
            time -= 1
            if (timerString) timerString.innerHTML = `00:0${time}`
        }, 1000)

        setTimeout(() => {
            //Отключаем таймер через 5 сек и запускаем игру
            clearInterval(reverseTimer)
            playGame(GAME)
        }, deadline * 1000)
    } else {
        //Если не задан парметр до запускаем бесконечный 1 сек счетчик
        gameStatus.timeStart = Date.now()
        gameTimer = setInterval(() => {
            const _tsec = (Date.now() - gameStatus.timeStart) / 1000
            const min = Math.floor(_tsec / 60)
            const sec = Math.floor(_tsec % 60)
            let mins = String(min)
            let secs = String(sec)

            if (sec < 10) secs = '0' + String(sec)
            if (min < 10) mins = '0' + String(min)
            gameStatus.timeString = mins + '.' + secs
            if (timerString) timerString.innerHTML = mins + '.' + secs
        }, 1000)
    }
}

function activateStartButton() {
    const startButton = document.querySelector(
        '.start-button'
    ) as HTMLButtonElement
    if (startButton) {
        startButton.classList.add('pointer')
        startButton.onclick = function () {
            deactivateStartButton()
            playGame(CARDS)
        }
    }
}
function deactivateStartButton() {
    const startButton = document.querySelector(
        '.start-button'
    ) as HTMLButtonElement
    if (startButton) {
        startButton.onclick = null
        startButton.classList.remove('pointer')
    }
}
function activateCards(cards: Cards) {
    const cardsList = document.querySelectorAll('.memory-card')
    cardsList?.forEach((card) => {
        if (cards[Number(card.id)].id !== 99) {
            card.classList.add('pointer')
        }
        ;(card as HTMLDivElement).onclick = function () {
            if (cards[Number(card.id)].id !== 99) {
                cards[Number(card.id)].status = OPENED // Возможно, что уже не нужно

                const currentCard = document.getElementById(card.id)
                if (currentCard) {
                    currentCard.classList.remove('pointer')
                    Array.from(currentCard.children).forEach((child) => {
                        child.setAttribute(
                            'src',
                            `./assets/cards/${cards[Number(card.id)].id}.png`
                        )
                    })
                }

                if (gameStatus.firstCard) {
                    // Открыли вторую карту
                    if (gameStatus.firstCard.id === cards[Number(card.id)].id) {
                        if (gameStatus.cardsNeedToOpen === 1) {
                            clearInterval(gameTimer)
                            goToPage(WIN_PAGE)
                        } else {
                            gameStatus.cardsNeedToOpen -= 1
                        }
                    } else {
                        clearInterval(gameTimer)
                        goToPage(DEFEAT_PAGE)
                        gameStatus.firstCard = undefined
                    }
                } else {
                    gameStatus.firstCard = cards[Number(card.id)]
                }
                ;(card as HTMLDivElement).onclick = null
            }
        }
    })
}
