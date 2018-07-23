const dbService = require('../../../user-service/handler')
const log = require('../../log')

function insertUserSuplier() {
    user = {
        body: JSON.stringify({
            user_id: 1,
            location_marker_id: null,
            status: 1,
            averageRating: 4,
            acceptTc: 0
        })
    };
    dbService.createUserSupplier(user, null, (err, result) => {
        let method = 'insertUser';
        log.log(err, result, method);
    });
}


insertUserSuplier();
