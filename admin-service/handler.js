'use strict';
const dbService = require('./database/dbService');

module.exports.getAllUsers = (event, context, callback) => {
    dbService.userAdminDbService.getAllUsers(callback);
};

module.exports.getLatestUsers = (event, context, callback) => {
    dbService.userAdminDbService.getLatestUsers(5, callback);
};

module.exports.getSettingsByKey = (event, context, callback) => {
   const key = event.pathParameters.key;
   dbService.userAdminDbService.getSettingsByKey({appKey:key}, callback)
};


module.exports.getAppSettings = (event, context, callback) => {
    dbService.userAdminDbService.getAppSettings(callback)
 };


module.exports.updateAppSettings = (event, context, callback) => {
    const responseSuccess = {
        statusCode: 501,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        body: JSON.stringify([{
            message: 'INVALID_APP_KEY'
        }]),
    };

    const settings = JSON.parse(event.body);
    const key = settings.key;
    dbService.userAdminDbService.updateAppSettings(settings, callback);
};