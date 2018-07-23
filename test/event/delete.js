const dbService = require('../../image-service/handler')
const log = require('../log')

function deleteEvent() {
    user = { pathParameters: { userId: 10, eventId: 19 } };
    dbService.deleteEvent(user, null, (err, result) => {
        let method = 'deleteEvent';
        log.log(err, result, method);
    });
}

function deleteImage() {
    user = { pathParameters: { userId: 128, imageId: 1181 } };
    dbService.deleteImage(user, null, (err, result) => {
        let method = 'deleteImage';
        log.log(err, result, method);
    });
}


// deleteEvent();
deleteImage();
