/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./rendering/defeat-page.ts":
/*!**********************************!*\
  !*** ./rendering/defeat-page.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDefeatPage: () => (/* binding */ renderDefeatPage)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-page */ "./rendering/game-page.ts");
/* harmony import */ var _src_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/const */ "./src/const.ts");
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/game */ "./src/game.ts");




function renderDefeatPage() {
    (0,_src_game__WEBPACK_IMPORTED_MODULE_3__.fillStatus)(_script__WEBPACK_IMPORTED_MODULE_0__.cards, _src_const__WEBPACK_IMPORTED_MODULE_2__.CARDS);
    (0,_game_page__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script__WEBPACK_IMPORTED_MODULE_0__.cards);
    var appEl = document.getElementById('wrapper');
    if (appEl) {
        var appHtml = appEl.innerHTML +
            "\n            <div class=\"win-main\">\n                <div class=\"win-smile\"> <img src=\"./assets/images/lose.png\" alt=\"win\" class='win-mark'></div>\n                    <h3 class=\"win-title\">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438</h3>\n                    <h4 class=\"spended-time-title\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</h4>\n\n                    <div class=\"spended-time\">\n                        <section><span id=\"timerid\" class=\"game-timer\">".concat(_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeString, "</span></section>\n                    </div>\n                    <button class=\"restart-button pointer\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </div>\n        ");
        appEl.innerHTML = appHtml;
    }
}


/***/ }),

/***/ "./rendering/game-page.ts":
/*!********************************!*\
  !*** ./rendering/game-page.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGamePage: () => (/* binding */ renderGamePage)
/* harmony export */ });
/* harmony import */ var _src_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/const */ "./src/const.ts");

function renderGamePage(cards) {
    var appEl = document.getElementById('wrapper');
    if (appEl) {
        var appHtml = "  <header>\n        <div class=\"time\">\n        <section class=\"timeset\"><p class=\"min\">min</><p class=\"sek\">sek</p></section>\n        <section><span id=\"timerid\" class=\"game-timer\">00.00</span></section>\n        </div>\n        <div class=\"back-counter\"></div>\n        <div class=\"start-button\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</div>\n    </header>";
        appHtml += "<div class=\"memory-game\">";
        appHtml += cards
            .map(function (card, index) {
            return renderCard(card, index);
        })
            .join('');
        appHtml += "</div>";
        appEl.innerHTML = appHtml;
    }
}
function renderCard(card, index) {
    // Рендер одной карты
    return "<div class=\"memory-card\" id=".concat(index, "> \n        <img src=\"./assets/cards/").concat(card.status === _src_const__WEBPACK_IMPORTED_MODULE_0__.CLOSED ? '99' : card.id, ".png\" alt=\"card\" \n        class=").concat(card.status === _src_const__WEBPACK_IMPORTED_MODULE_0__.CLOSED ? 'card_back' : 'card_front', "></div>");
}


/***/ }),

/***/ "./rendering/level-page.ts":
/*!*********************************!*\
  !*** ./rendering/level-page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLevelPage: () => (/* binding */ renderLevelPage)
/* harmony export */ });
function renderLevelPage() {
    var appEl = document.getElementById('wrapper');
    if (appEl) {
        var appHtml = "\n            <div class=\"main\">\n                <h3 class=\"main-title\">\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</h3>\n                <div class=\"radio-group\">\n                    <input id=\"radio_1\" type=\"radio\" name=\"radio\" value=\"1\">\n                    <label for=\"radio_1\">1</label>\n\n                    <input id=\"radio_2\" type=\"radio\" name=\"radio\" value=\"2\">\n                    <label for=\"radio_2\">2</label>\n                \n                    <input id=\"radio_3\" type=\"radio\" name=\"radio\" value=\"3\">\n                    <label for=\"radio_3\">3</label>\n                </div>\n                <button class=\"start-button\">\u0421\u0442\u0430\u0440\u0442</button>\n            </div>\n        ";
        appEl.innerHTML = appHtml;
    }
}


/***/ }),

/***/ "./rendering/win-page.ts":
/*!*******************************!*\
  !*** ./rendering/win-page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderWinPage: () => (/* binding */ renderWinPage)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-page */ "./rendering/game-page.ts");
/* harmony import */ var _src_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/const */ "./src/const.ts");
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/game */ "./src/game.ts");




function renderWinPage() {
    (0,_src_game__WEBPACK_IMPORTED_MODULE_3__.fillStatus)(_script__WEBPACK_IMPORTED_MODULE_0__.cards, _src_const__WEBPACK_IMPORTED_MODULE_2__.CARDS);
    (0,_game_page__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script__WEBPACK_IMPORTED_MODULE_0__.cards);
    var appEl = document.getElementById('wrapper');
    if (appEl) {
        var appHtml = appEl.innerHTML +
            "<div class=\"win-main\">\n                <div class=\"win-smile\"> <img src=\"./assets/images/win.png\" alt=\"win\" class='win-mark'></div>\n                    <h3 class=\"win-title\">\u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438</h3>\n                    <h4 class=\"spended-time-title\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</h4>\n\n                    <div class=\"spended-time\">\n                        <section><span id=\"timerid\" class=\"game-timer\">".concat(_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeString, "</span></section>\n                    </div>\n                    <button class=\"restart-button pointer\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </div>\n        ");
        appEl.innerHTML = appHtml;
    }
}


/***/ }),

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   gameStatus: () => (/* binding */ gameStatus),
/* harmony export */   generateCards: () => (/* binding */ generateCards),
/* harmony export */   goToPage: () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _src_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/level */ "./src/level.ts");
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/game */ "./src/game.ts");
/* harmony import */ var _src_win__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/win */ "./src/win.ts");
/* harmony import */ var _src_defeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/defeat */ "./src/defeat.ts");
/* harmony import */ var _src_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/const */ "./src/const.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./style.css");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var gameStatus = {
    level: 1,
    firstCard: undefined,
    cardsNeedToOpen: 0,
    timeStart: 0,
    timeString: '00:00',
};
var cardQuantityForLevel = [6, 12, 18];
var cards = [];






var goToPage = function (newPage) {
    switch (newPage) {
        case _src_const__WEBPACK_IMPORTED_MODULE_4__.START_PAGE:
            (0,_src_level__WEBPACK_IMPORTED_MODULE_0__.chooseLevel)();
            break;
        case _src_const__WEBPACK_IMPORTED_MODULE_4__.GAME_PAGE:
            gameStatus.cardsNeedToOpen =
                cardQuantityForLevel[gameStatus.level - 1];
            cards = generateCards(cardQuantityForLevel[gameStatus.level - 1]);
            (0,_src_game__WEBPACK_IMPORTED_MODULE_1__.playGame)(_src_const__WEBPACK_IMPORTED_MODULE_4__.CARDS);
            break;
        case _src_const__WEBPACK_IMPORTED_MODULE_4__.WIN_PAGE:
            gameStatus.cardsNeedToOpen =
                cardQuantityForLevel[gameStatus.level - 1];
            cards = generateCards(cardQuantityForLevel[gameStatus.level - 1]);
            (0,_src_win__WEBPACK_IMPORTED_MODULE_2__.winPage)();
            break;
        case _src_const__WEBPACK_IMPORTED_MODULE_4__.DEFEAT_PAGE:
            (0,_src_defeat__WEBPACK_IMPORTED_MODULE_3__.defeatPage)();
            break;
        default:
            break;
    }
    return;
};
var generateCards = function (cardQuantity) {
    var CardList = [];
    var auxArray = [];
    for (var i = 0; i < 36; i++)
        auxArray[i] = i; // Создаем полный набор карт
    shuffle(auxArray); // Перемешиваем его карты
    auxArray = auxArray.slice(0, cardQuantity); //Вырезаем нужное количество карт
    auxArray = __spreadArray(__spreadArray([], auxArray, true), auxArray, true); //Добавляем пары
    shuffle(auxArray); // Перемешиваем отбранные пары
    for (var i = 0; i < cardQuantity * 2; i++) {
        CardList[i] = {
            id: i < cardQuantity * 2 ? auxArray[i] : 99,
            status: _src_const__WEBPACK_IMPORTED_MODULE_4__.CLOSED,
        }; // 99 - у нас будет нарисована "неактивная рубашка"
    }
    return CardList;
};
var shuffle = function (array) {
    var _a;
    // Тасование Фишера — Йетса
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
};
goToPage(_src_const__WEBPACK_IMPORTED_MODULE_4__.START_PAGE);
// goToPage(WIN_PAGE)


/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
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
var START_PAGE = 'start';
var GAME_PAGE = 'game';
var WIN_PAGE = 'win';
var DEFEAT_PAGE = 'defeat';
// Статус карты
var FREE = 'free';
var CLOSED = 'close';
var OPENED = 'open';
//Этап игры
var BEGIN = 'begin';
var CARDS = 'cards';
var GAME = 'game';


/***/ }),

/***/ "./src/defeat.ts":
/*!***********************!*\
  !*** ./src/defeat.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defeatPage: () => (/* binding */ defeatPage)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _rendering_defeat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/defeat-page */ "./rendering/defeat-page.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/const.ts");



function defeatPage() {
    var _a;
    (0,_rendering_defeat_page__WEBPACK_IMPORTED_MODULE_1__.renderDefeatPage)();
    (_a = document.querySelector('.restart-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level = 0;
        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeStart = 0;
        (0,_script__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const__WEBPACK_IMPORTED_MODULE_2__.START_PAGE);
    });
}


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillStatus: () => (/* binding */ fillStatus),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _rendering_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/game-page */ "./rendering/game-page.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/const.ts");



var gameTimer;
function playGame(status) {
    switch (status) {
        case _const__WEBPACK_IMPORTED_MODULE_2__.BEGIN:
            (0,_rendering_game_page__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script__WEBPACK_IMPORTED_MODULE_0__.cards);
            activateStartButton();
            break;
        case _const__WEBPACK_IMPORTED_MODULE_2__.CARDS:
            fillStatus(_script__WEBPACK_IMPORTED_MODULE_0__.cards, _const__WEBPACK_IMPORTED_MODULE_2__.CARDS);
            (0,_rendering_game_page__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script__WEBPACK_IMPORTED_MODULE_0__.cards);
            timer(5); // Показываем играющие карты на 5 секунд
            break;
        case _const__WEBPACK_IMPORTED_MODULE_2__.GAME:
            fillStatus(_script__WEBPACK_IMPORTED_MODULE_0__.cards, _const__WEBPACK_IMPORTED_MODULE_2__.GAME);
            (0,_rendering_game_page__WEBPACK_IMPORTED_MODULE_1__.renderGamePage)(_script__WEBPACK_IMPORTED_MODULE_0__.cards);
            activateCards(_script__WEBPACK_IMPORTED_MODULE_0__.cards); // Активируем "Клик" на играющих картах
            timer(0); //Запускаем таймер игры
            break;
        default:
            alert('Ошибка в playGame');
            break;
    }
}
function fillStatus(cards, status) {
    if (status === _const__WEBPACK_IMPORTED_MODULE_2__.CARDS) {
        cards.forEach(function (element) {
            return element.id === 99
                ? (element.status = _const__WEBPACK_IMPORTED_MODULE_2__.CLOSED)
                : (element.status = _const__WEBPACK_IMPORTED_MODULE_2__.OPENED);
        });
    }
    else {
        cards.forEach(function (element) { return (element.status = _const__WEBPACK_IMPORTED_MODULE_2__.CLOSED); });
    }
}
var timer = function (deadline) {
    var timerString = document.getElementById('timerid');
    if (deadline) {
        //Если задан параметр то ведем обратный отсчет
        if (timerString)
            timerString.innerHTML = "00:0".concat(deadline);
        var time_1 = deadline;
        var reverseTimer_1 = setInterval(function () {
            time_1 -= 1;
            if (timerString)
                timerString.innerHTML = "00:0".concat(time_1);
        }, 1000);
        setTimeout(function () {
            //Отключаем таймер через 5 сек и запускаем игру
            clearInterval(reverseTimer_1);
            playGame(_const__WEBPACK_IMPORTED_MODULE_2__.GAME);
        }, deadline * 1000);
    }
    else {
        //Если не задан парметр до запускаем бесконечный 1 сек счетчик
        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeStart = Date.now();
        gameTimer = setInterval(function () {
            var _tsec = (Date.now() - _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeStart) / 1000;
            var min = Math.floor(_tsec / 60);
            var sec = Math.floor(_tsec % 60);
            var mins = String(min);
            var secs = String(sec);
            if (sec < 10)
                secs = '0' + String(sec);
            if (min < 10)
                mins = '0' + String(min);
            _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeString = mins + '.' + secs;
            if (timerString)
                timerString.innerHTML = mins + '.' + secs;
        }, 1000);
    }
};
function activateStartButton() {
    var startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.classList.add('pointer');
        startButton.onclick = function () {
            deactivateStartButton();
            playGame(_const__WEBPACK_IMPORTED_MODULE_2__.CARDS);
        };
    }
}
function deactivateStartButton() {
    var startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.onclick = null;
        startButton.classList.remove('pointer');
    }
}
function activateCards(cards) {
    var cardsList = document.querySelectorAll('.memory-card');
    cardsList === null || cardsList === void 0 ? void 0 : cardsList.forEach(function (card) {
        if (cards[Number(card.id)].id !== 99) {
            card.classList.add('pointer');
        }
        ;
        card.onclick = function () {
            if (cards[Number(card.id)].id !== 99) {
                cards[Number(card.id)].status = _const__WEBPACK_IMPORTED_MODULE_2__.OPENED; // Возможно, что уже не нужно
                var currentCard = document.getElementById(card.id);
                if (currentCard) {
                    currentCard.classList.remove('pointer');
                    Array.from(currentCard.children).forEach(function (child) {
                        child.setAttribute('src', "./assets/cards/".concat(cards[Number(card.id)].id, ".png"));
                    });
                }
                if (_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard) {
                    // Открыли вторую карту
                    if (_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard.id === cards[Number(card.id)].id) {
                        if (_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.cardsNeedToOpen === 1) {
                            clearInterval(gameTimer);
                            (0,_script__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const__WEBPACK_IMPORTED_MODULE_2__.WIN_PAGE);
                        }
                        else {
                            _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.cardsNeedToOpen -= 1;
                        }
                    }
                    else {
                        clearInterval(gameTimer);
                        (0,_script__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const__WEBPACK_IMPORTED_MODULE_2__.DEFEAT_PAGE);
                        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard = undefined;
                    }
                }
                else {
                    _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.firstCard = cards[Number(card.id)];
                }
                ;
                card.onclick = null;
            }
        };
    });
}


/***/ }),

/***/ "./src/level.ts":
/*!**********************!*\
  !*** ./src/level.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseLevel: () => (/* binding */ chooseLevel)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _rendering_level_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/level-page */ "./rendering/level-page.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/const.ts");



function chooseLevel() {
    var _a, _b;
    (0,_rendering_level_page__WEBPACK_IMPORTED_MODULE_1__.renderLevelPage)(); //Заполнение HTML
    (_a = document.querySelector('.radio-group')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons === null || radioButtons === void 0 ? void 0 : radioButtons.forEach(function (radioButton) {
            var _a;
            if (radioButton.checked) {
                _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level = Number(radioButton.value);
                var startButtonClasslist = (_a = document.querySelector('.start-button')) === null || _a === void 0 ? void 0 : _a.classList;
                if (!(startButtonClasslist === null || startButtonClasslist === void 0 ? void 0 : startButtonClasslist.contains('pointer')))
                    startButtonClasslist === null || startButtonClasslist === void 0 ? void 0 : startButtonClasslist.add('pointer');
                return;
            }
        });
    });
    (_b = document.querySelector('.start-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        if (_script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level !== 0) {
            (0,_script__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const__WEBPACK_IMPORTED_MODULE_2__.GAME_PAGE);
        }
    });
}


/***/ }),

/***/ "./src/win.ts":
/*!********************!*\
  !*** ./src/win.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   winPage: () => (/* binding */ winPage)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./script.ts");
/* harmony import */ var _rendering_win_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/win-page */ "./rendering/win-page.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/const.ts");



function winPage() {
    var _a;
    (0,_rendering_win_page__WEBPACK_IMPORTED_MODULE_1__.renderWinPage)();
    (_a = document.querySelector('.restart-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.level = 0;
        _script__WEBPACK_IMPORTED_MODULE_0__.gameStatus.timeStart = 0;
        (0,_script__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_const__WEBPACK_IMPORTED_MODULE_2__.START_PAGE);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map