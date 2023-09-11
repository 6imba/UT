// Assert number of time call, what argument at which call and its return value

const mainFunction = require('../src/6.3.mainFunction');

describe('mainFunction: with mock callback with return', () => {
    test('for array of 5 element(including 3), callback should execute four times with proper argument', () => {
        // Arrange
        const list = [1,2,3,4,5]
        const callbackDefination = element => element * 2
        const callbackMock = jest.fn(callbackDefination)
        // Act
        const result = mainFunction(list, callbackMock)
        // Assert: mock function calls and argument check
        expect(callbackMock.mock.calls).toHaveLength(4); // The mock function was called twice
        expect(callbackMock.mock.calls[0][0]).toBe(1);// The first argument of the first call to the function was 1
        expect(callbackMock.mock.calls[1][0]).toBe(2); // The first argument of the second call to the function was 2
        expect(callbackMock.mock.calls[2][0]).toBe(4); // The first argument of the third call to the function was 4
        expect(callbackMock.mock.calls[3][0]).toBe(5); // The first argument of the fourth call to the function was 5
        expect(callbackMock.mock.lastCall[0]).toBe(5); // The first argument of the last call to the function was 5
        // Assert: mock function return
        expect(callbackMock.mock.results[0].value).toBe(2); // return value of first call of mock function must be 2
        expect(callbackMock.mock.results[1].value).toBe(4); // return value of first call of mock function must be 4
        expect(callbackMock.mock.results[2].value).toBe(8); // return value of first call of mock function must be 8
        expect(callbackMock.mock.results[3].value).toBe(10); // return value of first call of mock function must be 10
    })
})
