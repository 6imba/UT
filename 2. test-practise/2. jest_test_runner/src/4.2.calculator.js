const sendBonus = (x, y) => x + y;
const calc = (param1, param2) => {
    const x = param1 * 2
    const y= param2 * 3
    return sendBonus(x,y)
}

module.exports = calc;
