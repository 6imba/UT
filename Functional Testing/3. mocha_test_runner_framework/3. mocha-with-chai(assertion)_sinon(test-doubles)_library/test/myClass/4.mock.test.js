const chai = require('chai')
const sinon = require('sinon')
const One = require('../../src/myClass')

const obj1 = new One()
const expect = chai.expect
const sandbox = sinon.createSandbox();

// describe.only("Mock test suite 1:", function(){
//     it("case_1 spy", function(){
//         //arrange:
//         let spygreet = sinon.spy(obj1, 'greet')
//         //act:
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         expect(spygreet.calledOnce).to.be.true;
//     })
//     it("case_1 mock", function(){
//         //arrange:
//         let mock = sinon.mock(obj1)
//         let expectation = mock.expects('greet')
//         expectation.exactly(1) //assert
//         //act:
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         mock.verify();
        
//     })
// });

// // TypeError: Attempted to wrap greet which is already wrapped
// describe.only("Mock test suite 1:", function(){
//     //solution: restore sinon after each test case.
//     afterEach(() => {
//         sinon.restore();
//     })
//     it("case_1 spy", function(){
//         //arrange:
//         let spygreet = sinon.spy(obj1, 'greet')
//         //act:
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         expect(spygreet.calledOnce).to.be.true;
//     })
//     it("case_1 mock", function(){
//         //arrange:
//         let mock = sinon.mock(obj1)
//         let expectation = mock.expects('greet')
//         expectation.exactly(1) //assert
//         //act:
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         mock.verify();
//     })
// });



// describe.only("Mock test suite 1:", function(){
//     afterEach(() => {
//         sinon.restore()
//     })
//     it("case_1 spy", function(){
//         //arrange:
//         let spygreet = sinon.spy(obj1, 'greet')
//         //act:
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         expect(spygreet.calledTwice).to.be.true;
//     })
//     it("case_1 mock", function(){
//         //arrange:
//         let mock = sinon.mock(obj1)
//         let expectation = mock.expects('greet')
//         expectation.exactly(2) //assert
//         //act:
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         //assert:
//         mock.verify();
        
//     })
// });



// describe("Mock test suite 1:", function(){
//     let spygreet = sinon.spy(obj1, 'greet')
//     let mock = sinon.mock(obj1) //TypeError: Attempted to wrap greet which is already wrapped
// });



// // mock acts as restore after every test case but not in spy.
// describe("Mock test suite 1:", function () {
//     const obj = new One()
//     let spygreet = sinon.spy(obj, 'greet')
//     it("case_1 spy", function(){
//         obj.callAnotherFunction(1,2)
//         obj.callAnotherFunction(1,2)
//         expect(spygreet.calledTwice).to.be.true;
//     })
//     it("case_2 spy", function () {
//         obj.callAnotherFunction(1,2)
//         expect(spygreet.calledThrice).to.be.true;
//     })
//     sandbox.restore();
//     let mock = sinon.mock(obj)
//     let expectation = mock.expects('greet')
//     it("case_1 mock", function(){
//         expectation.exactly(2)
//         obj.callAnotherFunction(1,2)
//         obj.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2 mock", function(){
//         expectation.exactly(4)
//         obj.callAnotherFunction(1,2)
//         obj.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });



// describe.only("Mock test suite 1:", function(){
//     let spygreet = sinon.spy(obj1,'greet')
//     it("case_1", function(){
//         obj1.callAnotherFunction(1,2)
//         expect(spygreet.calledOnce).to.be.true;
//         sinon.restore();
//     })
//     it("case_2", function(){
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         expect(spygreet.calledTwice).to.be.true;
//     })
// });

// // # Solution:
// describe.only("Mock test suite 1:", function () {
//     let [spygreet] = [];
//     beforeEach(() = {
//         spygreet = sinon.spy(obj1, 'greet');
//     });
//     afterEach(() = {
//         sinon.restore();
//     });
//     it("case_1", function(){
//         obj1.callAnotherFunction(1,2)
//         expect(spygreet.calledOnce).to.be.true;
//     })
//     it("case_2", function(){
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         expect(spygreet.calledTwice).to.be.true;
//     })
// });


// describe.only("Mock test suite 1:", function(){
//     let mock = sinon.mock(obj1)
//     let expectation = mock.expects('greet')
//     it("case_1", function(){
//         expectation.exactly(1)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2", function(){
//         expectation.exactly(2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });

// describe.only("Mock test suite 1:", function(){
//     let mock = sinon.mock(obj1)
//     let expectation = mock.expects('greet')
//     it("case_1", function(){
//         expectation.exactly(1)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2", function(){
//         expectation.exactly(2)
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });

// describe.only("Mock test suite 1:", function(){
//     let [mock, expectation] = [];
//     beforeEach(() => {
//         mock = sinon.mock(obj1)
//         expectation = mock.expects('greet');
//     })
//     afterEach(() => {
//         sinon.restore()
//     })
//     it("case_1", function(){
//         expectation.exactly(1)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2", function(){
//         expectation.exactly(2)
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_3", function(){
//         expectation.exactly(3)
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });


// describe.only("Mock test suite 1:", function(){
//     let mock = sinon.mock(obj1)
//     let expectation = mock.expects('greet')
//     it("case_1", function(){
//         expectation.exactly(1)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2", function(){
//         expectation.withArgs("Hi strager.")
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_3", function(){
//         expectation.exactly(3)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });




// describe.only("Mock test suite 1:", function(){

//     let mock,expectation;
    
//     beforeEach(()=>{
//         mock = sinon.mock(obj1)
//         expectation = mock.expects('greet')
//     })

//     it("case_1", function(){
//         expectation.exactly(1)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_2", function(){
//         expectation.withArgs("Hi strager.")
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_3", function(){
//         expectation.exactly(2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
//     it("case_4", function(){
//         expectation.withArgs(100)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });


// describe.only("Mock test suite 1:", function(){

//     let mock,expectation;
    
//     beforeEach(()=>{
//         mock = sinon.mock(obj1)
//         expectation = mock.expects('greet')
//     })

//     it("check if greet function is called once with string param.", function(){
//         expectation.exactly(1) //check if greet function is invoked once.
//         expectation.withArgs("Hi strager.") //check if greet function is invoked with "Hi strager." as string parameter.
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });


// describe.only("Mock test suite 1:", function(){

//     let mock,expectation;
    
//     beforeEach(()=>{
//         mock = sinon.mock(obj1)
//         expectation = mock.expects('greet')
//     })

//     it("check if greet function is called once with string param.", function(){
//         expectation.exactly(1) //check if greet function is invoked once.
//         expectation.withArgs("Hi strager.") //check if greet function is invoked with "Hi strager." as string parameter.
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });


// describe.only("Mock test suite 1:", function(){

//     let mock,expectation;
    
//     beforeEach(()=>{
//         mock = sinon.mock(obj1)
//         expectation = mock.expects('greet')
//     })

//     it("check if greet function is called once with string param.", function(){
//         expectation.exactly(2) //check if greet function is invoked once.
//         expectation.withArgs("Hi strager.") //check if greet function is invoked with "Hi strager." as string parameter.
//         obj1.callAnotherFunction(1,2)
//         obj1.callAnotherFunction(1,2)
//         mock.verify();
//     })
// });
