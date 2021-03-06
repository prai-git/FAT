var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertOrder: function(data, callback) {
        var sql = queries.insertOrder;
        excute.execute(sql, data, callback);
    },

    getOrder: function(id, callback) {
        var sql = queries.getOrder;
        excute.execute(sql, { 'id': id }, callback);
    },

    
    updateOrder: function(data, callback) {
        var sql = queries.updateOrer;
        excute.execute(sql, data, callback);
    }
}