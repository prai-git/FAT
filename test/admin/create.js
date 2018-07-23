const dbService = require('../../user-service/handler')
const log = require('../log')

function insertUser() {
    user = {
        body: JSON.stringify({
            id: 13,
            uuid: "1234",
            email: "preeti@gmail.com",
            name: "pankajy12",
            phone: 9764,
            agencyName: "agency Name"
        })
    };
    dbService.createUser(user, null, (err, result) => {
        let method = 'insertUser';
        log.log(err, result, method);
    });
}


insertUser();