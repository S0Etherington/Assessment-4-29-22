const {shuffleArray} = require('./utils')

let testData = [5,6,2,8,6,3]

describe('shuffleArray should', () => {
    test('shuffleArray returns an array the same length as the original', () => {
        let newLength = shuffleArray(testData)
        expect(newLength.length).toEqual(testData.length)
    })

    test('shuffleArray should return an array', () => {
        let results = shuffleArray(testData)
        expect(Array.isArray(results)).toBe(true)
    })
})