const dbService = require('../database/subscriber/subscriberDetailsDbService')
const log = require('./log')

let subscriberDetails = {
    id: 3,
    cAddress: 'c pune',
    bAddress: 'b pune',
    city: 'pune',
    company: 'gp',
    country_code: '221603',
    fax: '0421',
    modifierId: null
};


function insertSubscriberDetails(req, res) {
    dbService.insertsubscriberDetails(subscriberDetails, (err, result) => {
        let method = 'insertSubscriberDetails';
        log.log(err, result, method);
    });
}

function getSubscriberDetailsByID(req, res) {
    dbService.getsubscriberDetailsById(subscriberDetails.id, (err, result) => {
        let method = 'getSubscriberDetailsByID';
        log.log(err, result, method);
    });
}

insertSubscriberDetails(null, null);
getSubscriberDetailsByID(null, null);