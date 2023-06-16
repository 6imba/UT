const calculator = require('./calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });
test('string with a 2 number should result in the sumation', () => {
    expect(calculator.add('1,2')).toBe(3);
  });
test('string with a number and string should result in the NaN', () => {
    expect(calculator.add('1,a')).toBe(NaN);
  });
test("string with 3 numbers '134' should result in the whole sumation", () => {
    expect(calculator.add('1,3,5')).toBe(9);
  });
test('string with multiple numbers should result in the whole sumation', () => {
    expect(calculator.add('1,3,5,6')).toBe(15);
  });