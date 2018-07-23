const dbService = require('../../image-service/handler')
const log = require('../log')

function getEventById() {
    user = { pathParameters: { userId: 10, eventId: 81 } };
    dbService.getEventById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getEventById();