module.exports =
    `UPDATE order_item
        SET
        order_id = :orderId, 
        product_id = :productId,
        supplier_id = :userId,
        quantity = :quantity,
        price = :price,
        currency = :currency,
        modified_time = now(),
        modifier_id = :modifierId
        WHERE id = :id`;