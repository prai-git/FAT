const dbService = require('../../../user-service/handler')
const log = require('../../log')

function updateUser(req, res) {
    user = {
        body: JSON.stringify({
            user_id: 1,
            location_marker_id: null,
            status: 1,
            averageRating: 4,
            acceptTc: 1,
        })
    };

    dbService.updateUserSupplier(user, null, (err, result) => {
        let method = 'updateUser';
        log.log(err, result, method);
    });
}

updateUser();