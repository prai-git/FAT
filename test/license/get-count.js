const dbService = require('../../payment-service/handler')
const log = require('../log')

function getLicenseCount() {
    user = { pathParameters: { userId: 10, id: 2 } };
    dbService.getCountById(user, null, (err, result) => {
        let method = 'getCountById';
        log.log(err, result, method);
    });
}

getLicenseCount();