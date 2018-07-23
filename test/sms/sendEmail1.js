const dbService = require('../../ses-email-service/handler')
const log = require('../log')

function sendMessage() {
    data = {
        body: JSON.stringify({fileName:'https://s3.amazonaws.com/media.phototainment360.com/pt_test/0/41e69135-c16d-47d2-ab56-146315c35d95.png', to:'pankaj.cdac@gmail.com'})
    };
    
    dbService.sendMail(data, null, (err, result) => {
        let method = 'sendMessage';
        log.log(err, result, method);
    });
}

sendMessage();