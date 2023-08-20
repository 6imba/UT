// const chai = require('chai')
// const sinon = require('sinon')
// const { UserServiceV3 } = require('../../src/userServiceV3')
// const { expect } = chai;
// const userServiceV3Instance = new UserServiceV3();
// describe ("UserServiceV3", function(){
//     describe("getRolePermissions", function(){
//         it("expected to invoke get", async function(){
//             let getStub = sinon.stub(userServiceV3Instance, 'get')
//             const url = '/customers/globalCustomerId/roles';
//             const params = { projection: 'GET_USER_ROLE_PERMISSIONS_PROJECTION', filter: 123 }
//             const headers = { headers: 'this.overrideToGet' };
//             getStub.withArgs(url, params, headers).returns({data:77})
//             const result = await userServiceV3Instance.getRolePermissions(123);
            
//             console.log(result)
//             expect(result).to.be.equal(77)
//         })
//     });
//     describe("getUserProfileById", function(){
//         it("expected to invoke post", async function(){
//             let getStub = sinon.stub(userServiceV3Instance, 'post')
//             const profileId = 123;
//             const options = { projection: 'projection', filter: 'filter' };
//             const url = '/customers/all/roles';
//             const params = { projection: 'projection', filter: { filter: 'filter', '#and': { 'profile.id': { in: [profileId] } } } }
//             const headers = { headers: 'http' };
//             getStub.withArgs(url, params, headers).returns({data:77})
//             const result = await userServiceV3Instance.getRolePermissions(profileId, options);
            
//             console.log(result)
//             expect(result).to.be.equal(77)
//         })
//     });
// });
