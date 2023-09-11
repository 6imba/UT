// Assert times of mock function calls and called arguments

const mainFunction = require('../src/6.1.mainFunction');

describe('mainFunction: with mock callback with no return', () => {
    test('for array of 5 element(including 3), callback should execute four times with proper argument', () => {
        // Arrange
        const list = [1,2,3,4,5]
        const callbackMock = jest.fn() //spy: create a stub function that does nothing.
        // Act
        mainFunction(list, callbackMock)
        // Assert
        expect(callbackMock).toBeCalled()
        expect(callbackMock).toHaveBeenCalledTimes(4)
        expect(callbackMock).toHaveBeenCalledWith(1); // Expects specific calls with certain arguments.
        expect(callbackMock).toHaveBeenCalledWith(2); // Expects specific calls with certain arguments.
        expect(callbackMock).toHaveBeenCalledWith(4); // Expects specific calls with certain arguments.
        expect(callbackMock).toHaveBeenCalledWith(5); // Expects specific calls with certain arguments.
    })

    test('for array of 1 element(including just 3), callback should execute 0 times', () => {
        // Arrange
        const list = [3]
        const callbackMock = jest.fn() //spy: create a stub function that does nothing.
        // Act
        mainFunction(list, callbackMock)
        // Assert
        expect(callbackMock).not.toBeCalled()
        expect(callbackMock).toHaveBeenCalledTimes(0)
    })

    test('for empty array, callback should execute 0 times', () => {
        // Arrange
        const list = []
        const callbackMock = jest.fn() //spy: create a stub function that does nothing.
        // Act
        mainFunction(list, callbackMock)
        // Assert
        expect(callbackMock).not.toBeCalled()
        expect(callbackMock).toHaveBeenCalledTimes(0)
    })
})
