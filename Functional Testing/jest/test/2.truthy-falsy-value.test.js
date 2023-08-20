const functions = require('../src/2.truthy-falsy-value')

describe('src/functions:', () => {
  test('console should return undefined ', () => {
    expect(functions.console()).toBeUndefined();
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
