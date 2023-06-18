const clone = (arg) => ({ a: 1, b: 2 });

class TimeoutDataSource {
    get(arg1, arg2) {
        console.log('...........................')
        console.log(arg1)
        console.log(arg2)
        return 'get company roles.';
    }
}

class UserServiceV3 extends TimeoutDataSource {
    getCompanyRoles(arg1,arg2) {
        return this.get('/customers/all/roles', 'id,displayName,typeId,permissions,description');
    }
}

// const CatalogServiceInstance = new CatalogService();
// const params = { globalCustomerId: 1198 };
// const result = CatalogServiceInstance.addCustomerMetadata(params)
// console.log(result);

module.exports = UserServiceV3
