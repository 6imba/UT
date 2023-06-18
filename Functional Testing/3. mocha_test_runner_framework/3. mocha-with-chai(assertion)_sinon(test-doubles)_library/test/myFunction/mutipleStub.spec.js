// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const { updateUser } = require('../../src/mutipleStub')

// chai.use(sinonChai);

// const createSandbox = () => sinon.createSandbox();
// const { expect } = chai;

// describe('payloadHelpers', () => {
//     describe('contactUpdatedEventPayload', () => {
//         let sandbox;
//         let customerV2APIInstance;
//         beforeEach(() => {
//             sandbox = createSandbox();
//             customerV2APIInstance = new CustomerServiceV2();
//         });
//         afterEach(() => {
//             sandbox.restore();
//         });
//         it('should return targetUser', () => {
//             const sourceProfile = { company: { id: '123123' }, customerId: 'customerId', email: 'email' };
//             const targetProfile = { mergeToExistingProfile: 'mergeToExistingProfile', email: 'email', FirstName: 'FirstName' };
//             const correlationId = 'correlationId';
//             const options = { userV3API: { getProfilesByEmail: () => { } }, customerV2API: 'customerV2API' };

//             const stubGetProfilesByEmail = sandbox.stub(customerV2APIInstance, 'getCustomerById').resolves('data');
//             updateUser(sourceProfile, targetProfile, correlationId, options);
//             expect(stubGetProfilesByEmail).to.be.calledWith(sourceProfile.company.id, { projection: 'name' });
//         });
//     });
// });
