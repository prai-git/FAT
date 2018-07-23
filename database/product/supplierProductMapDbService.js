var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertSupplierProductMap: function(data, callback) {
        var sql = queries.insertSupplierProductMap;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getSupplierProductMap: function(id, callback) {
        var sql = queries.getSupplierProductMap;
        excute.execute(sql, { 'id': id }, callback);
    },

    updateSupplierProductMap: function(data, callback) {
        var sql = queries.updateSupplierProductMap;
        excute.execute(sql, data, callback);
    }
}