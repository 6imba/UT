const chai = require("chai"); // chai is a third-party-assertion-library.
const { expect } = chai; //

// # 1:
describe("Array", function () {
  describe("#indexOf()", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      expect([7, 14, 21, 28, 35].indexOf(28)).to.be.eql(3);
    });
  });
});

// // # 2:
describe("Array", function () {
  describe("#indexOf()", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      expect([7, 14, 21, 28, 35].indexOf(28)).to.be.eql(3);
    });
    it("index of 7 in [7,14,21,28,35] is 0", function () {
      expect([7, 14, 21, 28, 35].indexOf(7)).to.be.eql(0);
    });
    it("index of 12 in [7,14,21,28,35] is 1", function () {
      expect([7, 14, 21, 28, 35].indexOf(14)).to.be.eql(1);
    });
  });
});

// // # 3:
describe("Array", function () {
  describe("#indexOf()", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      expect([7, 14, 21, 28, 35].indexOf(28)).to.be.eql(3);
    });
    it("index of 7 in [7,14,21,28,35] is 0", function () {
      expect([7, 14, 21, 28, 35].indexOf(7)).to.be.eql(0);
    });
    it("index of 12 in [7,14,21,28,35] is 1", function () {
      expect([7, 14, 21, 28, 35].indexOf(14)).to.be.eql(1);
    });
  });
  describe("#length", function () {
    it("[7,14,21,28,35] length is 5", function () {
      expect([7, 14, 21, 28, 35].length).to.be.eql(5);
    });
    it("[2,4,6,8] length is 4", function () {
      expect([2, 4, 6, 8].length).to.be.eql(4);
    });
  });
});

// # 4:
describe("Test suite:", function () {
  describe("Test suite_1:", function () {
    it("Test case_1:", function () {
      expect(true).to.be.eql(true);
      expect(true).to.be.equal(true);
      expect(true).to.equal(true);
      expect(2).to.equal(2);
      expect(2).to.not.equal(1);
      expect("i love apple").contain("love");
      expect([7, 14, 21, 28, 35].indexOf(28)).to.be.eql(3);
      expect([2, 4, 6, 8].length).to.be.eql(4);
      expect([1, 2, 3, 4, 5, 6]).to.be.an("array");
      expect({ a: 1, b: 2, c: 3 }).to.have.property("b");
      expect({ a: 1, b: 2, c: 3 }).to.not.have.property("e");
      expect({ a: 1 }).to.deep.equal({ a: 1 });
      expect({ a: 1 }).to.not.equal({ a: 1 });
    });
    it("Test case_2 array:", function () {
      expect([7, 14, 21, 28, 35].indexOf(28)).to.be.eql(3);
      expect([2, 4, 6, 8].length).to.be.eql(4);
      expect([1, 2, 3, 4, 5, 6]).to.be.an("array");
    });
    it("Test case_3 object:", function () {
      expect({ a: 1, b: 2, c: 3 }).to.have.property("b");
      expect({ a: 1, b: 2, c: 3 }).to.not.have.property("e");
      expect({ a: 1 }).to.deep.equal({ a: 1 });
      expect({ a: 1 }).to.not.equal({ a: 1 });
    });
    it("Test case_2 function:", function () {
      // spy
      expect(spyEmit).to.be.callCount(0);
      expect(myFunction).to.have.callCount(1);
      expect(myFunction).to.returned(false);
      expect(spyChangeRoute.calledOnce).to.be.equal(true);
      expect(commit.callCount).to.be.eql(4);
      expect(commit).to.be.calledWith("setUserInfo");
      expect(assign).to.be.calledOnceWithExactly(winLocation);
    });
  });
});
