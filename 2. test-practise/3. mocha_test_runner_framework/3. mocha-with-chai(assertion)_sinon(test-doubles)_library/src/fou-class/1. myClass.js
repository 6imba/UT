class One{
    constructor(){
        console.log("Class one initiaitng.")
    }
    add(arg1,arg2){
        // return arg1 + arg2
        return Number(arg1) + Number(arg2)
    }
    greet(arg){
        console.log(arg)
    }
    callAnotherFunction(arg1,arg2){
        this.greet('greet called.......')//mock
        return this.add(arg1,arg2)//spy//stub
    }
    async testPromise(){
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 3000)
        })
        return result * 1
    }
}

module.exports = One
