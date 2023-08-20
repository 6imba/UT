const chai = require("chai");
const One = require("../../src/fou-class/1. myClass");

const expect = chai.expect;
const obj1 = new One();

describe("Test suite:", function () {
  it("Case_1:", function () {
    expect(obj1.add(3, 9)).to.be.equal(12);
  });
  it("Case_2:", function () {
    expect(obj1.add(2, 3)).to.be.equal(5);
  });
  it("Case_3:", function () {
    expect(obj1.add(2, "a")).to.be.NaN;
  });
  it("Case_4:", function () {
    expect(obj1.add("d", "a")).to.be.NaN;
  });
  it("Case_5:", function () {
    expect(typeof obj1.add("d", "a")).to.be.equal("number");
  });
  it("Case_6:", function () {
    expect(typeof obj1.add(6, 7)).to.be.equal("number");
  });
});
