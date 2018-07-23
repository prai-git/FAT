var Client = require('mariasql');
var keys = require('../config/keys');
var stQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    
    insertLicense: function(data, callback) {
        var sql = stQueries.insertLicense;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    updateLicense: function(data, callback) {
        var sql = stQueries.updateLicense;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    
    getLicensesById: function(id, callback) {
        var sql = stQueries.getLicensesById;
        excute.execute(sql, { 'id': id }, callback);
    },
    
    getLicensesBysubscriberId: function(data, callback) {
        var sql = stQueries.getLicensesBysubscriberId;
        excute.execute(sql, data, callback);
    },

    getCountBySubscriberId: function(data, callback) {
        var sql = stQueries.getCountBySubscriberId;
        excute.execute(sql, data, callback);
    },

    getCountById: function(id, callback) {
        var sql = stQueries.getCountById;
        excute.execute(sql, { 'id': id }, callback);
    },

    deleteLicense: function(id, callback) {
        var sql = stQueries.deleteLicense;
        excute.execute(sql, { 'id': id }, callback);
    }
}