var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertOffer: function(data, callback) {
        var sql = queries.insertOffer;
        excute.execute(sql, data, callback);
    },

    getOffer: function(id, callback) {
        var sql = queries.getOffer;
        excute.execute(sql, { 'id': id }, callback);
    },

    
    updateOffer: function(data, callback) {
        var sql = queries.updateOrer;
        excute.execute(sql, data, callback);
    }
}