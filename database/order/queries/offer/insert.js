module.exports =
    `INSERT INTO offer
        ( 
            type,
            code,
            description,
            min_price,
            min_quantity,
            create_time, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:type, :code , :description, :minPrice, :minQuantity, now(), null, 1 , null)`;