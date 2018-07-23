var Client = require('mariasql');
var keys = require('../config/keys');
let udQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insert: function(data, callback) {
        var sql = udQueries.insertUserSupplier;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    get: function(id, callback) {
        var sql = udQueries.getUserSupplier;
        excute.execute(sql, { 'id': id }, callback);
    },

    update: function(user, callback) {
        var sql = udQueries.updateUserSupplier;
        excute.execute(sql, user, callback);
    }
}