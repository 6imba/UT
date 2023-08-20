const chai = require('chai')
const sinon = require('sinon')
const One = require("../../src/fou-class/1. myClass");

const obj1 = new One()
const expect = chai.expect

describe ("Mock test suite 1:", function(){
    it("case_1 stubs", function(){
        let stub = sinon.stub(obj1,'add')
        stub.withArgs(10,30).returns(77)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(77)
    })
});

describe ("Mock test suite 1:", function(){
    let stub = sinon.stub(obj1,'add')
    it("case_1 stubs", function(){
        stub.withArgs(10,30).returns(77)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(77)
    })
    it("case_2 stubs", function(){
        stub.withArgs(10,30).returns(10000)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(10000)
    })
    it("case_3 stubs", function(){
        stub.withArgs(10,30).returns(10000)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(10000)
    })
});



describe ("Mock test suite 1:", function(){
    let stub = sinon.stub(obj1,'add')
    it("case_1 stubs", function(){
        stub.withArgs(10,30)
            .onFirstCall().returns(55) 
            .onSecondCall().returns(88) 
            .onThirdCall().returns(0) 
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(55)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(88)
        expect(obj1.callAnotherFunction(10,30)).to.be.equal(0)
    })
});
