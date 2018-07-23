const dbService = require('../../admin-service/handler');
const log = require('../log')


function getAllUsers() {
    dbService.getAllUsers('', null, (err, result) => {
        let method = 'getAllUsers';
        log.log(err, result, method);
    });
}

function getLatestUsers() {
    dbService.getLatestUsers('', null, (err, result) => {
        let method = 'getLatestUsers';
        log.log(err, result, method);
    });
}


 getAllUsers();
//getLatestUsers();