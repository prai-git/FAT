const dbService = require('../../../user-service/handler')
const log = require('../../log')


function getUserByID() {
    user = { pathParameters: { userId: 1 } };
    dbService.getUserAddress(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}

function getUserByName() {
    user = { pathParameters: { userName: 'pankajTest3' } };
    dbService.getUserByName(user, null, (err, result) => {
        let method = 'getUserByName';
        log.log(err, result, method);
    });
}


getUserByID();