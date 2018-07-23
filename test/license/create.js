const dbService = require('../../payment-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            price : 499,
            count : 1,
            order_id : 'xxx',
            currency : 'USD',
            subscriberId : 53
        })
    };
    
    dbService.createLicense(data, null, (err, result) => {
        let method = 'createLicense';
        log.log(err, result, method);
    });
}

insert();