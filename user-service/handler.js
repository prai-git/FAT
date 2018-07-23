'use strict';
const dbService = require('./database/userDbService');

module.exports.createUser = (event, context, callback) => {
    const user = JSON.parse(event.body);
    //console.log("user : ", user);
    const callbackSelf = callback;
    dbService.userDbService.insertUser(user, (err, data)=>{
        //console.log('created User', data);
        const userId = JSON.parse(data.body).info.insertId;
        //console.log('userId : ', userId);
        if(user.addresses != null){
            user.addresses.forEach(function (address) {
               // console.log('address', address);
                address.userId = userId;
                dbService.userAddressDbService.insertAddress(address, (err1, data1)=>console.log(address));
            });
        }
            
        callback(err, data);
        // this.getUserByPhone({ pathParameters: { 'phoneNumber': user.phone} }, callbackSelf);
    });
    
    
};

module.exports.updateUser = (event, context, callback) => {
    const user = JSON.parse(event.body);

    dbService.userDbService.updateUser(user, callback);

    const callbackSelf = callback;
    dbService.userDbService.updateUser(user, (err, data)=>{
        //console.log('created User', data);
        const userId = JSON.parse(data.body).info.insertId;
        //console.log('userId : ', userId);
        if(user.addresses != null){
            user.addresses.forEach(function (address) {
               console.log('address', address);
                if(address.userId == null){
                    address.userId = user.id;
                    dbService.userAddressDbService.insertAddress(address, (err1, data1)=>console.log(address));
                }
                    dbService.userAddressDbService.updateAddress(address, (err1, data1)=>console.log(address));
                }
            );
                
        }
        callback(err, data);
    });
    
};

module.exports.getUserById = (event, context, callback) => {
    const id = event.pathParameters.userId
    dbService.userDbService.getUserByID(id, callback);
};

module.exports.getUserByName = (event, context, callback) => {
    const name = event.pathParameters.userName
    dbService.userDbService.getUserByName(name, callback);
};

module.exports.getUserByPhone = (event, context, callback) => {
    const phoneNumber = event.pathParameters.phoneNumber;
    console.log('phoneNumber', phoneNumber);
    dbService.userDbService.getUserByPhone(phoneNumber, callback);
};

///////////////// User Address //////////////////////////////
module.exports.createUserAddress = (event, context, callback) => {
    const address = JSON.parse(event.body);
    dbService.userAddressDbService.insertAddress(address, callback);
};

module.exports.updateUserAddress = (event, context, callback) => {
    const address = JSON.parse(event.body);
    dbService.userAddressDbService.updateAddress(address, callback);
};


module.exports.getUserAddress = (event, context, callback) => {
    const id = event.pathParameters.userId;
    dbService.userAddressDbService.getAddressByID(id, callback);
};


///////////////// User Location //////////////////////////////
module.exports.createUserLocation = (event, context, callback) => {
    const address = JSON.parse(event.body);
    dbService.userLocationDbService.insertLocation(address, callback);
};

module.exports.updateUserLocation = (event, context, callback) => {
    const address = JSON.parse(event.body);
    dbService.userLocationDbService.updateLocation(address, callback);
};


module.exports.getUserLocation = (event, context, callback) => {
    const id = event.pathParameters.userDetailsId
    dbService.userLocationDbService.getUserLocation(id, callback);
};

///////////////// User Supplier //////////////////////////////
module.exports.createUserSupplier = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userSupplierDbService.insert(user, callback);
};

module.exports.updateUserSupplier = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userSupplierDbService.update(user, callback);
};


module.exports.getUserSupplier = (event, context, callback) => {
    const id = event.pathParameters.userDetailsId
    dbService.userSupplierDbService.get(id, callback);
};


///////////////// User Buyer //////////////////////////////
module.exports.createUserBuyer = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userBuyerDbService.insert(user, callback);
};

module.exports.updateUserBuyer = (event, context, callback) => {
    const user = JSON.parse(event.body);
    dbService.userBuyerDbService.update(user, callback);
};

module.exports.getUserBuyer = (event, context, callback) => {
    const id = event.pathParameters.userDetailsId
    dbService.userBuyerDbService.get(id, callback);
};
