const dbService = require('../../../user-service/handler')
const log = require('../../log')

function insertAddress() {
    user = {
        body: JSON.stringify({
            userId : 1,
            type : 'home_2',
            line1 : 'line 1',
            line2 : 'line 2',
            line3 : 'line 3',
            city : 'pune',
            zipcode : 411014,
            state : 'Maharastra',
            country : 'india',
            other : 'other'
        })
    };
    dbService.createUserAddress(user, null, (err, result) => {
        let method = 'createUserAddress';
        log.log(err, result, method);
    });
}


insertAddress();
