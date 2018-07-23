var Client = require('mariasql');
var con = require('./connection');

const responseSuccess = {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
        message: 'function executed successfully!'
    }),
};

const responseError = {
    statusCode: 502,
    headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
        message: 'no db connection'
    }),
};

exports.execute = function(sql, data, callback) {
    var connection = con.establishConnection();
    console.log(sql);
    connection.query(sql, data, function(err, rows) {
        if (err) {
            console.log(err);
            responseError.body = err
            callback(responseError, null);
            return;
        }
        //console.log(rows);
        //console.log(typeof rows);
        responseSuccess.body = JSON.stringify(rows);
        if(callback != null) {
            callback(null, responseSuccess);
        } else {
            console.log('callback is null');
        }
    });

    connection.end();
};

exports.executeValidation = function(sql, data, callback) {
    var connection = con.establishConnection();
    console.log(sql);
    connection.query(sql, data, function(err, rows) {
        if (err) {
            console.log(err);
            responseError.body = err
            callback(responseError, null);
            return;
        }
        console.log(rows);
        if(rows.length > 0) {
            responseSuccess.body = 'true';
        } else {
            responseSuccess.body = 'false';            
        }
        callback(null, responseSuccess);
    });

    connection.end();
};