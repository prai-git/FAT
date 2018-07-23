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
    user = { pathParameters: { userName: 'agency_two', deviceId: '11ca0eae396ec284' } };
    dbService.getUserByNameAndDevice(user, null, (err, result) => {
        let method = 'getUserByName';
        log.log(err, result, method);
    });
}


getUserByName();