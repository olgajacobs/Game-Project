export const gameStatus = {
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

