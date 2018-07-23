'use strict';
const dbService = require('./database/dbService');

////////////////// Order  ///////////////////////////////
module.exports.createOrder = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderDbService.insertOrder(data, callback);
};

module.exports.getPOrder = (event, context, callback) => {
    const id = event.pathParameters.orderId;
    dbService.orderDbService.getProductCategory(id, callback);
};

module.exports.updateOrder = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderDbService.updateProductCategory(data, callback);
};


////////////////// Order Item  ///////////////////////////////
module.exports.createOrderItem = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderItemDbService.insertOrderItem(data, callback);
};

module.exports.getOrder = (event, context, callback) => {
    const id = event.pathParameters.orderId;
    dbService.orderItemDbService.getOrderItem(id, callback);
};

module.exports.updateOrder = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderItemDbService.updateOrderItem(data, callback);
};


////////////////// Order Item Inventory ///////////////////////////////
module.exports.createOrderItemInventory = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderItemInventoryDbService.insertOrderItemInventory(data, callback);
};

module.exports.getOrderItemInventory = (event, context, callback) => {
    const id = event.pathParameters.orderId;
    dbService.orderItemInventoryDbService.getOrderItemInventory(id, callback);
};

module.exports.updateOrderItemInventory = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.orderItemInventoryDbService.updateOrderItemInventory(data, callback);
};

////////////////// Offer  ///////////////////////////////
module.exports.createOffer = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDbService.insertOffer(data, callback);
};

module.exports.getOffer = (event, context, callback) => {
    const id = event.pathParameters.OfferId
    dbService.OfferDbService.getOffer(id, callback);
};

module.exports.updateOffer = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.OfferDbService.updateOffer(data, callback);
};

////////////////// Notification  ///////////////////////////////
module.exports.createNotification = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDbService.insertNotification(data, callback);
};

module.exports.getNotification = (event, context, callback) => {
    const id = event.pathParameters.NotificationId
    dbService.NotificationDbService.getNotification(id, callback);
};

module.exports.updateNotification = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.NotificationDbService.updateNotification(data, callback);
};
