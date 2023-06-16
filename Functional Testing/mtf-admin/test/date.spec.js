const getFutureDate = require('../src/date');

let date = new Date(2018, 11, 24, 10, 33, 30, 0);

it('should return date when called getFutureDate.', () => {
    const test = JSON.stringify(getFutureDate({}, date ));
    expect(test).toBe("\"2018-12-24T04:48:30.000Z\"")
});