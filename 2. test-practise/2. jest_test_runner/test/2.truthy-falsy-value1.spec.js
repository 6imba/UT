const functions = require('../src/2.truthy-falsy-value')

describe.only('src/functions:', () => {
  test('consoleLog should return undefined ', () => {
    expect(functions.consoleLog()).toBeUndefined();
  });
  test('returnNullFunc should return null', () => {
    expect(functions.returnNullFunc()).toBeNull();
  });
})

// toBeUndefined
// toBeDefined
// toBeNull
// toBeFalsy
// toBeTruthy
// toEqual
// toBe
// toBeLessThan
// toBeLessThanOrEqual
// toMatch
// toContain
