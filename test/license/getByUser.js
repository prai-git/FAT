const dbService = require('../../image-service/handler')
const log = require('../log')

function getEventById() {
    user = { pathParameters: { paymentId: 1, orderId: 123, userId: 10 } };
    dbService.getPaymentByUserId(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


function getPaymentByUserId() {
    user = { pathParameters: { userId: 10, orderId: 123, userId: 10 } };
    dbService.getPaymentByUserId(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}

getPaymentByUserId();