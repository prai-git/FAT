const dbService = require('../../image-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            'authKey': '10',
            'value': 'helllo'
        })
    };
    
    dbService.createEventPassword(data, null, (err, result) => {
        let method = 'createEventPassword';
        log.log(err, result, method);
    });
}

insert();