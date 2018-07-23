const dbService = require('../../payment-service/handler')
const log = require('../log')

function getCountBySubscriberId() {
    user = { pathParameters: { userId: 10, subscriberId: 53 } };
    dbService.getCountBySubscriberId(user, null, (err, result) => {
        let method = 'getCountById';
        log.log(err, result, method);
    });
}

getCountBySubscriberId();