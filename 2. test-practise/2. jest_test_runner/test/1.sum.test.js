const sum = require('../src/1.sum');

describe('src/sum:', () => {

  test('adds 1 + 2 equal to 3', () => {
    //Arrange
    const [param1, param2, expected] = [1,2,3]
    //Act
    const received = sum(param1, param2)
    //Assert
    expect(expected).toBe(received);
  });

  test('adds -1 + 2 equal to 1', () => {
    //No Arrange direct Act indise Assert
    expect(sum(-1, 2)).toBe(1);
  });
  test('adds two integers', () => {
    //No Arrange direct Act indise Assert
    expect(sum(3, 2)).toBe(5);
    expect(sum(-1, 2)).toBe(1);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0.9, 0.2)).toBe(1.1); 
  });
  test('adds 1 + 1 not equal 3', () => {
    //No Arrange direct Act indise Assert
    expect(sum(1, 1)).not.toBe(3);
  });
  test('adds 1 + 1 not equal 3', () => {
    //No Arrange direct Act indise Assert
    expect(sum(1, 1)).not.toBe(3);
  });
})
