const dbService = require('../../image-service/handler')
const log = require('../log')

function insert() {
    data = {
        body: JSON.stringify({
            userId: 10,
            paymentDate : new Date(), 
            paymentAmount :100 , 
            orderId :123,
            buyer : 'paypall',
            paymentJson: {a:'aaa', b:'bbb'}
        })
    };
    
    dbService.createPayment(data, null, (err, result) => {
        let method = 'createPayment';
        log.log(err, result, method);
    });
}

insert();