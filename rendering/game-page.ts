import { CLOSED } from '../src/const';
import { Card, Cards } from '../script';

export function renderGamePage(cards:Cards) {
    const appEl = document.getElementById('wrapper');
if (appEl) {
    let appHtml = `  <header>
        <div class="time">
        <section class="timeset"><p class="min">min</><p class="sek">sek</p></section>
        <section><span id="timerid" class="game-timer">00.00</span></section>
        </div>
        <div class="back-counter"></div>
        <div class="start-button">Старт</div>
    </header>`;
    appHtml += `<div class="memory-game">`;
    appHtml += cards
        .map((card, index:Number) => {
            return renderCard(card, index);
        })
        .join('');
    appHtml += `</div>`;
    appEl.innerHTML = appHtml;
}
}

function renderCard(card:Card, index:Number) {
    // Рендер одной карты

    return `<div class="memory-card" id=${index}> 
        <img src="./assets/cards/${
            card.status === CLOSED ? '99' : card.id
        }.png" alt="card" 
        class=${card.status === CLOSED ? 'card_back' : 'card_front'}></div>`;
}
