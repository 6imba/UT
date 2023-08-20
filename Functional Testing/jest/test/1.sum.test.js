const sum = require('../src/1.sum');

describe('src/sum:', () => {
  test('adds 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds -1 + 2 equal to 1', () => {
    expect(sum(-1, 2)).toBe(1);
  });
  test('adds two integers', () => {
    expect(sum(3, 2)).toBe(5);
    expect(sum(-1, 2)).toBe(1);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0.9, 0.2)).toBe(1.1); 
  });
  test('adds 1 + 1 not equal 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
  test('adds 1 + 1 not equal 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
})
