const dbService = require('../../user-service/handler')
const log = require('../log')

function updateUser(req, res) {
    user = {
        body: JSON.stringify({
            userId : 1,
            type : 'home 2',
            line1 : 'line 1 2',
            line2 : 'line 2 2',
            line3 : 'line 3 2',
            city : 'pune 2',
            zipcode : 4110142,
            state : 'Maharastra 2',
            country : 'india 2',
            other : 'other 2',
            id : 1
        })
    };

    dbService.updateUser(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

updateUser();