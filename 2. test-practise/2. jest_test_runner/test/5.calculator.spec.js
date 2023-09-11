const calc = require('../src/5.calculator')

test('string with a single number should result in the number itself', () => {
    expect(calc('1')).toBe(1);
  });
test('string with a 3 number should result in the whole sumation', () => {
    expect(calc('1,2,3')).toBe(6);
  });
test('string with a number and char should result in the NaN', () => {
    expect(calc('1,a')).toBe(NaN);
  });
test('string with multiple numbers should result in the whole sumation', () => {
    expect(calc('1,3,5,6')).toBe(15);
  });



/*

- custome function  
- core pre-defined function  
- external libary function  

Q. While writing the unit test of a function, never replace a core js pre defined  function or any other uitility libarry function, if used inside the function of which ut is getting written, as if any behaviour get changes in those function of core js and utility library, unit test fail will let us know and fix accordingly. Right?
  - Yes but sometime there might be a exceptional cases.
  - So that concludes none of custome_function(except utils function), core_pre-defined_function, external_libary_function are considered as real external dependecies.

*/
