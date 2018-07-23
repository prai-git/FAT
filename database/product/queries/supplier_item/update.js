module.exports =
    `UPDATE supplier_item
    SET
    product_id = :productId , 
    category_id = :categoryId,
    modified_time = now(),
    modifier_id = :userId
    WHERE user_id = :userId and id =:id`;