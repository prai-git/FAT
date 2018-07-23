module.exports =
    `INSERT INTO order_item
        ( 
            order_id,
            product_id,
            supplier_id,
            quantity,
            price,
            currency,
            create_time, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:OrderId, :productId , :supplierId, :quantity, :price, :currency, now(), null, 1 , null)`;