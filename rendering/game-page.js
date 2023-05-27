import { CLOSED } from '../src/const.js';

export function renderGamePage(cards) {
    const appEl = document.getElementById('wrapper');

    let appHtml = `  <header>
        <div class="time"><img src="./assets/images/таймер.png" alt="timer" class="timer"></div>
        <div class="back-counter"></div>
        <div class="start-button">Старт</div>
    </header>`;
    appHtml += `<div class="memory-game">`;
    appHtml += cards
        .map((card, index) => {
            return renderCard(card, index);
        })
        .join('');
    appHtml += `</div>`;
    appEl.innerHTML = appHtml;
}

function renderCard(card, index) {
    // Рендер одной карты

    return `<div class="memory-card" id=${index}> 
        <img src="./assets/cards/${
            card.status === CLOSED ? '99' : card.id
        }.png" alt="card" 
        class=${card.status === CLOSED ? 'card_back' : 'card_front'}></div>`;
}
