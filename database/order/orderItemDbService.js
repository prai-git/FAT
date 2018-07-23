var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertOrderItem: function(data, callback) {
        var sql = queries.insertOrderItem;
        excute.execute(sql, data, callback);
    },

    getOrderItem: function(id, callback) {
        var sql = queries.getOrderItem;
        excute.execute(sql, { 'id': id }, callback);
    },

    
    updateOrderItem: function(data, callback) {
        var sql = queries.updateOrerItem;
        excute.execute(sql, data, callback);
    }
}