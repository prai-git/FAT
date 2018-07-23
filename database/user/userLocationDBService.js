var Client = require('mariasql');
var keys = require('../config/keys');
let udQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertLocation: function(data, callback) {
        var sql = udQueries.insertLocation;
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getLocationById: function(id, callback) {
        var sql = udQueries.getLocation;
        excute.execute(sql, { 'id': id }, callback);
    },

    updateLocation: function(userDetails, callback) {
        var sql = udQueries.updateLocation;
        excute.execute(sql, userDetails, callback);
    }
}