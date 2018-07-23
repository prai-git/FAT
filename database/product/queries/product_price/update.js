module.exports =
    `UPDATE product_price
    SET
    price = :price , 
    currency = :currency,
    modified_time = now(),
    modifier_id = :userId
    WHERE product_id = :productId AND supplier_id = :supplierId`;