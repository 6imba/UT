const myFunc1 = () => 'hello world';

const sum = (x,y) => x+y;

const errFunc = () =>  { throw new TypeError('Illegal salmon!')};

module.exports = {myFunc1, sum, errFunc}