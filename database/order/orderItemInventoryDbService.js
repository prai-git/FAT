var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertOrderItemInventory: function(data, callback) {
        var sql = queries.insertOrderItemInventory;
        excute.execute(sql, data, callback);
    },

    getOrderItemInventory: function(id, callback) {
        var sql = queries.getOrderItemInventory;
        excute.execute(sql, { 'id': id }, callback);
    },

    
    updateOrderItemInventory: function(data, callback) {
        var sql = queries.updateOrerItemInventory;
        excute.execute(sql, data, callback);
    }
}