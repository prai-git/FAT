const dbService = require('../database/subscriber/subscriberDbService')
const log = require('./log')
let subscriber = {
    id: 1,
    licenseId: 2,
    startSubscriptionTime: null,
    duration: 3,
    modifierId: null
};


function insertSubscriber(req, res) {
    dbService.insertsubscriber(subscriber, (err, result) => {
        let method = 'insertSubscriber';
        log.log(err, result, method);
    });
}

function getSubscriberByID(req, res) {
    dbService.getsubscriberById(subscriber.id, (err, result) => {
        let method = 'getSubscriberByID';
        log.log(err, result, method);
    });
}

insertSubscriber(null, null);
getSubscriberByID(null, null);