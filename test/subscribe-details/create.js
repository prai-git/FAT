const dbService = require('../../subscriber-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            id: 3,
            logo: 'logo.png',
            company_name: 'company',
            title: 'title',
            background: 'background.png'
        })
    };
    dbService.createSubscriberPage(data, null, (err, result) => {
        let method = 'createSubscriberPage';
        log.log(err, result, method);
    });
}

insert();