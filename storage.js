export function saveStatusrToLocalStorage(gameStatus) {
  window.localStorage.setItem("gamestatus", JSON.stringify(gameStatus));
}

export function getStatusFromLocalStorage() {
  try {
    return JSON.parse(window.localStorage.getItem("gamestatus"));
  } catch (error) {
    return null;
  }
}

export function removeStatusFromLocalStorage() {
  window.localStorage.removeItem("gamestatus");
}