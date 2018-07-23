const dbService = require('../../admin-service/handler')
const log = require('../log')

function updateAppSetting(req, res) {
    user = {
        body: JSON.stringify({
            id: 171,
            key: "app-sub-cost",
            value: 500,
        })
    };

    dbService.updateAppSettings(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

updateAppSetting();