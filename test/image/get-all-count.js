const dbService = require('../../image-service/handler')
const log = require('../log')

function getImageCount() {
    user = { pathParameters: { userId: 'all', eventId: 81 } };
    dbService.getImageCount(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getImageCount();