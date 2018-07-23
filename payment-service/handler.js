'use strict';
const dbService = require('./database/dbService');


module.exports.createPayment = (event, context, callback) => {
    console.log(event.body);
    const payemnt = JSON.parse(event.body);
    if(typeof payemnt.paymentJson !== 'undefined') {
        payemnt.paymentJson = JSON.stringify(payemnt.paymentJson);    
    }
    console.log(payemnt);
    dbService.paymentDbService.insertPayment(payemnt, callback);
};

module.exports.updatePayment = (event, context, callback) => {
    const payment = JSON.parse(event.body);
    dbService.paymentDbService.updatPayment(payment, callback);
};

module.exports.getPaymentById = (event, context, callback) => {
    const id = event.pathParameters.paymentId
    dbService.paymentDbService.getPaymantById(id, callback);
};

module.exports.getPaymentByOrderId = (event, context, callback) => {
    const id = event.pathParameters.orderId;
    dbService.paymentDbService.getPaymentByOrderId(id, callback);
};
module.exports.getPaymentByUserId = (event, context, callback) => {
    const id = event.pathParameters.userId;
    dbService.paymentDbService.getPaymentByUserId(id, callback);
};


///////////////////////////// Payment /////////////////////////
module.exports.createLicense = (event, context, callback) => {
    console.log(event.body);
    const license = JSON.parse(event.body);
    dbService.licenseDbService.insertLicense(license, callback);
};

module.exports.updateLicense = (event, context, callback) => {
    const license = JSON.parse(event.body);
    dbService.licenseDbService.updateLicense(license, callback);
};

module.exports.getLicensesById = (event, context, callback) => {
    const id = event.pathParameters.id
    dbService.licenseDbService.getLicensesById(id, callback);
};

module.exports.getLicensesBysubscriberId = (event, context, callback) => {
    const id = event.pathParameters.subscriberId;
    dbService.licenseDbService.getLicensesBysubscriberId({'subscriberId': id}, callback);
};

module.exports.getCountBySubscriberId = (event, context, callback) => {
    const id = event.pathParameters.subscriberId;
    dbService.licenseDbService.getCountBySubscriberId({'subscriberId': id}, callback);
};

module.exports.getCountById = (event, context, callback) => {
    const id = event.pathParameters.id
    dbService.licenseDbService.getCountById(id, callback);
};

module.exports.deleteLicense = (event, context, callback) => {
    const id = event.pathParameters.id;
    dbService.licenseDbService.deleteLicense(id, callback);
};


