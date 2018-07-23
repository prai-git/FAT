const dbService = require('../../subscriber-service/handler')
const log = require('../log')


function getById() {
    user = { pathParameters: { pageId: 8 } };
    dbService.getSubscriberPageById(user, null, (err, result) => {
        let method = 'getSubscriberById';
        log.log(err, result, method);
    });
}

getById();