var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertSupplierItem: function(data, callback) {
        var sql = queries.insertSupplierItem;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getSupplierItem: function(userId, id, callback) {
        var sql = queries.getSupplierItem;
        excute.execute(sql, { 'userId': userId, 'id':id }, callback);
    },

    updateSupplierItem: function(data, callback) {
        var sql = queries.updateSupplierItem;
        excute.execute(sql, data, callback);
    }
}