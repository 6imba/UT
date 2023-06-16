const { getLanguage, getCurrentLocale, changeLocale } = require('../src/locale');

let date = new Date(2018, 11, 24, 10, 33, 30, 0);

it('getLanguage should return lang.', () => {
    const test = JSON.stringify(getFutureDate({}, date ));
    expect(test).toBe("\"2018-12-24T04:48:30.000Z\"")
});

it('getCurrentLocale should return CurrentLocale.', () => {
    const test = JSON.stringify(getFutureDate({}, date ));
    expect(test).toBe("\"2018-12-24T04:48:30.000Z\"")
});

it('changeLocale should return CurrentLocale.', () => {
    const test = JSON.stringify(getFutureDate({}, date ));
    expect(test).toBe("\"2018-12-24T04:48:30.000Z\"")
});