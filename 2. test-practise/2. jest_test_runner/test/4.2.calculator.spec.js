const calc = require('../src/4.2.calculator')

describe.only('calc', () => {
  it('1 and 2 should return 8', () => {
    const param1 = 1
    const param2 = 2
    const expected = 8
    const result = calc(param1,param2);
    expect(result).toEqual(expected);
  });
});

/*
  # This is a file_1:
  func1(){}
  func2(){
    func1()
  }
  - If there func1() is just being used inside func2() of same file and not exported anywhere else, then no need to replace func1() while writing ut of func2().
  
  func1(){}
  func2(){
    func1()
  }
  func3(){
    func1()
  }
  func4(){
    func1()
  }
  func5(){
    func1()
  }
  - So when writing UT of func2(),func3(),func4(),func5(), you dont have to replace func1() being called inside every fucntion of which ut's are getting written, because func1() is defined in same file.
  - But since func1() is getting used by all function, so why dont we seperate it from this file to utils file, the we can import it in this file. In this case we need to write ut of func1() in utils file and replace it in ut of current file.

  */
