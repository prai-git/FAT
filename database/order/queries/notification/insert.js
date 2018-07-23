module.exports =
    `INSERT INTO notification
        ( 
            from,
            to,
            subject,
            content,
            status,
            type, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:type, :code , :description, :minPrice, :minQuantity, now(), null, 1 , null)`;