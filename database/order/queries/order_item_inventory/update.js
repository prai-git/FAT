module.exports =
    `UPDATE order_item_inventory
        SET
            order_item_id = :orderItemId, 
            status = :status,
            description = :description,
            modified_time = now(),
            modifier_id = :modifierId
            WHERE order_item_id = :orderItemId`;