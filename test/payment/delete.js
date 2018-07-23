const dbService = require('../../image-service/handler')
const log = require('../log')

function deleteEvent() {
    user = { pathParameters: { userId: 10, eventId: 81 } };
    dbService.deleteEvent(user, null, (err, result) => {
        let method = 'deleteEvent';
        log.log(err, result, method);
    });
}

deleteEvent();