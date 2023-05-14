import { saveStatusrToLocalStorage, getStatusFromLocalStorage, removeStatusFromLocalStorage } from "./storage.js";

removeStatusFromLocalStorage();

let gameStatus = {
  level: 0,
  timeStart: 0,
  cardCombination: new Array
}



const choiceLevelButtons = document.querySelectorAll(".level");

for (let choiceLevelButton of choiceLevelButtons) {
  choiceLevelButton.addEventListener("click", () => {
    for (let levelButton of choiceLevelButtons) {
      levelButton.classList.remove('red');
    }
    const buttonClassList = document.querySelector(".start").classList;
    if (gameStatus.level == choiceLevelButton.dataset.gameLevel) {
      gameStatus.level = 0;
      buttonClassList.remove('pointer');
    }
    else {
      choiceLevelButton.classList.add('red');
      gameStatus.level = choiceLevelButton.dataset.gameLevel;
      if (!buttonClassList.contains('pointer')) buttonClassList.add('pointer');
    }
    console.log(gameStatus.level);
  })
}
document.querySelector(".start").addEventListener("click", () => {
  if (gameStatus.level !== 0) {
    gameStatus.timeStart = new Date();
    saveStatusrToLocalStorage(gameStatus);
    alert(`Поздравляем! Вы выбрали уровень сложности игры = ${gameStatus.level}`);
  }
})