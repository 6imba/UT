const chai = window.chai
const expect = chai.expect

describe('suite: getCelcius', ()=>{
    it("testcase_1: should convert Farenheit to Celcius for all values in an array", ()=>{
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([ -5, 60, 100, 5 ])
        expect(getCelcius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
        expect(getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
        // expect(getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 800])
    })
})