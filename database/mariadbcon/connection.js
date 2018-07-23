var Client = require('mariasql');

exports.establishConnection = function() {
    var c = new Client({    
       /*  
       // Development server DB
        host: 'foodanytimedb.cfovebtrg10z.us-east-1.rds.amazonaws.com',
        user: 'foodanytime',
        password: 'foodAnytime',
        db: 'foodanytimedb' 
        

       host: 'phototainment360-prod.cavz2bunq52b.us-east-1.rds.amazonaws.com',
       user: 'phototainment360',
       password: 'phototainment360prod',
       db: 'phototainment360'
       */

       host: 'foodanytimedb.cfovebtrg10z.us-east-1.rds.amazonaws.com',
       user: 'foodanytime',
       password: 'foodAnytime',
       db: 'foodanytimedb' 

    });

    return c;
};