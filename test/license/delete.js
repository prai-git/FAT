const dbService = require('../../payment-service/handler')
const log = require('../log')

function deleteEvent() {
    user = { pathParameters: { userId: 10, id: 1 } };
    dbService.deleteLicense(user, null, (err, result) => {
        let method = 'deleteEvent';
        log.log(err, result, method);
    });
}

deleteEvent();