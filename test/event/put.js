const dbService = require('../../image-service/handler')
const log = require('../log')

function update() {
    
    user = {
        body: JSON.stringify({
            id: 81,
            parent_id: 0,
            user_id: 10,
            name: 'mydbtest updated',
            description: 'testing db updated',
            type: 'public',
        })
    };

    dbService.updateEvent(user, null, (err, result) => {
        let method = 'updateEvent';
        log.log(err, result, method);
    });
}

update();
