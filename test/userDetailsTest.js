const dbService = require('../database/user/userDetailsDbService')
const log = require('./log')

let userDetails = 
{
    body: {
        id: 1,
        roleId: 1,
        providerId: 1,
        userGroupId: 1,
        profileImageId: null,
        subscriberId: 1,
        modifierId: null
    },
};


function insertUserDetails(req, res) {
    dbService.insertUserDetails(userDetails, null, (err, result) => {
        let method = 'insertUserDetails';
        log.log(err, result, method);
    });
}

function getUserDetailsByID(req, res) {
    data = { pathParameters: { userDetailsId: 4 } };
    dbService.getUserDetailsByID(data, (err, result) => {
        let method = 'getUserDetailsByID';
        log.log(err, result, method);
    });
}

insertUserDetails(null, null);
getUserDetailsByID(null, null);