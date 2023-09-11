const anonomous = require('../src/3.anonomous');

describe.only('src/sum:', () => {
  //Arrange
  const param1 = 1
  const param2 = 2
  const expected = 3
  //Act
  const output = anonomous(param1, param2)
  //Assert
  test(`adds ${param1} + ${param2} equal to ${expected}`, () => {
    expect(output).toBe(expected);
  });
})
