var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertNotification: function(data, callback) {
        var sql = queries.insertNotification;
        excute.execute(sql, data, callback);
    },

    getNotification: function(id, callback) {
        var sql = queries.getNotification;
        excute.execute(sql, { 'id': id }, callback);
    },

    
    updateNotification: function(data, callback) {
        var sql = queries.updateOrer;
        excute.execute(sql, data, callback);
    }
}