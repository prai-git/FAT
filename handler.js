'use strict';
const dbService = require('./database/dbService');

module.exports.createUser = (event, context, callback) => {
    const user = JSON.parse(event.body);
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

module.exports.getUserByName = (event, context, callback) => {
    const name = event.pathParameters.userName
    dbService.userDbService.getUserByName(id, callback);
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

module.exports.updateUserDetails = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userDetailsDbService.updateUserDetails(user, callback);
};

module.exports.deleteUserDetails = (event, context, callback) => {
    const userDetails = event.pathParameters.userDetailsId;
    dbService.userDetailsDbService.deleteUserDetailsByID(id, callback);
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

module.exports.updateImage = (event, context, callback) => {
    const image = JSON.parse(event.body);
    dbService.imageDbService.updateImage(image, callback);
};

module.exports.deleteImage = (event, context, callback) => {
    const id = event.pathParameters.imageId
    dbService.imageDbService.deleteimageByID(id, callback);
};

module.exports.getImageById = (event, context, callback) => {
    const id = event.pathParameters.imageId
    dbService.imageDbService.getImageById(id, callback);
};

////////////////// events ///////////////////////////////

module.exports.createEvent = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.insertEvent(eventData, callback);
};

module.exports.updateEvent = (event, context, callback) => {
    // we can not use event here.
    const eventData = JSON.parse(event.body);
    dbService.eventDbService.updateEvent(eventData, callback);
};

module.exports.deleteEvent = (event, context, callback) => {
    const id = event.pathParameters.eventId
    dbService.eventDbService.deleteEventById(id, callback);
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

module.exports.updateSubscriber = (event, context, callback) => {
    const image = JSON.parse(event.body);
    dbService.subscriberDbService.updateSubscriber(image, callback);
};

module.exports.deleteSubscriber = (event, context, callback) => {
    const id = event.pathParameters.subscriberId
    dbService.subscriberDbService.deleteSubscriber(id, callback);
};

////////////////// subscriber Details ///////////////////////////////

module.exports.createSubscriberDetails = (event, context, callback) => {
    const subscriberDetails = JSON.parse(event.body);
    dbService.subscriberDetailsDbService.insertsubscriberDetails(subscriberDetails, callback);
};


module.exports.getSubscriberDetailsById = (event, context, callback) => {
    const id = event.pathParameters.detailsId
    dbService.subscriberDetailsDbService.getsubscriberDetailsById(id, callback);
};

module.exports.updateSubscriberDetails = (event, context, callback) => {
    const subscriberDetails = JSON.parse(event.body);
    dbService.subscriberDetailsDbService.updatesubscriberDetails(subscriberDetails, callback);
};

module.exports.deleteSubscriberDetails = (event, context, callback) => {
    const id = event.pathParameters.detailsId
    dbService.subscriberDetailsDbService.deletesubscriberDetails(id, callback);
};

////////////////// subscriber page ///////////////////////////////

module.exports.createSubscriberPage = (event, context, callback) => {
    const subscriberPage = JSON.parse(event.body);
    dbService.subscriberPageDbService.insertSubscriberPage(subscriberPage, callback);
};

module.exports.getSubscriberPageById = (event, context, callback) => {
    const id = event.pathParameters.pageId
    dbService.subscriberPageDbService.getSubscriberPageById(id, callback);
};

module.exports.updateSubscriberPage = (event, context, callback) => {
    const subscriberPage = JSON.parse(event.body);
    dbService.subscriberPageDbService.updateSubscriberPage(subscriberPage, callback);
};

module.exports.deleteSubscriberPage = (event, context, callback) => {
    const id = event.pathParameters.pageId;
    dbService.subscriberPageDbService.deletesubscriberPage(id, callback);
};

//////////////////////////// Subscription type /////////////////////////
module.exports.createSubscriptionType = (event, context, callback) => {
    const subscriptionType = JSON.parse(event.body);
    dbService.subscriptionTypeDbService.insertSubscriptionType(subscriptionType, callback);
};

module.exports.getSubscriptionType = (event, context, callback) => {
    const id = event.pathParameters.subscriptionId;
    dbService.subscriptionTypeDbService.getSubscriptionType(id, callback);
};

module.exports.updateSubscriptionType = (event, context, callback) => {
    const subscriptionType = JSON.parse(event.body);
    dbService.subscriptionTypeDbService.updateSubscriptionType(subscriptionType, callback);
};

module.exports.deleteSubscriptionType = (event, context, callback) => {
    const id = event.pathParameters.subscriptionId;
    dbService.subscriptionTypeDbService.deleteSubscriptionType(id, callback);
};