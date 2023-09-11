const mainFunction = (list, callback) => {
    let result = [];
    list.forEach(element => {
        if (element != 3) {
            const res = callback(element)
            result.push(res)
        }
    })
    return result;
}

module.exports = mainFunction

// const list = [1, 2, 3, 4, 5]
// const callback = (element) => element * 2
// const result = mainFunction(list,callback)
// console.log(result)
