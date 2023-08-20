const One = require("../../src/fou-class/1. myClass");
const chai = require('chai')
const sinon = require('sinon')

const obj1 = new One()
const expect = chai.expect

describe("Promise test suite 1:", function(){
    it("Case_1:", function(){
        expect(obj1.testPromise()).to.be.equal(1);
    })
    it("Case_2:", function(){
        obj1.testPromise().then(result=>{
            expect(result).to.be.equal(1);
        });
    })
    it("Case_3:", function(){
        obj1.testPromise().then(result=>{
            expect(false).to.be.equal(true);
        });
    })
    it("Case_4:", function(done){
        obj1.testPromise().then(result=>{
            expect(false).to.be.equal(true);
            done();
        });
    })
    it("Case_5:", function(done){
        this.timeout(5000);
        obj1.testPromise().then(result=>{
            expect(false).to.be.equal(true);
            done();
        });
    })
    it("Case_6:", function(done){
        this.timeout(0);
        obj1.testPromise().then(result=>{
            expect(false).to.be.equal(true);
            done();
        });
    })
});



///chai-as-promise
