const clone = (arg) => ({ a: 1, b: 2 });

class TimeoutDataSource {
    post(arg1, arg2) {
        console.log('...........................')
        console.log(arg1)
        console.log(arg2)
        return 'poested response data';
    }
}

class CatalogService extends TimeoutDataSource {
    addCustomerMetadata(arg) {
        const customerMeta = clone(arg);
        return this.post('/catalog/customermetadata?updateElastic=true', customerMeta);
    }
}

// const CatalogServiceInstance = new CatalogService();
// const params = { globalCustomerId: 1198 };
// const result = CatalogServiceInstance.addCustomerMetadata(params)
// console.log(result);

module.exports = { CatalogService, TimeoutDataSource }
