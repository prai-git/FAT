'use strict';

const Sender = require('aws-sms-send');

// importing AWS sdk
///var AWS  = require('aws-sdk');
const AWS = require('aws-sdk');
// import request from 'request';
// importing config file which contains AWS key
// Best practice: to use a config.copy.json when pushing to github
// Coz exposing the AWS keys to public is not good
const config = require('../config.json');

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region
});
var sms={

    config :{
        AWS: {
          accessKeyId: config.aws.accessKeyId,
          secretAccessKey: config.aws.secretAccessKey,
          region: config.aws.region,
        },
      },

    send:function(smsOptions, callback){
        var sender = new Sender(sms.config);
        sender.sendSms(smsOptions.text, smsOptions.topic, false, String(smsOptions.number))
        .then(function(data) {

          const response = {
            statusCode: 200,
            body: JSON.stringify({
              message: 'message sent successfully'
            }),
          };

          console.log(response);
          callback(null, response);
        })
        .catch(function(err) {
           console.log(err)
           callback(err, null);
        });
    }
}

   
  
module.exports = sms;