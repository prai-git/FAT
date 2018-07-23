const dbService = require('../../product-service/handler')
const log = require('../log')

function update() {
    user = {
        body: JSON.stringify({
            "id":"230",
            "name":"New kheer khadam",
            "description":"new best selling sweet",
            "productId": "1",
            "categoryId": "1",
            "photo": "new photo",
            "create_time":null,
            "modified_time":null,
            "creator_id":null,
            "modifier_id":null,
            "userId":"69"       
        })
    };

    dbService.updateSupplierItem(user, null, (err, result) => {
        let method = 'updateSubscriber';
        log.log(err, result, method);
    });
}

update();