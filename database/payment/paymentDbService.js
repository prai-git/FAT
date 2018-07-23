var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertPayment: function(data, callback) {
        var sql = queries.insertPayment;
        console.log(data);
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getPaymantById: function(id, callback) {
        var sql = queries.getPaymantById;
        excute.execute(sql, { 'id': id }, callback);
    },

    getPaymentByOrderId: function(orderId, callback) {
        var sql = queries.getPaymentByOrderId;
        excute.execute(sql, { 'orderId': orderId }, callback);
    },

    getPaymentByUserId: function(userId, callback) {
        var sql = queries.getPaymentByUserId;
        excute.execute(sql, { 'userId': userId }, callback);
    },

    updatPayment: function(payment, callback) {
        var sql = queries.updatPayment;
        excute.execute(sql, payment, callback);
    }
}