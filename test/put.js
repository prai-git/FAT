const dbService = require('../../handler')
const log = require('./log')

function updateUser(req, res) {
    user = {
        body: {
            id: 10,
            uuid: "1234",
            email: "wwww@gmail.com",
            name: "wwww",
            phone: 9421739583,
            subscriberId: 1
        }
    };

    dbService.updateUser(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

updateUser();