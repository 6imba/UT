import assert from 'assert';

assert(1 == 1);
// assert(1 == '1');
// assert(1 == true);

// assert.ok(1 == 1);
// assert.ok(1 == '1');
// assert.ok(1 == true);


// assert.equal(1, 3);
// assert.equal(1, 2, '1 is not equal to 3.'); // AssertionError [ERR_ASSERTION]: 1 is not equal to 3.

// assert.equal(1,'1');
// assert.strictEqual(1,'1');
// assert.strictEqual(1,'1', 'no equal data type');

// assert.equal([1,2,3],[1,2,3]);
// assert.equal('[1,2,3]','[1,2,3]');
// assert.equal([1,2,3],[1,2,3], 'not equal.');

assert.equal( [1,2,3], [1,2,3] ,'two array are diffrent');
assert.deepStrictEqual( [1,2,3], [1,2,3] ,'two array are diffrent...');
assert.deepEqual( [1,2,3], [1,2,3] );

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
