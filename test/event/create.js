const dbService = require('../../image-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            parent_id:  0,
            user_id: 10,
            name:  'mydbtest',
            description:  'testing db',
            type: 1,
            password: 'password153W' 
        })
    };
    
    dbService.createEvent(data, null, (err, result) => {
        let method = 'createEvent';
        log.log(err, result, method);
    });
}

insert();