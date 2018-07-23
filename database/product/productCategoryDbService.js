var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertProductCategory: function(data, callback) {
        var sql = queries.insertProductCategory;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getProductCategory: function(id, callback) {
        var sql = queries.getProductCategory;
        excute.execute(sql, { 'id': id }, callback);
    },

     getAllProductCategory: function(callback) {
        var sql = queries.getAllProductCategory;
        excute.execute(sql, {}, callback);
    },

    updateProductCategory: function(data, callback) {
        var sql = queries.updateProductCategory;
        excute.execute(sql, data, callback);
    }
}