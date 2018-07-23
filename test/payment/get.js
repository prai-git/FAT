const dbService = require('../../image-service/handler')
const log = require('../log')

function getEventById() {
    user = { pathParameters: { paymentId: 12, eventId: 81 } };
    dbService.getPaymentById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getEventById();