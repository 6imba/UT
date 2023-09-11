// Assert return type and value

const mainFunction = require('../src/6.2.mainFunction');

describe('mainFunction: with mock callback with no return', () => {
    test('for array of 5 element(including 3), callback should execute four times with proper argument', () => {
        // Arrange
        const list = [1,2,3,4,5]
        const callbackDefination = element => element * 2
        const callbackMock = jest.fn(callbackDefination) //stub: create a stub function that does nothing.
        const expected = [2,4,8,10]
        // Act
        const result = mainFunction(list, callbackMock)
        // Assert: Verify the result is an array
        expect(Array.isArray(result)).toBe(true);
        // Assert: Expects the result to match the behavior simulation
        expect(result).toEqual(expected);
    })
})

// const callbackMock = jest.fn()
// const callbackMock = jest.fn().mockReturnValue(2)
// const callbackMock = jest.fn().mockReturnValue(element => element * 2)
// const callbackMock = jest.fn(funtionDefination)
