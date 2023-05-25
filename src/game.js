import { cards, gameStatus, goToPage } from '../script.js';
import { renderGamePage } from '../rendering/game-page.js';
import {
    WIN_PAGE,
    DEFEAT_PAGE,
    CLOSED,
    OPENED,
    BEGIN,
    CARDS,
    GAME,
} from './const.js';

export function playGame(status) {
    switch (status) {
        case BEGIN:
            renderGamePage(cards);
            activateStartButton();
            break;
        case CARDS:
            fillStatus(cards, CARDS);
            renderGamePage(cards);
            timer(5); // Показываем играющие карты на 5 секунд

            break;
        case GAME:
            fillStatus(cards, GAME);
            renderGamePage(cards);
            activateCards(cards); // Активируем "Клик" на играющих картах
            // game(cards);
            break;
        default:
            alert('Ошибка в playGame');
            break;
    }
}

function fillStatus(cards, status) {
    if (status === CARDS) {
        cards.forEach((element, index) =>
            element.id === 99
                ? (element.status = CLOSED)
                : (element.status = OPENED)
        );
    } else {
        cards.forEach((element, index) => (element.status = CLOSED));
    }
}
const timer = (deadline) => {
    const timerString = document.querySelector('.back-counter');
    timerString.innerText = deadline;
    let time = deadline;

    const interval = setInterval(() => {
        time -= 1;
        timerString.innerText = time;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        playGame(GAME);
    }, deadline * 1000);
};

function activateStartButton() {
    const startButton = document.querySelector('.start-button');
    startButton.classList.add('pointer');
    startButton.onclick = function () {
        deactivateStartButton();
        playGame(CARDS);
    };
}
function deactivateStartButton() {
    const startButton = document.querySelector('.start-button');
    startButton.onclick = '';
    startButton.classList.remove('pointer');
}
function activateCards(cards) {
    const cardsList = document.querySelectorAll('.memory-card');
    for (let card of cardsList) {
        if (cards[card.id].id !== 99) card.classList.add('pointer');
        card.onclick = function () {
            if (cards[card.id].id !== 99) {
                cards[card.id].status = OPENED; // Возможно, что уже не нужно

                const currentCard = document.getElementById(card.id);
                currentCard.classList.remove('pointer');
                for (const child of currentCard.children) {
                    child.setAttribute(
                        'src',
                        `./assets/cards/${cards[card.id].id}.png`
                    );
                }
                //TODO Разобраться почему alert мешает перерисовке  карты

                if (gameStatus.firstCard) {
                    // Открыли вторую карту
                    if (gameStatus.firstCard === cards[card.id].id) {
                        alert('Вы победили');
                    } else {
                        alert('Вы проиграли');
                    }
                    gameStatus.firstCard = null;
                } else {
                    gameStatus.firstCard = cards[card.id].id;
                }

                card.onclick = '';
            }
        };
    }
}
