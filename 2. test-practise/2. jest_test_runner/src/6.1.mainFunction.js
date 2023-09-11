const mainFunction = (list, callback) => {
    list.forEach(element => {
        if (element != 3) {
            callback(element)
        }
    })
}

module.exports = mainFunction

// const list = [1,2,3,4,5]
// const callback = (element) => console.log(`Namaste ${element}`)
// mainFunction(list,callback)
