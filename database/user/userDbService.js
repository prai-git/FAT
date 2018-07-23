var Client = require('mariasql');
var keys = require('../config/keys');
var queries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertUser: function(data, callback) {
        var sql = queries.insertUser;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getUserByID: function(id, callback) {
        var sql = queries.getUserByID;
        excute.execute(sql, { 'id': id }, callback);
    },

    getUserByName: function(name, callback) {
        var sql = queries.getUserByName;
        excute.execute(sql, { 'name': name }, callback);
    },

    getUserByPhone: function(phone, callback) {
        var sql = queries.getUserByPhone;
        excute.execute(sql, { 'phone': phone }, callback);
    },

    getUserByNameAndDeviceID: function(name, callback) {
        var sql = queries.getUserByName;
        excute.execute(sql, { 'name': name }, (err, data) => {
            var subSql = subQueries.getSubscriberById;
            excute.execute(sql, { 'id': data.id }, (err1, data1) => {
                data1.device
            });
        });
    },

    getUserByEmail: function(email, callback) {
        var sql = queries.getUserByEmail;
        excute.execute(sql, { 'email': email }, callback);
    },

    updateUser: function(user, callback) {
        var sql = queries.updateUser;
        
        excute.execute(sql, user, callback);
    },

    deleteUserByID: function(id, callback) {
        var sql = queries.deleteUserByID;
        excute.execute(sql, { 'id': id }, callback);
    },

    deleteUserByName: function(name, callback) {
        var sql = queries.deleteUserByName;
        excute.execute(sql, { 'name': name }, callback);
    },

    deleteUserByEmail: function(email, callback) {
        var sql = queries.deleteUserByEmail;
        excute.execute(sql, { 'email': email }, callback);
    }
}