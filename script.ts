export type Card = {
    id: number
    status: string
}
export type Cards = Array<Card>

export type GameStatus = {
    level: number
    firstCard?: Card
    cardsNeedToOpen: number
    timeStart: number
    timeString: string
}

export const gameStatus: GameStatus = {
    level: 1,
    firstCard: undefined,
    cardsNeedToOpen: 0,
    timeStart: 0,
    timeString: '00:00',
}

const cardQuantityForLevel = [6, 12, 18]
export let cards: Cards = []

import { chooseLevel } from './src/level'
import { playGame } from './src/game'
import { winPage } from './src/win'
import { defeatPage } from './src/defeat'
import {
    START_PAGE,
    GAME_PAGE,
    WIN_PAGE,
    DEFEAT_PAGE,
    CLOSED,
    BEGIN,
} from './src/const'
import './style.css'

export const goToPage = (newPage: string) => {
    switch (newPage) {
        case START_PAGE:
            chooseLevel()
            break
        case GAME_PAGE:
            gameStatus.cardsNeedToOpen =
                cardQuantityForLevel[gameStatus.level - 1]
            cards = generateCards(cardQuantityForLevel[gameStatus.level - 1])
            playGame(BEGIN)
            break
        case WIN_PAGE:
            gameStatus.cardsNeedToOpen =
                cardQuantityForLevel[gameStatus.level - 1]
            cards = generateCards(cardQuantityForLevel[gameStatus.level - 1])
            winPage()
            break
        case DEFEAT_PAGE:
            defeatPage()
            break
        default:
            break
    }
    return
}
export const generateCards = (cardQuantity: number) => {
    const CardList = []
    let auxArray = []
    for (let i = 0; i < 36; i++) auxArray[i] = i // Создаем полный набор карт
    shuffle(auxArray) // Перемешиваем его карты

    auxArray = auxArray.slice(0, cardQuantity) //Вырезаем нужное количество карт
    auxArray = [...auxArray, ...auxArray] //Добавляем пары

    shuffle(auxArray) // Перемешиваем отбранные пары

    for (let i = 0; i < 36; i++) {
        CardList[i] = {
            id: i < cardQuantity * 2 ? auxArray[i] : 99,
            status: CLOSED,
        } // 99 - у нас будет нарисована "неактивная рубашка"
    }
    return CardList
}

const shuffle = (array: Array<number>) => {
    // Тасование Фишера — Йетса
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

goToPage(START_PAGE)
// goToPage(WIN_PAGE)
