var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertProductDependent: function(data, callback) {
        var sql = queries.insertProductDependent;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getProductDependents: function(id, callback) {
        var sql = queries.getProductDependents;
        excute.execute(sql, { 'id': id }, callback);
    },

    updateProductDependents: function(data, callback) {
        var sql = queries.updateProductDependents;
        excute.execute(sql, data, callback);
    }
}