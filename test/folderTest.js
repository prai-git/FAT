const dbService = require('../database/image/eventDbService')
const log = require('./log')
let eventD = {
    id: 11,
    parentId: 1,
    userId: 1,
    name: 2,
    description: "testing folder for me",
    type: 1,
    modifierId: null
};


function insertEvent(req, res) {
    dbService.insertEvent(eventD, (err, result) => {
        let method = 'insertEvent';
        log.log(err, result, method);
    });
}

function getEventByID(req, res) {
    dbService.getEventByID(eventD.id, (err, result) => {
        let method = 'getEventByID';
        log.log(err, result, method);
    });
}

insertEvent(null, null);
getEventByID(null, null);