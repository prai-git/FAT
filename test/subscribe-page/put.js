const dbService = require('../../subscriber-service/handler')
const log = require('../log')

function update() {
    
    user = {
        body: JSON.stringify({
            id: 617,
            logo: 'logo_new.png',
            companyName: 'company new',
            title: 'title',
            background: 'background_new.png',
            cAddress: 'pune city new',
            bAddress: 'pune home new',
            contactInfo: 'contactInfo  new',
            headerBgType: 0,
            headerBgPattern: 2,
            headerBgColor: 'fff',
            bodyBgType: 2,
            bodyBgPattern: 2,
            bodyBgImage: 'bodyBgImage.jpg',
            bodyBgColor: '',
            logoPosition: 'LEFT',
            headerTextColor: 'fff',
            contactPerson: 'contact_person update'
        })
    };

    dbService.updateSubscriberPage(user, null, (err, result) => {
        let method = 'updatesubscriber';
        log.log(err, result, method);
    });

}
update();
