const dbService = require('../database/subscription_type/subscriptionTypeDbService')
const log = require('./log')

let SubscriptionType = {
    id: 3,
    version: 1,
    type: 'private',
    validity: 11,
    paymentAmount: 12,
};


function insertSubscriptionType(req, res) {
    dbService.insertSubscriptionType(SubscriptionType, (err, result) => {
        let method = 'insertSubscriptionType';
        log.log(err, result, method);
    });
}

function getSubscriptionTypeByID(req, res) {
    dbService.getSubscriptionType(SubscriptionType.id, (err, result) => {
        let method = 'getSubscriptionTypeByID';
        log.log(err, result, method);
    });
}

insertSubscriptionType(null, null);
getSubscriptionTypeByID(null, null);