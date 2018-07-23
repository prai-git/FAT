const dbService = require('../../image-service/handler')
const log = require('../log')

function getEventgetEventPassword() {
    user = { pathParameters: { userId: 10, eventId: 10 } };
    dbService.getEventPassword(user, null, (err, result) => {
        let method = 'getEventPassword';
        log.log(err, result, method);
    });
}


getEventgetEventPassword();