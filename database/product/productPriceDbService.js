var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertProductPrice: function(data, callback) {
        var sql = queries.insertProductPrice;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getProductPrice: function(id, callback) {
        var sql = queries.getProductPrice;
        excute.execute(sql, { 'id': id }, callback);
    },

    updateProductPrice: function(data, callback) {
        var sql = queries.updateProductPrice;
        excute.execute(sql, data, callback);
    }
}