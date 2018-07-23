const dbService2 = require('../handler')
const log = require('./log')

function getImages() {
    user = { pathParameters: { userId: 10, eventId: 0 } };
    dbService2.getImages(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getImages();