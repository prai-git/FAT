const dbService = require('../../image-service/handler')
const log = require('../log')

function validate() {
    
    user = {
        body: JSON.stringify({
            authKey: '11',
            value: 'helllo updated'
        })
    };

    dbService.validateEventPassword(user, null, (err, result) => {
        let method = 'validateEventPassword';
        log.log(err, result, method);
    });
}

validate();
