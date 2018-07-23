const dbService = require('../../payment-service-1/handler')
const log = require('../log')

function update() {
    
    data = {
        body: JSON.stringify({
            id : 1,
            userId: 10,
            paymentDate : new Date(), 
            paymentAmount :200.2342, 
            orderId :123,
            buyer : 'paypall',
        })
    };

    dbService.updatePayment(data, null, (err, result) => {
        let method = 'updatePayment';
        log.log(err, result, method);
    });
}

update();
