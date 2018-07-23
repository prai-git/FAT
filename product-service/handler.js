'use strict';
const dbService = require('./database/dbService');

////////////////// product Category  ///////////////////////////////
module.exports.createProductCategory = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productCategoryDbService.insertProductCategory(data, callback);
};

module.exports.getProductCategory = (event, context, callback) => {
    const id = event.pathParameters.categoryId;
    dbService.productCategoryDbService.getProductCategory(id, callback);
};

module.exports.updateProductCategory = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productCategoryDbService.updateProductCategory(data, callback);
};

module.exports.getAllProductCategories = (event, context, callback) => {
    dbService.productCategoryDbService.getAllProductCategory(id, callback);
};

////////////////// product  ///////////////////////////////
module.exports.createProduct = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDbService.insertProduct(data, callback);
};

module.exports.getProduct = (event, context, callback) => {
    const id = event.pathParameters.productId
    dbService.productDbService.getProduct(id, callback);
};

module.exports.updateProduct = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDbService.updateProduct(data, callback);
};

module.exports.getAllProduct = (event, context, callback) => {
    dbService.productDbService.getAllProduct(callback);
};

////////////////// product Price  ///////////////////////////////
module.exports.createProductPrice = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productPriceDbService.insertProductPrice(data, callback);
};

module.exports.getProduct = (event, context, callback) => {
    const id = event.pathParameters.productId;
    dbService.productPriceDbService.getProductPrice(id, callback);
};

module.exports.updateProduct = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productPriceDbService.updateProductPrice(data, callback);
};

////////////////// product Dependents ///////////////////////////////
module.exports.createProductDependents = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDependentsDbService.insertProductDependent(data, callback);
};

module.exports.getProductDependents = (event, context, callback) => {
    const id = event.pathParameters.productId
    dbService.productDependentsDbService.getProductDependents(id, callback);
};

module.exports.updateProductDependents = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.productDependentsDbService.updateProductDependents(data, callback);
};

////////////////// supplier item ///////////////////////////////

module.exports.createSupplierItem = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierItemDbService.insertSupplierItem(data, (err, res)=>{
        if(err != null){
            callback(err,res);
            return;
        }

        const id = JSON.parse(res.body).info.insertId;
        data.supplierItemId = id;
        data.id = id;
        dbService.supplierItemDetailDbService.insertSupplierItemDetail(data, (err1, res1)=>{
            callback(err1, res);
        });
    });
};


module.exports.getSupplierItem = (event, context, callback) => {
    const supplierId = event.pathParameters.supplierId;
    const itemId = event.pathParameters.itemId;
    console.log('supplierId:', supplierId);
    console.log('itemId:', itemId);
    dbService.supplierItemDbService.getSupplierItem(supplierId, itemId, callback);
};

module.exports.updateSupplierItem = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierItemDbService.updateSupplierItem(data, callback);
    console.log(data);
    dbService.supplierItemDbService.updateSupplierItem(data, (err, res)=>{
        if(err != null){
            callback(err,res);
            return;
        }

        data.supplierItemId = data.id;
        console.log(data);
        dbService.supplierItemDetailDbService.updateSupplierItemDetail(data, (err1, res1)=>{
            callback(err1, res);
        });
    });
};


////////////////// supplier Item Details ///////////////////////////////

module.exports.createSupplierItemDetails = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierItemDetailDbService.insertSupplierItemDetail(data, callback);
};


module.exports.getSupplierItemDetails = (event, context, callback) => {
    const id = event.pathParameters.supplierId;
    dbService.supplierItemDetailDbService.getSupplierItemDetail(id, callback);
};

module.exports.updateSupplierItemDetails = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierItemDetailDbService.updateSupplierItemDetail(data, callback);
};


////////////////// supplier Product Map ///////////////////////////////

module.exports.createSupplierProductMap = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierProductMapDbService.insertSupplierProductMap(data, callback);
};


module.exports.getSupplierProductMap = (event, context, callback) => {
    const id = event.pathParameters.supplierId;
    dbService.supplierProductMapDbService.getSupplierProductMap(id, callback);
};

module.exports.updateSupplierProductMap = (event, context, callback) => {
    const data = JSON.parse(event.body);
    dbService.supplierProductMapDbService.updateSupplierProductMap(data, callback);
};

