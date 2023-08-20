// - ok() is default export function of assert module.

import assertModule from 'assert';

assertModule(1 == 1);
// console.log(assertModule(1==1))
// assertModule(50 > 70, "My message goes here");
// assertModule(50 - 50);
// assertModule(0);
// assertModule(false);
// assertModule(typeof "SAmir Shrestha" === "string");
// assertModule(typeof 1 === "string");
// assertModule( 0 == false );
// assertModule( 0 === false );


// assertModule(1 == '1');
// assertModule(1 == true);

// assertModule.ok(1 == 1);
// assertModule.ok(1 == '1');
// assertModule.ok(1 == true);


// assertModule.equal(1, 3);
// assertModule.equal(1, 2, '1 is not equal to 3.'); // AssertionError [ERR_ASSERTION]: 1 is not equal to 3.

// assertModule.equal(1,'1');
// assertModule.strictEqual(1,'1');
// assertModule.strictEqual(1,'1', 'no equal data type');

// assertModule.equal([1,2,3],[1,2,3]);
// assertModule.equal('[1,2,3]','[1,2,3]');
// assertModule.equal([1,2,3],[1,2,3], 'not equal.');

// assertModule.equal( [1,2,3], [1,2,3] ,'two array are diffrent');
// assertModule.deepStrictEqual( [1,2,3], [1,2,3] ,'two array are diffrent...');
// assertModule.deepEqual( [1,2,3], [1,2,3] );



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