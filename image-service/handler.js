'use strict';
const dbService = require('./database/dbService');

module.exports.createImage = (event, context, callback) => {
    const image = JSON.parse(event.body);
    console.log(image);
    dbService.imageDbService.insertImage(image, callback);
};

module.exports.getImages = (event, context, callback) => {
    const eventId = event.pathParameters.eventId;
    const userId = event.pathParameters.userId;
    dbService.imageDbService.getImagesByEeventId(
        userId, eventId, callback);
};


module.exports.updateImage = (event, context, callback) => {
    const image = JSON.parse(event.body);
    dbService.imageDbService.updateImage(image, callback);
};

module.exports.deleteImage = (event, context, callback) => {
    const id = event.pathParameters.imageId;
    dbService.imageDbService.deleteimageByID(id, callback);
};

module.exports.getImageById = (event, context, callback) => {
    const id = event.pathParameters.imageId
    dbService.imageDbService.getImageById(id, callback);
};

module.exports.getImageCount = (event, context, callback) => {
    const id = event.pathParameters.userId
    if(id == 'all'){
        dbService.imageDbService.getAllImageCount(callback);
    } else {
        dbService.imageDbService.getImageCount(id, callback);
    }   
};

////////////////// events ///////////////////////////////

module.exports.createEvent = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    if(eventData != null && typeof eventData.id !== "undefined") {
        console.log('has eventId');
        dbService.eventDbService.getEventByID(eventData.id, (err, eventData1) => {

           const eventDataPersisted = JSON.parse(eventData1.body);
         //   console.log(typeof eventDataPersisted[0].id);
            if(eventDataPersisted != null && typeof eventDataPersisted !== "undefined" 
            && eventDataPersisted.length > 0 && typeof eventDataPersisted[0].id !== "undefined" ) {
                console.log('id found now we need to update',  eventDataPersisted[0].id);
               // callback(err, eventDataPersisted);
                dbService.eventDbService.updateEvent(eventData, callback);
            } else {
                dbService.eventDbService.insertEvent(eventData, callback);
            }
        });     
    } else {
        dbService.eventDbService.insertEvent(eventData, callback);
    }
};

module.exports.updateEvent = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.updateEvent(eventData, callback);
};

module.exports.deleteEvent = (event, context, callback) => {
    const id = event.pathParameters.eventId

    dbService.eventDbService.deleteImagesByEventId(id, (err, data) => {
        console.log('deleted the event ::', id);
    });
    dbService.eventDbService.deleteEventById(id, callback);
};

module.exports.getEventById = (event, context, callback) => {
    const id = event.pathParameters.eventId
    dbService.eventDbService.getEventByID(id, callback);
};


module.exports.getEvents = (event, context, callback) => {
    const id = event.pathParameters.userId
    dbService.eventDbService.getEventsByUserId(id, callback);
};

module.exports.getEventCount = (event, context, callback) => {
    const id = event.pathParameters.userId
    if(id == 'all'){
        dbService.eventDbService.getAllEventCount(callback);
    } else{
        dbService.eventDbService.getEventCount(id, callback);
    }
};


////////////////// event--password ///////////////////////////////

module.exports.createEventPassword = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.insertEventPassword(eventData, callback);
};

module.exports.updateEventPassword = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.updateEventPassword(eventData, callback);
};

module.exports.deleteEventPassword = (event, context, callback) => {
    const key = event.pathParameters.eventId
    dbService.eventDbService.deleteEventPassword(key, callback);
};

module.exports.getEventPassword = (event, context, callback) => {
    const key = event.pathParameters.eventId
    dbService.eventDbService.getEventPassword(key, callback);
};

module.exports.validateEventPassword = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.validateEventPassword(eventData, callback);
};


//////////////////////////  Payment ////////////////////////////////////
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