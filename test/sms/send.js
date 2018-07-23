const dbService = require('../../ses-email-service/handler')
const log = require('../log')

function sendMessage() {
    data = {
        body: JSON.stringify({fileName:'hello', to:"+919421739583"})
    };
    
    dbService.sendMessage(data, null, (err, result) => {
        let method = 'sendMessage';
        log.log(err, result, method);
    });
}

sendMessage();