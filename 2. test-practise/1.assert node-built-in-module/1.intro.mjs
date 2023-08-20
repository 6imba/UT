// # assert: node built-in assertion modules\
// # vue/test-utils: vue component testing library
// # mocha, jest, ava: testing js frameworks

// # General meaning:
//     - assert/assertion: claim

// import assertModule from 'assert'
// console.log(assertModule) //<ref *1> [Function: ok] { fail: [Function: fail], AssertionError: [class AssertionError extends Error], ok: [Circular * 1], equal: [Function: equal], notEqual: [Function: notEqual], deepEqual: [Function: deepEqual], notDeepEqual: [Function: notDeepEqual], ...}
// console.log(typeof assertModule) //function



// import assertModule from 'assert'
// console.log(assertModule(1==1))
// console.log(assertModule(1===1))
// assertModule(1==0, "Hey u listen 1 !=0 ...........")

// Description:
// - The assertModule() method tests if a given expression is true or not.
// - If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.
// - The assert() method is an alias of the assert.ok() method.
// - return undefined|None

// Syntax:
// - The syntax for including the assert module in your application:
// > assert(expression, message); its .ok() mwthod which

// - assert is a built-in node assertion module.
// - The assert module in Node.js is used for writing assertions and performing runtime assertions. It is a built-in module, so you don't need to install any additional packages.
// - The assert module provides a set of assertion functions for verifying invariants.
// - ok() is default export function of assert module.
// - ok methods takes two parameter.
// - first one is check_condition.
// - second is message to console incase check_condition is false.
// - ok method return undefined|None.
// - if assertion success then program contineu else if assertion fails program terminate.

// --------------------------------------------------------------------------------------------------------------

// # Some of assertion methods:
//     ok()	Checks if a value is true.default export.
//     deepEqual()	Checks if two values are equal
//     deepStrictEqual()	Checks if two values are equal, using the strict equal operator (===)
//     doesNotThrow()	 
//     equal()	Checks if two values are equal, using the equal operator (==)
//     fail()	Throws an Assertion Error
//     ifError()	Throws a specified error if the specified error evaluates to true
//     notDeepEqual()	Checks if two values are not equal
//     notDeepStrictEqual()	Checks if two values are not equal, using the strict not equal operator (!==)
//     notEqual()	Checks if two values are not equal, using the not equal operator (!=)
//     notStrictEqual()	Checks if two values are not equal, using the strict not equal operator (!==)
//     ok()	Checks if a value is true
//     strictEqual()	Checks if two values are equal, using the strict equal operator (===)
//     throws()