function getFutureDate({
    years = 0, months = 0, days = 0, minutes = 0,
}, date = new Date()) {
    date.setFullYear(date.getFullYear() + years);
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() + days);
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}

module.exports = getFutureDate;
