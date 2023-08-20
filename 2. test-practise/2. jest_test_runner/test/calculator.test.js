const calculator = require('../src/calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });
test('string with a 3 number should result in the whole sumation', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });
test('string with a number and char should result in the NaN', () => {
    expect(calculator.add('1,a')).toBe(NaN);
  });
test('string with multiple numbers should result in the whole sumation', () => {
    expect(calculator.add('1,3,5,6')).toBe(15);
  });
