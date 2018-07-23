const dbService = require('../../subscriber-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            id: 3,
            logo: 'logo.png',
            companyName: 'company',
            title: 'title',
            background: 'background.png',
            cAddress: 'pune city',
            bAddress: 'pune home',
            contactInfo: 'contactInfo',
            headerBgType: 0,
            headerBgPattern: 1,
            headerBgColor: 'fff',
            bodyBgType: 1,
            bodyBgPattern: 1,
            bodyBgImage: 'bodyBgImage.jpg',
            bodyBgColor: '',
            logoPosition: 'LEFT',
            headerTextColor: 'fff',
            contactPerson: 'contact person'

        })
    };
    dbService.createSubscriberPage(data, null, (err, result) => {
        let method = 'createSubscriberPage';
        log.log(err, result, method);
    });
}

insert();