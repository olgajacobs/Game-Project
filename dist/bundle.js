/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameStatus: () => (/* binding */ gameStatus)
/* harmony export */ });
const gameStatus = {
  level: 0,
  timeStart: 0,
  cardCombination: new Array
}


document.querySelector(".radio_group").addEventListener("click", () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      gameStatus.level = radioButton.value;
      const startButtonClasslist=document.querySelector(".start_button").classList;
      if (!startButtonClasslist.contains('pointer')) startButtonClasslist.add('pointer');
    }
  }
})

document.querySelector(".start_button").addEventListener("click", () => {
  if (gameStatus.level !== 0) {
    gameStatus.timeStart = new Date();
    alert(`Поздравляем! Вы выбрали уровень сложности игры = ${gameStatus.level}`);
  }
})




/******/ })()
;
//# sourceMappingURL=bundle.js.map