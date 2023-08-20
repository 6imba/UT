const chai = require("chai");
const { myFunc1, sum, errFunc } = require("../src/function");

const { expect } = chai;

describe("Function suite:", function () {
  it("Test case 1:", function () {
    expect(myFunc1()).contain("hello");
    expect(sum(3, 6)).to.be.equal(9);
    expect(myFunc1).to.not.throw();
    expect(sum).to.not.throw();
    expect(errFunc).to.throw();
    expect(errFunc).to.throw(TypeError);
    expect(errFunc).to.throw("salmon");
    expect(1).to.satisfy(function (num) {
      return num > 0;
    });
  });
});
