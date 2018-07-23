var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {

    /* Retrieves a User model by ID */
    getAllUsers: function(callback) {
        var sql = queries.getAllUsers;
        excute.execute(sql, {}, callback);
    },

    getLatestUsers: function(count, callback) {
        var sql = queries.getLatestUsers;
        excute.execute(sql, { 'count': count }, callback);
    },

     ////////////////////////////////////////////////////////
    /////////////////subscriber_cost
    getSettingsByKey: function(data, callback) {
        var sql = queries.getSettingByKey;
        excute.execute(sql, data, callback);
    },

    getAppSettings: function(callback) {
        var sql = queries.getAppSettings;
        excute.execute(sql, {}, callback);
    },

    updateAppSettings: function(data, callback) {
        var sql = queries.updateAppSettings;
        excute.execute(sql, data, callback);
    }
}