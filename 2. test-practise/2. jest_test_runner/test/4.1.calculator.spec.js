const calc = require('../src/4.1.calculator')

describe.only('calc', () => {
  it('1 and 2 should return 8', () => {
    const param1 = 1
    const param2 = 2
    const expected = 8
    const result = calc(param1,param2);
    expect(result).toEqual(expected);
  });
});
