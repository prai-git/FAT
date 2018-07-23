const dbService = require('../../admin-service/handler')
const log = require('../log')


function getSubscriberCost() {
    user = { pathParameters: { key: 'SUBSCRIBER_CODT' } };
    dbService.getSettingsByKey(user, null, (err, result) => {
        let method = 'getSubscriberCost';
        log.log(err, result, method);
    });
}

function getAll() {
   // user = { pathParameters: { key: 'SUBSCRIBER_COST' } };
    dbService.getAppSettings({}, null, (err, result) => {
        let method = 'getSubscriberCost';
        log.log(err, result, method);
    });
}


function getUserByName() {
    user = { pathParameters: { userName: 'wwwwx3' } };
    dbService.getUserByName(user, null, (err, result) => {
        let method = 'getUserByName';
        log.log(err, result, method);
    });
}


//getSubscriberCost();
getAll();