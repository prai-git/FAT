var Client = require('mariasql');
var keys = require('../config/keys');
let eventQueries = require('./queries/statement');
var excute = require('../mariadbcon/execureQuery');

const responseSuccess = {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
        message: 'function executed successfully!'
    }),
};


module.exports = {
    insertEvent: function(data, callback) {
        var sql = eventQueries.insertEvent;
        excute.execute(sql, data, (err1, data1) => {
            console.log('sadffffffffffffffffffffffffffffffff');
            const eventResponse = data1;
            console.log('eventResponse', eventResponse);
            const id = data.id = JSON.parse(data1.body).info.insertId;
            this.updatePassword(data, (err2, data2) => {
                responseSuccess.body = '{"info":{"numRows":"0","affectedRows":"1","insertId":' + data.id + ' }}'
                callback(err2, responseSuccess);
            })
        });
    },

    updatePassword: function (data, callback) {
        console.log(data);
        console.log('setting password');
        console.log(data);
        console.log(typeof data.password !== 'undefined');
        if(data != null && typeof data.password !== 'undefined') {
           console.log('setting password');
           
            const authData = {
                authKey: data.id,
                value: data.password
            }

            console.log(authData);
            
            this.insertEventPassword(authData, callback);
        } else {
            callback(null, null);
        }
    },

    /* Retrieves a User model by ID */
    getEventByID: function(id, callback) {
        var sql = eventQueries.getEventByID;
        excute.execute(sql, { 'id': id }, callback);
    },



    getImagesByEventId: function(eventId, callback) {
        var sql = eventQueries.getImagesByEventId;
        excute.execute(sql, { 'folder_id': eventId }, callback);
    },

    deleteEventById: function(id, callback) {
        var sql = eventQueries.deleteEventById;
        excute.execute(sql, { 'id': id }, callback);
    },

    deleteImagesByEventId: function(id, callback) {
        var sql = eventQueries.deleteImagesByEventId;
        excute.execute(sql, { 'folderId': id }, callback);
    },

    updateEvent: function(data, callback) {
        var sql = eventQueries.updateEvent;

        this.updatePassword(data, (err, data1) => {
            console.log('event password updated', data1);
        });
        excute.execute(sql, data, callback);
    },

    updateImagesByEventId: function(id, newId, callback) {
        var sql = eventQueries.updateImagesByEventId;
        excute.execute(sql, { 'folder_id': id, 'newFolderId': newId }, callback);
    },

    getEventsByUserId: function(userId, callback) {
        var sql = eventQueries.getEventsByUserId;
        excute.execute(sql, { 'userId': userId }, callback);
    },

    getEventCount: function(userId, callback) {
        var sql = eventQueries.getEventCount;
        excute.execute(sql, { 'userId': userId }, callback);
    },

    getAllEventCount: function(callback) {
        var sql = eventQueries.getAllEventCount;
        excute.execute(sql, { }, callback);
    },

    //////////////////// Password ////////////////////
    insertEventPassword: function(data, callback) {
        const sqlGet = eventQueries.getEventPassword;
        excute.execute(sqlGet, data, (err, passList) => {
            console.log("passList");
            console.log(passList.body);
            console.log(passList.body.length);
            if(passList =! null && passList.body.length > 3) {
                const sqlUpdate = eventQueries.updateEeventPassword;
                excute.execute(sqlUpdate, data, callback);
            } else {
                const sql = eventQueries.insertEventPassword;
                excute.execute(sql, data, callback);
            }
        });

    },

    /* Retrieves a User model by ID */
    getEventPassword: function(key, callback) {
        var sql = eventQueries.getEventPassword;
        excute.execute(sql, { 'authKey': key }, callback);
    },

    deleteEventPassword: function(key, callback) {
        var sql = eventQueries.deleteEventPassword;
        excute.execute(sql, { 'authKey': key }, callback);
    },

    updateEventPassword: function(data, callback) {
        var sql = eventQueries.updateEeventPassword;
        excute.execute(sql, data, callback);
    },

    validateEventPassword: function(data, callback) {
        var sql = eventQueries.validateEventPassword;
        excute.executeValidation(sql, data, callback);
    }
}