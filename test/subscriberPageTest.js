const dbService = require('../database/subscriber/subscriberPageDbService')
const log = require('./log')

let subscriberPage = {
    id: 3,
    logo: 'logo',
    company_name: 'company',
    title: 'title'
};


function insertSubscriberPage(req, res) {
    dbService.insertSubscriberPage(subscriberPage, (err, result) => {
        let method = 'insertSubscriberPage';
        log.log(err, result, method);
    });
}

function getSubscriberPageByID(req, res) {
    dbService.getsubScriberPageById(subscriberPage.id, (err, result) => {
        let method = 'getSubscriberPageByID';
        log.log(err, result, method);
    });
}

insertSubscriberPage(null, null);
getSubscriberPageByID(null, null);