const dbService = require('../../payment-service/handler')
const log = require('../log')

function getById() {
    user = { pathParameters: { paymentId: 12, id: 2 } };
    dbService.getLicensesById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


getById();