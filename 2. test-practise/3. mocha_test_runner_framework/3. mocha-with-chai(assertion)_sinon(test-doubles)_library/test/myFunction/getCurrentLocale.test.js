// const chai = require('chai')
// const { getCurrentLocale } = require('../../src/myFunction')

// const expect = chai.expect

// describe('getCurrentLocale:', () => {
//     beforeEach(()=>{
//         global.window = undefined;
//     })
//     it('case 1:', () => {
//         global.window = { location: { pathname: '/np/manage/companies'} }
//         expect(getCurrentLocale()).to.be.eql('np')
//     });
//     it('case 2:', () => {
//         global.window = { location: { pathname: '/np/help/companies'} }
//         expect(getCurrentLocale()).to.be.eql('en')
//     });
//     it('case 3:', () => {
//         global.window = { location: { pathname: '/np/resources/companies'} }
//         expect(getCurrentLocale()).to.be.eql('en')
//     });
//     it('case 4:', () => {
//         global.window = { location: { pathname: '/'} }
//         expect(getCurrentLocale()).to.be.eql('en')
//     });
// });
