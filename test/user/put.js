const dbService = require('../../user-service/handler')
const log = require('../log')

function updateUser(req, res) {
    user = {
        body: JSON.stringify({
            id: 69,
            uuid: "1234",
            email: "hello@gmail.com",
            photo: "photo_update",
            name: "pankaj5",
            phone: 9764677655,
            addresses: [{
                userId: 69,
                type : 'profile',
                line1 : 'data A',
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

    dbService.updateUser(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

updateUser();