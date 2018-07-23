module.exports =
    `INSERT INTO order_item_inventory
        ( 
            order_item_id,
            status,
            descriptioin,
            create_time, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:orderItemId, :status , :description, now(), null, 1 , null)`;