var Client = require('mariasql');
var keys = require('../config/keys');
let udQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertAddress: function(data, callback) {
        var sql = udQueries.insertAddress;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getAddressByID: function(userId, callback) {
        var sql = udQueries.getAddress;
        excute.execute(sql, { 'userId': userId }, callback);
    },

    updateAddress: function(address, callback) {
        var sql = udQueries.updateAddress;
        excute.execute(sql, address, callback);
    }
}