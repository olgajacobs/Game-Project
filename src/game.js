import { cards, gameStatus, goToPage } from '../script.js'
import { renderGamePage } from '../rendering/game-page.js'
import {
    WIN_PAGE,
    DEFEAT_PAGE,
    CLOSED,
    OPENED,
    BEGIN,
    CARDS,
    GAME,
} from './const.js'

let gameTimer, mins, secs

export function playGame(status) {
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
            timer() //Запускаем таймер игры
            break
        default:
            alert('Ошибка в playGame')
            break
    }
}

export function fillStatus(cards, status) {
    if (status === CARDS) {
        cards.forEach((element, index) =>
            element.id === 99
                ? (element.status = CLOSED)
                : (element.status = OPENED)
        )
    } else {
        cards.forEach((element, index) => (element.status = CLOSED))
    }
}

const timer = (deadline) => {
    const timerString = document.getElementById('timerid')
    if (deadline) {
        //Если задан параметр то ведем обратный отсчет
        timerString.innerHTML = `00:0${deadline}`
        let time = deadline
        const reverseTimer = setInterval(() => {
            time -= 1
            timerString.innerHTML = `00.0${time}`
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
            mins = Math.floor(_tsec / 60)
            secs = Math.floor(_tsec % 60)
            if (secs < 10) secs = '0' + secs
            if (mins < 10) mins = '0' + mins
            gameStatus.timeString = mins + '.' + secs
            timerString.innerHTML = mins + '.' + secs
        }, 1000)
    }
}

function activateStartButton() {
    const startButton = document.querySelector('.start-button')
    startButton.classList.add('pointer')
    startButton.onclick = function () {
        deactivateStartButton()
        playGame(CARDS)
    }
}
function deactivateStartButton() {
    const startButton = document.querySelector('.start-button')
    startButton.onclick = ''
    startButton.classList.remove('pointer')
}
function activateCards(cards) {
    const cardsList = document.querySelectorAll('.memory-card')
    for (let card of cardsList) {
        if (cards[card.id].id !== 99) card.classList.add('pointer')
        card.onclick = function () {
            if (cards[card.id].id !== 99) {
                cards[card.id].status = OPENED // Возможно, что уже не нужно

                const currentCard = document.getElementById(card.id)
                currentCard.classList.remove('pointer')
                for (const child of currentCard.children) {
                    child.setAttribute(
                        'src',
                        `./assets/cards/${cards[card.id].id}.png`
                    )
                }
                if (gameStatus.firstCard) {
                    // Открыли вторую карту
                    if (gameStatus.firstCard === cards[card.id].id) {
                        if (gameStatus.cardsNeedToOpen === 1) {
                            clearInterval(gameTimer)
                            goToPage(WIN_PAGE)
                        } else {
                            gameStatus.cardsNeedToOpen -= 1
                        }
                    } else {
                        clearInterval(gameTimer)
                        goToPage(DEFEAT_PAGE)
                    }
                    gameStatus.firstCard = null
                } else {
                    gameStatus.firstCard = cards[card.id].id
                }
                card.onclick = ''
            }
        }
    }
}