const dbService = require('../../ses-email-service/handler')
const log = require('../log')

function sendMessage() {
    data = {
        body: JSON.stringify({fileName:'hello', type:2, to:'pankaj.cdac@gmail.com', subject:'send request', content:'Hi, I have many issue with you'})
    };
    
    dbService.sendMail(data, null, (err, result) => {
        let method = 'sendMessage';
        log.log(err, result, method);
    });
}

sendMessage();