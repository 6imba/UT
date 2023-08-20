var assert = require("assert"); // assert is a node built-in module (more specifically node built-in assertion library)

// # 0:
describe("Test Suite: ", function () {
  describe("Test feature: ", function () {
    it("case_1: ", function () {
      return true;
    });
    it("case_2: ", function () {
      return false;
    });
    it("case_3: ", function () {
    //   return x;
    });
    it("case_4: ", function () {
      return new Error("Assertion failed!");
    });
  });
});

// # 1:
describe("Array:", function () {
  describe("#indexOf()", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(28), 3);
    });
  });
});

// // # 2:
describe("Array", function () {
  describe("#indexOf()", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(28), 3);
    });
    it("index of 7 in [7,14,21,28,35] is 0", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(7), 0);
    });
    it("index of 12 in [7,14,21,28,35] is 1", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(14), 1);
    });
  });
});

// // # 3:
describe("Array: ", function () {
  describe("#indexOf(): ", function () {
    it("index of 28 in [7,14,21,28,35] is 3", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(28), 3);
    });
    it("index of 7 in [7,14,21,28,35] is 0", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(7), 0);
    });
    it("index of 12 in [7,14,21,28,35] is 1", function () {
      assert.equal([7, 14, 21, 28, 35].indexOf(14), 1);
    });
  });
  describe("#length: ", function () {
    it("[7,14,21,28,35] length is 5", function () {
      assert.equal([7, 14, 21, 28, 35].length, 5);
    });
    it("[2,4,6,8] length is 4", function () {
      assert.equal([2, 4, 6, 8].length, 4);
    });
  });
});
