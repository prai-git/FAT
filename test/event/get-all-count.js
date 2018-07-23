const dbService = require('../../image-service/handler')
const log = require('../log')

function getEventCount() {
    user = { pathParameters: { userId: 'all', eventId: 81 } };
    dbService.getEventCount(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getEventCount();