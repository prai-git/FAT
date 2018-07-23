'use strict';
const dbService = require('./database/dbService');

module.exports.createUser = (event, context, callback) => {
    const user = event.body;
    dbService.userDbService.insertUser(user, callback);
};

module.exports.updateUser = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userDbService.updateUser(user, callback);
};

module.exports.getUserById = (event, context, callback) => {
    const id = event.pathParameters.userId
    dbService.userDbService.getUserByID(id, callback);
};

module.exports.deleteUserById = (event, context, callback) => {
    const id = event.pathParameters.userId
    dbService.userDbService.deleteUserByID(id, callback);
};

///////////////// User Details //////////////////////////////
module.exports.createUserDetails = (event, context, callback) => {
    const userDetails = JSON.parse(event.body);
    dbService.userDetailsDbService.insertUserDetails(userDetails, callback);
};

module.exports.getUserDetailsById = (event, context, callback) => {
    const id = event.pathParameters.userDetailsId
    dbService.userDetailsDbService.getUserDetailsByID(id, callback);
};

///////////////// image //////////////////////////////
module.exports.createImage = (event, context, callback) => {
    const image = JSON.parse(event.body);
    dbService.imageDbService.insertImage(image, callback);
};

module.exports.getImageById = (event, context, callback) => {
    const id = event.pathParameters.imageId
    dbService.imageDbService.getImageById(id, callback);
};

module.exports.createEvent = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.insertEvent(eventData, callback);
};

module.exports.getEventById = (event, context, callback) => {
    const id = event.pathParameters.eventId
    dbService.eventDbService.getEventByID(id, callback);
};

////////////////// subscriber  ///////////////////////////////
module.exports.createSubscriber = (event, context, callback) => {
    const image = JSON.parse(event.body);
    dbService.subscriberDbService.insertSubscriber(image, callback);
};

module.exports.getSubscriberById = (event, context, callback) => {
    const id = event.pathParameters.subscriberId
    dbService.subscriberDbService.getSubscriberById(id, callback);
};

module.exports.createSubscriberDetails = (event, context, callback) => {
    const subscriberDetails = JSON.parse(event.body);
    dbService.subscriberDetailsDbService.insertsubscriberDetails(subscriberDetails, callback);
};

module.exports.getsubscriberDetailsById = (event, context, callback) => {
    const id = event.pathParameters.detailsId
    dbService.subscriberDetailsDbService.getsubscriberDetailsById(id, callback);
};

module.exports.createSubscriberPage = (event, context, callback) => {
    const subscriberPage = JSON.parse(event.body);
    dbService.subscriberPageDbService.insertSubscriberPage(subscriberPage, callback);
};

module.exports.getsubScriberPageById = (event, context, callback) => {
    const id = event.pathParameters.pageId
    dbService.subscriberPageDbService.getsubScriberPageById(id, callback);
};

//////////////////////////// Subscription type /////////////////////////
module.exports.createSubscriptionType = (event, context, callback) => {
    const subscriptionType = JSON.parse(event.body);
    dbService.subscriptionTypeDbService.insertSubscriptionType(subscriptionType, callback);
};

module.exports.getSubscriptionType = (event, context, callback) => {
    const id = event.pathParameters.getSubscriptionType
    dbService.subscriptionTypeDbService.getSubscriptionType(id, callback);
};