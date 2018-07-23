const dbService = require('../../payment-service/handler')
const log = require('../log')

function update() {
    
    data = {
        body: JSON.stringify({
            price : 500,
            count : 1,
            orderId : 'xxx',
            currency : 'USD',
            subscriber_id : 53,
            id : 1
        })
    };

    dbService.updateLicense(data, null, (err, result) => {
        let method = 'updatePayment';
        log.log(err, result, method);
    });
}

update();
