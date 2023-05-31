/**
 *@jest-environment jsdom
 */
import { it, expect, describe } from '@jest/globals'
import assert from 'assert'
import { generateCards } from './script.ts'
describe('function generateCards()', () => {
    it('should return array with type OBJECT', () => {
        //Подготовка
        const cardQuantity = 6
        const typeExpected = 'object'

        // Действие
        const cardsSet = generateCards(cardQuantity)
        //Сверка

        assert.equal(typeof cardsSet, typeExpected)
    })
    it('should return array with length 36', () => {
        //Подготовка
        const cardQuantity = 6
        const lengthExpected = 36
        // Действие
        const cardsSet = generateCards(cardQuantity)
        //Сверка
        assert.equal(cardsSet.length, lengthExpected)
    })
    it('should return array with <cardQuantity> pairs', () => {
        //Подготовка
        const cardQuantity = 6

        // Действие
        const cardsSet = generateCards(cardQuantity)
        //Сверка

        expect(countPairs(cardsSet)).toEqual(cardQuantity)
    })
})
function countPairs(cardSet) {
    const _auxArray = []
    cardSet.forEach((element) => {
        if (element.id !== 99 && !_auxArray.includes(element.id))
            _auxArray.push(element.id)
    })

    return _auxArray.length
}
