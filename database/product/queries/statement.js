module.exports.insertProduct = require('./product/insert');
module.exports.getProduct = require('./product/get');
module.exports.getAllProduct = require('./product/getAll');
module.exports.updateProduct = require('./product/update');


module.exports.insertProductCategory = require('./product_category/insert');
module.exports.getProductCategory = require('./product_category/get');
module.exports.getAllProductCategory = require('./product_category/getAll');
module.exports.updateProductCategory = require('./product_category/update');

module.exports.insertProductDependents = require('./product_dependents/insert');
module.exports.getProductDependents = require('./product_dependents/get');
//module.exports.getAllProductDependents = require('./product_dependents/getAll');
module.exports.updateProductDependents = require('./product_dependents/update');

module.exports.insertProductPrice = require('./product_price/insert');
module.exports.getProductPrice = require('./product_price/get');
//module.exports.getAllProductPrice = require('./product_price/getAll');
module.exports.updateProductPrice = require('./product_price/update');


module.exports.insertSupplierItem = require('./supplier_item/insert');
module.exports.getSupplierItem = require('./supplier_item/get');
//module.exports.getAllSupplierItem = require('./supplier_item/getAll');
module.exports.updateSupplierItem = require('./supplier_item/update');


module.exports.insertSupplierItemDetail = require('./supplier_item_detail/insert');
module.exports.getSupplierItemDetail = require('./supplier_item_detail/get');
module.exports.updateSupplierItemDetail = require('./supplier_item_detail/update');


module.exports.insertSupplierProductMap = require('./supplier_product_map/insert');
module.exports.getSupplierProductMap = require('./supplier_product_map/get');
//module.exports.getAllSupplierProductMap = require('./supplier_product_map/getAll');
module.exports.updateSupplierProductMap = require('./supplier_product_map/update');
