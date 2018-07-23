const dbService = require('../../user-service/handler')
const log = require('../log')


function getUserByID() {
    user = { pathParameters: { userId: 22 } };
    dbService.getUserById(user, null, (err, result) => {
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

function getUserByPhone() {
    user = { pathParameters: { phoneNumber: '9764633955' } };
    dbService.getUserByPhone(user, null, (err, result) => {
        let method = 'getUserByName';
        log.log(err, result, method);
    });
}


getUserByPhone();