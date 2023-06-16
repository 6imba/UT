const myModule = require('../../src/myCode');
const sinon = require('sinon');
// const chai = require('chai');
const assert = require('assert');

// describe('f1', () => {
//     it('should return the correct string', () => {
//         const result = myModule.f1('test');
//         expect(result).to.equal('F1:test');
//     });
// });

describe('f2', () => {
    // it('should return the correct string', () => {
    //     const result = myModule.f2('test');
    //     expect(result).to.equal('F1:F2:test');
    // });

    it('should call f1 with the correct argument', () => {
        const f1Stub = sinon.stub(myModule, 'f1');
        myModule.f2('test');
        console.log(f1Stub.args, '..........................');
        console.log(myModule.f1 === f1Stub);
        console.log(myModule,'+++++++++++++++++++++++++');
        // expect(f1Stub.calledWith('F2:test')).to.be.true;
        assert.ok(f1Stub.calledWith('F2:test'));
        f1Stub.restore();
    });
});
