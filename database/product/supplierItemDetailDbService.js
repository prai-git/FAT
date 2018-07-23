var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertSupplierItemDetail: function(data, callback) {
        var sql = queries.insertSupplierItemDetail;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getSupplierItemDetail: function(id, callback) {
        var sql = queries.getSupplierItemDetail;
        excute.execute(sql, { 'id': id }, callback);
    },

    updateSupplierItemDetail: function(data, callback) {
        var sql = queries.updateSupplierItemDetail;
        excute.execute(sql, data, callback);
    }
}