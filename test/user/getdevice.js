const dbService = require('../../user-service/handler')
const log = require('../log')


function getUserByID() {
    user = { pathParameters: { userId: 22 } };
    dbService.getUserById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}

function getdevicesByUserName() {
    user = { pathParameters: { userName: 'wwww', deviceId: '123' } };
    dbService.getdevicesByUserName(user, null, (err, result) => {
        let method = 'getUserByName';
        log.log(err, result, method);
    });
}


getdevicesByUserName();