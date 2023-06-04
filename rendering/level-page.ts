export function renderLevelPage() {
    const appEl = document.getElementById('wrapper')
    if (appEl) {
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
        `
        appEl.innerHTML = appHtml
    }
}
