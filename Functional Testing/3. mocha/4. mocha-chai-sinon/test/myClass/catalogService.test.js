// stub: clone(arg) ==> call clone once with arg.
// stub: post(arg1,arg2) ==> call clone once with arg1 and arg2.

const chai = require('chai')
const sinon = require('sinon')
const { CatalogService, TimeoutDataSource } = require('../../src/catalogService')

const catalogServiceInstance = new CatalogService()
const timeoutDataSourceInstance = new TimeoutDataSource()
const expect = chai.expect

describe("addCustomerMetadata", function(){
    it("test case", function(){
        let postStub = sinon.spy(catalogServiceInstance, 'post')
        const params = { globalCustomerId: 1198 };
        const response = { globalCustomerId: 1198, tceCustomerId: 0 };
        // postStub.withArgs('/catalog/customermetadata?updateElastic=true', { ...params, tceCustomerId: 0 }).returns(response)
        // expect(catalogServiceInstance.addCustomerMetadata('/catalog/customermetadata?updateElastic=true', { ...params, tceCustomerId: 0 })).to.be.equal(response)
        catalogServiceInstance.addCustomerMetadata(params)
        // expect(postStub).to.have.been.calledOnceWithExactly()
        // console.log(postStub.args)
    })
});
