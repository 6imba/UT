/**
 * 
 * @param { string } numbers  - A string of comma-separated numbers.
 * @returns { number } - The sum of the numbers.
 */
function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b )
        // .reduce((a, b) => a + b + 1) check test fail
}

exports.add = add
