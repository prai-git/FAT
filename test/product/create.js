const dbService = require('../../product-service/handler')
const log = require('../log')

function insertSubscribe() {
    data = {
        body: JSON.stringify({
            "id":"1",
            "name":"kheer khadam",
            "description":"best selling sweet",
            "productId": "1",
            "categoryId": "1",
            "photo" : "photo",
            "create_time":null,
            "modified_time":null,
            "creator_id":null,
            "modifier_id":null,
            "userId":"69"
        })
    };
    dbService.createSupplierItem(data, null, (err, result) => {
        let method = 'createSupplierItem';
        log.log(err, result, method);
    });
}


insertSubscribe();