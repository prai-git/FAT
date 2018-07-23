const dbService = require('../../user-service/handler')
const log = require('../log')

function insertUser() {
    user = {
        body: JSON.stringify({
            id: 13,
            uuid: "1234",
            email: "hello@gmail.com",
            photo: "photo",
            name: "pankaj5",
            phone: 9764677655,
            addresses: [{
                type : 'profile',
                line1 : 'line A',
                line2 : 'line A',
                line3 : 'line A',
                city : 'puneA',
                zipcode : 411014,
                state : 'Maharastra A',
                country : 'india A',
                other : 'other A'
            }]
        })
    };
    dbService.createUser(user, null, (err, result) => {
        let method = 'insertUser';
        log.log(err, result, method);
    });
}


insertUser();
