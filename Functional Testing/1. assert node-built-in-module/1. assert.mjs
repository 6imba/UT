// # General meaning:
//     - assert/assertion: claim

// // // const assert = require('assert')
// import assert from 'assert'
// console.log(assert)
// console.log(typeof assert)

// import assert from 'assert'
// console.log(assert(1==1))
// console.log(assert(1===1))

// Description:
// - The assert() method tests if a given expression is true or not.
// - If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.
// - The assert() method is an alias of the assert.ok() method.
// - return undefined|None

// Syntax:
// - The syntax for including the assert module in your application:
// > assert(expression, message);

// ------------------------------------------------------------------------------------------------------------------

// import assert from 'assert'
// assert(1==0)
// assert(1==0, "Hey u listen 1 !=0 ...........")

import assert from 'assert'
// console.log(assert(1==1))
// // assert(50 > 70, "My message goes here");
// // assert(50 - 50);
// // assert(0);
// // assert(false);
// // assert(typeof "SAmir Shrestha" === "string");
// // assert(typeof 1 === "string");
// // assert( 0 == false );
// assert( 0 === false );

// ------------------------------------------------------------------------------------------------------------------

// - assert is a built-n method of node, which default export assert method.
// - assert methods takes two parameter.
// - first one is check_condition.
// - second is message to console incase check_condition is false.
// - assert method return undefined|None.
// - if assertion success then program contineu else if assertion fails program terminate.

// The assert module provides a set of assertion functions for verifying invariants.
// # Some of assertion methods:
//     assert()	Checks if a value is true. Same as assert.ok()
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