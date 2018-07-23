var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertProduct: function(data, callback) {
        var sql = queries.insertProduct;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getProduct: function(id, callback) {
        var sql = queries.getProduct;
        excute.execute(sql, { 'id': id }, callback);
    },

     getAllProduct: function(callback) {
        var sql = queries.getAllProduct;
        excute.execute(sql, {}, callback);
    },

    updateProduct: function(data, callback) {
        var sql = queries.updateProduct;
        excute.execute(sql, data, callback);
    }
}