const dbService = require('../handler')
const log = require('./log')

function insertUser(req, res) {
    user = {
        body: JSON.stringify({
            id: 13,
            uuid: "1234",
            email: "preeti@gmail.com",
            name: "prai1",
            phone: 9764
        })
    };
    dbService.createUser(user, null, (err, result) => {
        let method = 'insertUser';
        log.log(err, result, method);
    });
}

function getUserByID(req, res) {
    user = { pathParameters: { userId: 22 } };
    dbService.getUserById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}

function updateUser(req, res) {
    user = {
        body: {
            id: 13,
            uuid: "1234",
            email: "wwww@gmail.com",
            name: "wwww",
            phone: 9421739583
        }
    };

    dbService.updateUser(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

function deleteUserByID(req, res) {
    user = { pathParameters: { userId: 22 } };
    dbService.getUserById(user, null, (err, result) => {
        let method = 'getUserByID';
        log.log(err, result, method);
    });
}


insertUser(null, null);
getUserByID(null, null);