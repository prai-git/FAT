var Client = require('mariasql');
var keys = require('../config/keys');
var imageQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');


module.exports = {
    insertImage: function(data, callback) {
        var sql = imageQueries.insertImage;
        console.log(sql);
        excute.execute(sql, data, callback);
    },

    /* Retrieves a User model by ID */
    getImageById: function(id, callback) {
        var sql = imageQueries.getImageById;
        excute.execute(sql, { 'id': id }, callback);
    },

    getImageByName: function(name, callback) {
        var sql = imageQueries.getImageByName;
        excute.execute(sql, { 'name': name }, callback);
    },

    getImageCount: function(userId, callback) {
        var sql = imageQueries.getImageCount;
        excute.execute(sql, { 'userId': userId }, callback);
    },

    getAllImageCount: function(callback) {
        var sql = imageQueries.getAllImageCount;
        excute.execute(sql, {}, callback);
    },

    getImageByuuid: function(uuid, callback) {
        var sql = imageQueries.getImageByuuid;
        excute.execute(sql, { 'uuid': uuid }, callback);
    },

    deleteimageByID: function(id, callback) {
        var sql = imageQueries.deleteImageById;
        excute.execute(sql, { 'id': id }, callback);
    },

    deleteImageByName: function(name, callback) {
        var sql = imageQueries.deleteImageByName;
        excute.execute(sql, { 'name': name }, callback);
    },

    deleteImageByUuid: function(uuid, callback) {
        var sql = imageQueries.deleteImageByUuid;
        excute.execute(sql, { 'uuid': uuid }, callback);
    },

    updateImage: function(image, callback) {
        var sql = imageQueries.updateImage;
        excute.execute(sql, image, callback);
    },

    getImagesByEeventId: function(userId, eventId, callback) {
        var sql = imageQueries.getImagesByEventId;
        excute.execute(sql, { 'folderId': eventId, 'userId': userId }, callback);
    }
}