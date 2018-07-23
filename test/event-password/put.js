const dbService = require('../../image-service/handler')
const log = require('../log')

function update() {
    
    user = {
        body: JSON.stringify({
            authKey: '10',
            value: 'helllo updated'
        })
    };

    dbService.updateEventPassword(user, null, (err, result) => {
        let method = 'updateEventPassword';
        log.log(err, result, method);
    });
}

update();
