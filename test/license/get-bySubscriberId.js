const dbService = require('../../payment-service/handler')
const log = require('../log')

function getBySubscriberId() {
    user = { pathParameters: { userId: 10, subscriberId: 53 } };
    dbService.getBySubscriberId(user, null, (err, result) => {
        let method = 'getCountById';
        log.log(err, result, method);
    });
}

getBySubscriberId();