const chai = require("chai");
const sinon = require("sinon");
const One = require("../../src/myClass");

const obj1 = new One();
const expect = chai.expect;
const sandbox = sinon.createSandbox();

describe.only("Test suite 1:", function () {
  it("Case_1:", function () {
    let spy_add = sinon.spy(obj1, "add");
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledOnce).to.be.true;
  });
});

describe.only("Test suite 2:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledTwice).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledThrice).to.be.true;
  });
});

describe.only("Test suite 3:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledTwice).to.be.false;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledThrice).to.be.false;
  });
});

describe.only("Test suite 3:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledTwice).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledThrice).to.be.true;
  });
});

describe.only("Test suite 3.1:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledTwice).to.be.true;
  });
  it("Case_2:", function () {
    sinon.restore();
    let spy_add = sinon.spy(obj1, "add");
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledThrice).to.be.false;
    expect(spy_add.calledOnce).to.be.true;
  });
});

describe.only("Test suite 4:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledOnce).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledTwice).to.be.true;
  });
  it("Case_3:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledThrice).to.be.true;
  });
  it("Case_4:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledWith(1, 2)).to.be.true;
  });
});

describe.only("Test suite 5:", function () {
  let spy_add = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spy_add.calledOnce).to.be.true;
    expect(spy_add.calledTwice).to.be.false;
    expect(spy_add.calledThrice).to.be.false;
  });
});

describe.only("Test suite 6:", function () {
  let spyadd = sinon.spy(obj1, "add");
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledOnce).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledTwice).to.be.true;
  });
  it("Case_3:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledThrice).to.be.true;
  });
  it("Case_4:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledOnce).to.be.false;
    expect(spyadd.calledTwice).to.be.false;
    expect(spyadd.calledThrice).to.be.false;
  });
});

// spy along with hooks: beforeEach
describe.only("Test suite 6:", function () {
  let spyadd;
  beforeEach(() => {
    spyadd = sinon.spy(obj1, "add");
  });
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledOnce).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledTwice).to.be.true;
  });
});

// spy along with hooks: beforeEach and afterEach
describe.only("Test suite 6:", function () {
  let spyadd;
  beforeEach(() => {
    spyadd = sinon.spy(obj1, "add");
  });
  afterEach(() => {
    sinon.restore();
  });
  it("Case_1:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledOnce).to.be.true;
  });
  it("Case_2:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledTwice).to.be.false;
    expect(spyadd.calledOnce).to.be.true;
  });
  it("Case_3:", function () {
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledThrice).to.be.false;
    expect(spyadd.calledOnce).to.be.true;
  });
  it("Case_4:", function () {
    expect(spyadd.calledOnce).to.be.false;
    obj1.callAnotherFunction(1, 2);
    expect(spyadd.calledOnce).to.be.true;
    expect(spyadd.calledTwice).to.be.false;
    expect(spyadd.calledThrice).to.be.false;
  });
});
//
//
describe.only("Mock test suite 1:", function () {
  //SPY arrange:
  let spygreet = sinon.spy(obj1, "greet");
  it("case_1 spy", function () {
    //act:
    obj1.callAnotherFunction(1, 2);
    obj1.callAnotherFunction(1, 2);
    //assert:
    expect(spygreet.calledTwice).to.be.true;
    sandbox.restore(); // not working
  });
  it("case_3 spy", function () {
    //act:
    obj1.callAnotherFunction(1, 2);
    //assert:
    expect(spygreet.calledOnce).to.be.true;
  });
});
//
//
describe.only("Mock test suite 1:", function () {
  let [spygreet, obj] = [];
  beforeEach(() => {
    //SPY arrange:
    obj = new One();
    spygreet = sinon.spy(obj, "greet");
  });
  afterEach(() => {
    //SPY retore:
    sandbox.restore();
  });
  it("case_1 spy", function () {
    //act:
    obj.callAnotherFunction(1, 2);
    obj.callAnotherFunction(1, 2);
    //assert:
    expect(spygreet.calledTwice).to.be.true;
  });
  it("case_2 spy", function () {
    //act:
    obj.callAnotherFunction(1, 2);
    //assert:
    expect(spygreet.calledOnce).to.be.true;
  });
});
