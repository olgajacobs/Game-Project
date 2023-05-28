/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./rendering/game-page.js":
/*!********************************!*\
  !*** ./rendering/game-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGamePage: () => (/* binding */ renderGamePage)
/* harmony export */ });
/* harmony import */ var _src_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/const.js */ "./src/const.js");


function renderGamePage(cards) {
    const appEl = document.getElementById('wrapper');

    let appHtml = `  <header>
        <div class="time">
        <section class="timeset"><p class="min">min</><p class="sek">sek</p></section>
        <section><span id="timerid" class="game-timer">0:00</span></section>
        </div>
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
            card.status === _src_const_js__WEBPACK_IMPORTED_MODULE_0__.CLOSED ? '99' : card.id
        }.png" alt="card" 
        class=${card.status === _src_const_js__WEBPACK_IMPORTED_MODULE_0__.CLOSED ? 'card_back' : 'card_front'}></div>`;
}


/***/ }),

/***/ "./rendering/level-page.js":
/*!*********************************!*\
  !*** ./rendering/level-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLevelPage: () => (/* binding */ renderLevelPage)
/* harmony export */ });
function renderLevelPage() {
    const appEl = document.getElementById('wrapper');

    const appHtml = `
            <div class="main">
                <h3 class="main-title">Выбери сложность</h3>
                <div class="radio-group">
                    <input id="radio_1" type="radio" name="radio" value="1">
                    <label for="radio_1">1</label>

                    <input id="radio_2" type="radio" name="radio" value="2">
                    <label for="radio_2">2</label>
                
                    <input id="radio_3" type="radio" name="radio" value="3">
                    <label for="radio_3">3</label>
                </div>
                <button class="start-button">Старт</button>
            </div>
        `;
    appEl.innerHTML = appHtml;
}


/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   gameStatus: () => (/* binding */ gameStatus),
/* harmony export */   goToPage: () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _src_level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/level.js */ "./src/level.js");
/* harmony import */ var _src_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/game.js */ "./src/game.js");
/* harmony import */ var _src_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/const.js */ "./src/const.js");
const gameStatus = {
    level: 0,
    firstCard: null,
    timeStart: 0,
};
const cardQuantityForLevel = [6, 12, 18];
let cards = [];





const goToPage = (newPage, data) => {
    switch (newPage) {
        case _src_const_js__WEBPACK_IMPORTED_MODULE_2__.START_PAGE:
            (0,_src_level_js__WEBPACK_IMPORTED_MODULE_0__.chooseLevel)();
            break;
        case _src_const_js__WEBPACK_IMPORTED_MODULE_2__.GAME_PAGE:
            cards = generateCards(cardQuantityForLevel[gameStatus.level - 1]);
            (0,_src_game_js__WEBPACK_IMPORTED_MODULE_1__.playGame)(_src_const_js__WEBPACK_IMPORTED_MODULE_2__.BEGIN);
            break;
        case _src_const_js__WEBPACK_IMPORTED_MODULE_2__.WIN_PAGE:
            // renderWinPageComponent();
            break;
        case _src_const_js__WEBPACK_IMPORTED_MODULE_2__.DEFEAT_PAGE:
            // renderDefeatPageComponent();
            break;
        default:
            break;
    }
    return;
};
const generateCards = (cardQuantity) => {
    const CardList = [];
    let auxArray = [];
    for (let i = 0; i < 36; i++) auxArray[i] = i; // Создаем полный набор карт
    shuffle(auxArray); // Перемешиваем его карты

    auxArray = auxArray.slice(0, cardQuantity); //Вырезаем нужное количество карт
    auxArray = [...auxArray, ...auxArray]; //Добавляем пары

    shuffle(auxArray); // Перемешиваем отбранные пары

    for (let i = 0; i < 36; i++) {
        CardList[i] = {
            id: i < cardQuantity * 2 ? auxArray[i] : 99,
            status: _src_const_js__WEBPACK_IMPORTED_MODULE_2__.CLOSED,
        }; // 99 - у нас будет нарисована "неактивная рубашка"
    }
    return CardList;
};

const shuffle = (array) => {
    // Тасование Фишера — Йетса
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

goToPage(_src_const_js__WEBPACK_IMPORTED_MODULE_2__.START_PAGE);


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BEGIN: () => (/* binding */ BEGIN),
/* harmony export */   CARDS: () => (/* binding */ CARDS),
/* harmony export */   CLOSED: () => (/* binding */ CLOSED),
/* harmony export */   DEFEAT_PAGE: () => (/* binding */ DEFEAT_PAGE),
/* harmony export */   FREE: () => (/* binding */ FREE),
/* harmony export */   GAME: () => (/* binding */ GAME),
/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),
/* harmony export */   OPENED: () => (/* binding */ OPENED),
/* harmony export */   START_PAGE: () => (/* binding */ START_PAGE),
/* harmony export */   WIN_PAGE: () => (/* binding */ WIN_PAGE)
/* harmony export */ });
// Cписок страниц приложения
const START_PAGE = 'start';
const GAME_PAGE = 'game';
const WIN_PAGE = 'win';
const DEFEAT_PAGE = 'defeat';

// Статус карты
const FREE = 'free';
const CLOSED = 'close';
const OPENED = 'open';

//Этап игры
const BEGIN = 'begin';
const CARDS = 'cards';
const GAME = 'game';


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ "./script.js");
/* harmony import */ var _rendering_game_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/game-page.js */ "./rendering/game-page.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./src/const.js");




function playGame(status) {
    switch (status) {
        case _const_js__WEBPACK_IMPORTED_MODULE_2__.BEGIN:
            (0,_rendering_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards);
            activateStartButton();
            break;
        case _const_js__WEBPACK_IMPORTED_MODULE_2__.CARDS:
            fillStatus(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards, _const_js__WEBPACK_IMPORTED_MODULE_2__.CARDS);
            (0,_rendering_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards);
            timer(5); // Показываем играющие карты на 5 секунд

            break;
        case _const_js__WEBPACK_IMPORTED_MODULE_2__.GAME:
            fillStatus(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards, _const_js__WEBPACK_IMPORTED_MODULE_2__.GAME);
            (0,_rendering_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards);
            activateCards(_script_js__WEBPACK_IMPORTED_MODULE_0__.cards); // Активируем "Клик" на играющих картах
            // game(cards);
            break;
        default:
            alert('Ошибка в playGame');
            break;
    }
}

function fillStatus(cards, status) {
    if (status === _const_js__WEBPACK_IMPORTED_MODULE_2__.CARDS) {
        cards.forEach((element, index) =>
            element.id === 99
                ? (element.status = _const_js__WEBPACK_IMPORTED_MODULE_2__.CLOSED)
                : (element.status = _const_js__WEBPACK_IMPORTED_MODULE_2__.OPENED)
        );
    } else {
        cards.forEach((element, index) => (element.status = _const_js__WEBPACK_IMPORTED_MODULE_2__.CLOSED));
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
        playGame(_const_js__WEBPACK_IMPORTED_MODULE_2__.GAME);
    }, deadline * 1000);
};

const intervalPlay = setInterval(() => {
    time += 1;
}, 1000);
let secs, now, gameTimer,
    mins = 0

function time(){

    setTimeout(() => {
        const timerid = document.getElementById("timerid");
        secs = Math.floor((Date.now() - now)/1000)
        if(secs == 60 ){
          now = Date.now()
          mins++
        }
        if(secs < 10){
          secs = '0' + secs
        }
        timerid.innerHTML = mins + ':' + secs
     }, 5000)

}

function activateStartButton() {
    const startButton = document.querySelector('.start-button');
    startButton.classList.add('pointer');
    startButton.onclick = function () {
        deactivateStartButton();
        playGame(_const_js__WEBPACK_IMPORTED_MODULE_2__.CARDS);
        now = Date.now() + 5000
        mins = 0
        gameTimer = setInterval(time)
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
                cards[card.id].status = _const_js__WEBPACK_IMPORTED_MODULE_2__.OPENED; // Возможно, что уже не нужно

                const currentCard = document.getElementById(card.id);
                currentCard.classList.remove('pointer');
                for (const child of currentCard.children) {
                    child.setAttribute(
                        'src',
                        `./assets/cards/${cards[card.id].id}.png`
                    );
                }
                //TODO Разобраться почему alert мешает перерисовке  карты

                if (_script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard) {
                    // Открыли вторую карту
                    if (_script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard === cards[card.id].id) {
                        clearInterval(intervalPlay)
                        alert('Вы победили');
                        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const_js__WEBPACK_IMPORTED_MODULE_2__.WIN_PAGE)
                    } else {
                        alert('Вы проиграли');
                        clearInterval(intervalPlay)
                        ;(0,_script_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const_js__WEBPACK_IMPORTED_MODULE_2__.DEFEAT_PAGE)
                    }
                    _script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard = null;
                } else {
                    _script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard = cards[card.id].id;
                }

                card.onclick = '';
            }
        };
    }
}


/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseLevel: () => (/* binding */ chooseLevel)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ "./script.js");
/* harmony import */ var _rendering_level_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/level-page.js */ "./rendering/level-page.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./src/const.js");




function chooseLevel() {
    (0,_rendering_level_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLevelPage)(); //Заполнение HTML

    document.querySelector('.radio-group').addEventListener('click', () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        for (let radioButton of radioButtons) {
            if (radioButton.checked) {
                _script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level = radioButton.value;
                const startButtonClasslist =
                    document.querySelector('.start-button').classList;
                if (!startButtonClasslist.contains('pointer'))
                    startButtonClasslist.add('pointer');
                return;
            }
        }
    });

    document.querySelector('.start-button').addEventListener('click', () => {
        if (_script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level !== 0) {
            _script_js__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeStart = new Date();
            (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const_js__WEBPACK_IMPORTED_MODULE_2__.GAME_PAGE);
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map