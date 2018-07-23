module.exports =
    `INSERT INTO product_dependents
        ( 
        product_id,
        dependent_product_id,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:productId, :dependentProductId, now(), null, 1 , null)`;