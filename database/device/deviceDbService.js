var Client = require('mariasql');
var keys = require('../config/keys');
var deviceQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertDevice: function(data, callback) {
        var sql = deviceQueries.insertDevice;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    updateDevice: function(data, callback) {
        var sql = deviceQueries.updateDevice;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getdevicesByUserName: function(name, callback) {
        var sql = deviceQueries.getDevicesByUserName;
        excute.execute(sql, { 'name': name }, callback);
    },

    getDevicesByUserNameAndDeviceId: function(data, callback) {
        var sql = deviceQueries.getDevicesByUserNameAndDeviceId;
        excute.execute(sql, data, callback);
    },

    getCountByuserName: function(name, callback) {
        var sql = deviceQueries.getCountByuserName;
        excute.execute(sql, { 'name': name }, callback);
    },

    getCountBySubscriberId: function(id, callback) {
        var sql = deviceQueries.getCountBySubscriberId;
        excute.execute(sql, { 'subscriberId': id }, callback);
    },

    deleteDeviceById: function(id, callback) {
        var sql = deviceQueries.deleteDeviceById;
        excute.execute(sql, { 'id': id }, callback);
    }
}