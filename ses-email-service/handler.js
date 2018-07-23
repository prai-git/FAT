'use strict';

// importing AWS sdk
///var AWS  = require('aws-sdk');
var AWS = require('aws-sdk');
// import request from 'request';
// importing config file which contains AWS key
// Best practice: to use a config.copy.json when pushing to github
// Coz exposing the AWS keys to public is not good
var config = require('./config.json');
var sesHandler = require('./ses/sesHandler');
var smsHandler = require('./sms/smsHandler');


AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region
});

// Instatiating the SES from AWS SDK
let ses = new AWS.SES();


// The function to send SES email message
module.exports.sendMail = (event, context, callback) => {
  
  console.log(event.body);
  let emailParams = JSON.parse(event.body);
  console.log(emailParams.type > 1);
  console.log('typeof emailParams', ' :: ', typeof emailParams != 'undefined' );
  console.log('typeof emailParams.type', ' :: ', typeof emailParams.type != 'undefined');
  if(typeof emailParams != 'undefined' && typeof emailParams.type != 'undefined' && emailParams.type > 1 ){
    emailParams = sesHandler.getEmailParam2(emailParams);    
  } else {
    // emailParams = sesHandler.getEmailParam2(emailParams);    
    emailParams = sesHandler.getEmailParam(emailParams.fileName, emailParams.to);    
  }
  
  console.log(emailParams);
  console.log(typeof emailParams);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Mail sent successfully'
    }),
  };
  
// The sendEmail function taking the emailParams and sends the email requests.
// type:1 : share
// type:2 : send mail
// type:3 : renew request
  ses.sendEmail(emailParams, function (err, data) {
      if (err) {
          console.log(err, err.stack);
          callback(err);
      } else {
        console.log("SES successful");
        console.log(data);
        callback(null, response);
      }
  });
};


module.exports.sendMessage = (event, context, callback) => {

  console.log(event.body);
  let params = JSON.parse(event.body);
  console.log(params);
  params = sesHandler.getMessage(params.fileName, params.to);
  
  smsHandler.send(params, callback)
};