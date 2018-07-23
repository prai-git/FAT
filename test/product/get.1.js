const dbService = require('../../product-service/handler')
const log = require('../log')


function getById() {
    user = { pathParameters: { supplierId: 69, id:1 } };
    console.log('hello');
    dbService.getSupplierItem(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}

getById();