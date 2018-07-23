const dbService = require('../../subscriber-service/handler')
const log = require('../log')

function update() {
    user = {
        body: JSON.stringify({
            id: 1,
            licenseId: 2,
            startSubscriptionTime: null,
            duration: 3,
            logo: 'logo.png',
            background: 'background.png',
            modifierId: null
        })
    };

    dbService.updateSubscriber(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

update();