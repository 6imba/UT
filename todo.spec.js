const anonomous = require('../src/4.anonomous');

describe('src/sum:', () => {
    test('adds 1 + 2 equal to 3', () => {
    expect(anonomous(1,2)).toBe(3);
  });
})
