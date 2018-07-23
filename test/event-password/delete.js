const dbService = require('../../image-service/handler')
const log = require('../log')

function deleteEventPassword() {
    user = { pathParameters: { userId: 10, eventId: 10 } };
    dbService.deleteEventPassword(user, null, (err, result) => {
        let method = 'deleteEvent';
        log.log(err, result, method);
    });
}

deleteEventPassword();