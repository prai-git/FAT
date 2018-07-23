module.exports =
    `UPDATE product_dependents
    SET
    dependent_product_id = :dependentProductId ,   
    product_id = :productId ,
    modified_time = now(),
    modifier_id = :modifierId
    WHERE id = :id`;